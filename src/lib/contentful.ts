import { createClient } from 'contentful';

export const contentful = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
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

  return mapped;
};
