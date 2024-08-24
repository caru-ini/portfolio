import { contentful } from '@/lib/contentful';
import { Hono } from 'hono';

export const blog = new Hono()
  .get('/', async (c) => {
    try {
      const entries = await contentful.getEntries({
        content_type: 'post',
        // @ts-ignore
        order: '-sys.createdAt',
      });

      const posts = entries.items.map((item) => ({
        id: item.sys.id,
        title: item.fields.title,
        slug: item.fields.slug,
        excerpt: item.fields.excerpt,
        tags: item.fields.tags,
        createdAt: item.sys.createdAt,
        updatedAt: item.sys.updatedAt,
      }));

      return c.json({ posts });
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      return c.json({ error: 'Failed to fetch blog posts' }, 500);
    }
  })
  .get('/:slug', async (c) => {
    const slug = c.req.param('slug');

    try {
      const entries = await contentful.getEntries({
        content_type: 'blogPost',
        'fields.slug': slug,
      });

      if (entries.items.length === 0) {
        return c.json({ error: 'Blog post not found' }, 404);
      }

      const post = entries.items[0];
      return c.json({
        id: post.sys.id,
        title: post.fields.title,
        slug: post.fields.slug,
        content: post.fields.content,
        createdAt: post.sys.createdAt,
      });
    } catch (error) {
      console.error('Error fetching blog post:', error);
      return c.json({ error: 'Failed to fetch blog post' }, 500);
    }
  });
