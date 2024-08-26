import { createClient } from 'contentful';
import { z } from 'zod';

export const contentful = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export const postSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  content: z.string(),
  tags: z.array(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const getLatestPostIndex = async (limit = 10) => {
  const entries = await contentful.getEntries({
    content_type: 'post',
    order: ['-sys.createdAt'],
    limit: limit,
  });

  const mapped = entries.items.map((entry) => {
    return {
      id: entry.sys.id,
      title: entry.fields.title,
      slug: entry.fields.slug,
      excerpt: entry.fields.excerpt,
      tags: entry.metadata.tags.map((tag: any) => tag.sys.id),
      createdAt: entry.sys.createdAt,
    };
  });

  const validated = postSchema.array().safeParse(mapped);

  if (validated.success) return validated.data;
  return [];
};

export const getPostBySlug = async (slug: string) => {
  const entry = await contentful.getEntries({
    content_type: 'post',
    'fields.slug': slug,
  });

  if (entry.items.length === 0) {
    return null;
  }

  const mapped = {
    id: entry.items[0].sys.id,
    title: entry.items[0].fields.title,
    slug: entry.items[0].fields.slug,
    content: entry.items[0].fields.content,
    tags: entry.items[0].metadata.tags.map((tag: any) => tag.sys.id),
    createdAt: entry.items[0].sys.createdAt,
    updatedAt: entry.items[0].sys.updatedAt,
  };

  const validated = postSchema.safeParse(mapped);
  if (validated.success) return validated.data;
  return null;
};
