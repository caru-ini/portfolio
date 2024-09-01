import { createClient } from 'contentful';
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

// tag data from content entry
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

export const getLatestPostIndex = async (limit = 6) => {
  const entries = await client.getEntries({
    content_type: 'post',
    order: ['-sys.createdAt'],
    limit: limit,
  });

  const validated = z.array(ContentfulEntrySchema).safeParse(entries.items);

  if (validated.success) return validated.data;
  return [];
};

export const getPostBySlug = async (slug: string) => {
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
};

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
  return null;
};

export const getPostByTag = async (tagId: string) => {
  const entries = await client.getEntries({
    content_type: 'post',
    'metadata.tags.sys.id[all]': [tagId],
  });

  const validated = z.array(ContentfulEntrySchema).safeParse(entries.items);

  if (validated.success) return validated.data;
  return [];
};

export const getTagById = async (id: string) => {
  const entry = await client.getTags({
    'sys.id': id,
  });

  if (!entry) {
    return null;
  }

  return entry.items[0];
};

export const getTags = async () => {
  const entries = await client.getTags();

  if (entries.items.length === 0) {
    return [];
  }
  return entries.items;
};
