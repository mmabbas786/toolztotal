import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(70),
    description: z.string().max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.enum(['sarah-chen', 'marcus-reyes', 'priya-krishnan', 'jordan-blake', 'dr-aisha-patel', 'jennifer-walsh', 'dr-robert-hayes', 'editorial-team']),
    category: z.enum(['finance', 'real-estate', 'utility', 'dev', 'text', 'marketing', 'health', 'legal', 'education', 'image-tools']),
    tags: z.array(z.string()).default([]),
    relatedTools: z.array(z.string()).min(1).max(5), // tool slugs to link from this post
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).min(3).max(8),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog };
