import { createClient } from 'contentful';
import { cache } from 'react';
import { z } from 'zod';

const CONTENTFUL_SPACE_ID = z.string().parse(process.env.CONTENTFUL_SPACE_ID!);
const CONTENTFUL_ACCESS_TOKEN = z.string().parse(process.env.CONTENTFUL_ACCESS_TOKEN!);
const CONTENTFUL_PREVIEW_TOKEN = z.string().parse(process.env.CONTENTFUL_PREVIEW_TOKEN!);

export const postSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  excerpt: z.string(),
  content: z.string(),
  tags: z.array(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export const client = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
  host: 'cdn.contentful.com',
});

export const previewClient = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_PREVIEW_TOKEN,
  host: 'preview.contentful.com',
});

export const getLatestPostIndex = cache(async (limit = 6) => {
  const entries = await client.getEntries({
    content_type: 'post',
    order: ['-sys.createdAt'],
    limit: limit,
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
  const entries = await client.getEntries({
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
    excerpt: entry.fields.excerpt,
    content: entry.fields.content,
    tags: entry.metadata.tags.map((tag: any) => tag.sys.id),
    createdAt: entry.sys.createdAt,
    updatedAt: entry.sys.updatedAt,
  };

  const validated = postSchema.safeParse(mapped);
  if (validated.success) return validated.data;
  return null;
});

export const getPreviewPostBySlug = async (slug: string) => {
  const entries = await previewClient.getEntries({
    content_type: 'post',
    'fields.slug': slug,
  });

  if (entries.items.length === 0) {
    return null;
  }

  const entry = entries.items[0];
  const mapped = {
    id: entry.sys.id,
    title: entry.fields.title ?? 'No title',
    slug: entry.fields.slug,
    excerpt: entry.fields.excerpt ?? 'No excerpt',
    content: entry.fields.content ?? 'No content',
    tags: entry.metadata.tags?.map((tag: any) => tag.sys.id) ?? [],
    createdAt: entry.sys.createdAt ?? new Date().toISOString(),
    updatedAt: entry.sys.updatedAt ?? new Date().toISOString(),
  };

  const validated = postSchema.safeParse(mapped);
  if (validated.success) return validated.data;
  console.log(validated.error);
  return null;
};
