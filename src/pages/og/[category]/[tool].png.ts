import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { toolCatalog } from '../../../data/tools';
import { generateOgImageBuffer } from '../../../lib/ogImage';

export async function getStaticPaths() {
  const paths: any[] = [];

  // 1. Tool Pages
  for (const category of toolCatalog) {
    for (const tool of category.tools) {
      paths.push({
        params: {
          category: category.slug,
          tool: tool.slug
        },
        props: {
          title: tool.name,
          categoryName: category.name
        }
      });
    }
  }

  // 2. Blog Posts
  const blogPosts = await getCollection('blog');
  for (const post of blogPosts) {
    paths.push({
      params: {
        category: 'blog',
        tool: post.id
      },
      props: {
        title: post.data.title,
        categoryName: 'Blog'
      }
    });
  }

  return paths;
}

export const GET: APIRoute = async ({ props }) => {
  const { title, categoryName } = props as { title: string; categoryName: string };
  
  try {
    const pngBuffer = await generateOgImageBuffer(title, categoryName);
    
    return new Response(new Uint8Array(pngBuffer), {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    });
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response('Error generating image', { status: 500 });
  }
};
