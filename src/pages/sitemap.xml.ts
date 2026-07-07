import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import fs from 'node:fs';
import path from 'node:path';
import { toolCatalog } from '../data/tools';

function getLastmod(filepath: string): string {
  try {
    const absolutePath = path.resolve(filepath);
    const stat = fs.statSync(absolutePath);
    return stat.mtime.toISOString().slice(0, 10);
  } catch (err) {
    return new Date().toISOString().slice(0, 10);
  }
}

interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
  priority: number;
  image?: {
    loc: string;
    title: string;
  };
}

export const GET: APIRoute = async () => {
  const entries: SitemapEntry[] = [];

  // 1. Homepage
  entries.push({
    url: 'https://toolztotal.com/',
    lastmod: getLastmod('src/pages/index.astro'),
    changefreq: 'daily',
    priority: 1.0
  });

  // 2. Info Hubs
  const infoPages = [
    { route: 'about', file: 'src/pages/about.astro', priority: 0.5, changefreq: 'monthly' as const },
    { route: 'contact', file: 'src/pages/contact.astro', priority: 0.4, changefreq: 'monthly' as const },
    { route: 'privacy', file: 'src/pages/privacy.astro', priority: 0.3, changefreq: 'monthly' as const },
    { route: 'terms', file: 'src/pages/terms.astro', priority: 0.3, changefreq: 'monthly' as const }
  ];
  for (const page of infoPages) {
    entries.push({
      url: `https://toolztotal.com/${page.route}`,
      lastmod: getLastmod(page.file),
      changefreq: page.changefreq,
      priority: page.priority
    });
  }

  // 3. Blog Listing
  entries.push({
    url: 'https://toolztotal.com/blog',
    lastmod: getLastmod('src/pages/blog/index.astro'),
    changefreq: 'daily',
    priority: 0.8
  });

  // 4. Category Hubs
  const categories = [
    { slug: 'finance', file: 'src/pages/[category]/index.astro' },
    { slug: 'real-estate', file: 'src/pages/[category]/index.astro' },
    { slug: 'utility', file: 'src/pages/[category]/index.astro' },
    { slug: 'dev', file: 'src/pages/[category]/index.astro' },
    { slug: 'text', file: 'src/pages/[category]/index.astro' },
    { slug: 'marketing', file: 'src/pages/[category]/index.astro' },
    { slug: 'health', file: 'src/pages/[category]/index.astro' },
    { slug: 'education', file: 'src/pages/[category]/index.astro' },
    { slug: 'image-tools', file: 'src/pages/[category]/index.astro' },
    { slug: 'legal', file: 'src/pages/legal/index.astro' }
  ];
  for (const cat of categories) {
    entries.push({
      url: `https://toolztotal.com/${cat.slug}`,
      lastmod: getLastmod(cat.file),
      changefreq: 'weekly',
      priority: 0.8
    });
  }

  // 5. Tool Pages
  for (const category of toolCatalog) {
    for (const tool of category.tools) {
      const filePath = `src/pages/${category.slug}/${tool.slug}.astro`;
      
      entries.push({
        url: `https://toolztotal.com/${category.slug}/${tool.slug}`,
        lastmod: getLastmod(filePath),
        changefreq: 'monthly',
        priority: 0.7,
        image: {
          loc: `https://toolztotal.com/og/${category.slug}/${tool.slug}.png`,
          title: tool.name
        }
      });
    }
  }

  // 6. Blog Posts
  const blogPosts = await getCollection('blog');
  for (const post of blogPosts) {
    const filePath = `src/content/blog/${post.slug}.md`;
    
    entries.push({
      url: `https://toolztotal.com/blog/${post.slug}`,
      lastmod: getLastmod(filePath),
      changefreq: 'weekly',
      priority: 0.6,
      image: {
        loc: `https://toolztotal.com/og/blog/${post.slug}.png`,
        title: post.data.title
      }
    });
  }

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.map(entry => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>${entry.image ? `
    <image:image>
      <image:loc>${entry.image.loc}</image:loc>
      <image:title>${escapeXml(entry.image.title)}</image:title>
    </image:image>` : ''}
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400'
    }
  });
};

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}
