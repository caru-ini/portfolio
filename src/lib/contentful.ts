import { cache } from 'react';
import { z } from 'zod';

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID!;
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN!;
const CONTENTFUL_API_URL = `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}`;

export const postSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  content: z.string(),
  tags: z.array(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
});

async function fetchContentful(endpoint: string, params: Record<string, string>) {
  const url = new URL(`${CONTENTFUL_API_URL}${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });
  url.searchParams.append('access_token', CONTENTFUL_ACCESS_TOKEN);

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Contentful API error: ${response.statusText}`);
  }
  return response.json();
}

export const getLatestPostIndex = cache(async (limit = 10) => {
  const entries = await fetchContentful('/entries', {
    content_type: 'post',
    order: '-sys.createdAt',
    limit: limit.toString(),
  });

  const mapped = entries.items.map((entry: any) => ({
    id: entry.sys.id,
    title: entry.fields.title,
    slug: entry.fields.slug,
    excerpt: entry.fields.excerpt,
    tags: entry.metadata.tags.map((tag: any) => tag.sys.id),
    createdAt: entry.sys.createdAt,
    updatedAt: entry.sys.updatedAt,
    content: entry.fields.content,
  }));

  const validated = postSchema.array().safeParse(mapped);

  if (validated.success) return validated.data;
  return [];
});

export const getPostBySlug = cache(async (slug: string) => {
  const entries = await fetchContentful('/entries', {
    content_type: 'post',
    'fields.slug': slug,
  });

  if (entries.items.length === 0) {
    return null;
  }

  const entry = entries.items[0];
  const mapped = {
    id: entry.sys.id,
    title: entry.fields.title,
    slug: entry.fields.slug,
    content: entry.fields.content,
    tags: entry.metadata.tags.map((tag: any) => tag.sys.id),
    createdAt: entry.sys.createdAt,
    updatedAt: entry.sys.updatedAt,
  };

  const validated = postSchema.safeParse(mapped);
  if (validated.success) return validated.data;
  return null;
});
