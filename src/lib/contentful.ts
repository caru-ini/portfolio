import { createClient } from 'contentful';
import { cache } from 'react';
import { z } from 'zod';

const CONTENTFUL_SPACE_ID = z.string().parse(process.env.CONTENTFUL_SPACE_ID!);
const CONTENTFUL_ACCESS_TOKEN = z.string().parse(process.env.CONTENTFUL_ACCESS_TOKEN!);
const CONTENTFUL_PREVIEW_ACCESS_TOKEN = z
  .string()
  .parse(process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!);

const LinkSchema = z.object({
  type: z.literal('Link'),
  linkType: z.string(),
  id: z.string(),
});

const TagSchema = z.object({
  sys: LinkSchema,
});

const ContentfulEntrySchema = z.object({
  metadata: z.object({
    tags: z.array(TagSchema),
  }),
  sys: z.object({
    id: z.string(),
    type: z.literal('Entry'),
    createdAt: z.string(),
    updatedAt: z.string(),
    revision: z.number(),
    locale: z.string(),
  }),
  fields: z.object({
    title: z.string().default(''),
    slug: z.string().default(''),
    content: z.string().default(''),
    excerpt: z.string().default(''),
  }),
});

export type ContentfulEntry = z.infer<typeof ContentfulEntrySchema>;

export type ContentfulTag = z.infer<typeof TagSchema>;

export const client = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_ACCESS_TOKEN,
  host: 'cdn.contentful.com',
});

export const previewClient = createClient({
  space: CONTENTFUL_SPACE_ID,
  accessToken: CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com',
});

export const getLatestPostIndex = cache(async (limit = 6) => {
  const entries = await client.getEntries({
    content_type: 'post',
    order: ['-sys.createdAt'],
    limit: limit,
  });

  const validated = z.array(ContentfulEntrySchema).safeParse(entries.items);

  console.log(validated.data);

  if (validated.success) return validated.data;
  console.log(validated.error);
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

  if (!entry) {
    return null;
  }

  return ContentfulEntrySchema.parse(entry);
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

  const validated = ContentfulEntrySchema.safeParse(entry);

  if (validated.success) return validated.data;
  console.log(validated.error);
  return null;
};
