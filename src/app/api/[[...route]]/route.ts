import { posts } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/d1';
import { Hono } from 'hono';
import { handle } from 'hono/vercel';

export const runtime = 'edge';

type Bindings = {
  DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>().basePath('/api');

app.get('/blog/posts', async (c) => {
  try {
    const db = drizzle(c.env.DB);
    const results = await db.select().from(posts).all();
    return c.json(results);
  } catch (e) {
    return c.json({ error: e }, 500);
  }
});

app.get('/blog/posts/:id', async (c) => {
  try {
    const db = drizzle(c.env.DB);
    const id = parseInt(c.req.param().id);
    const results = await db.select().from(posts).where(eq(posts.id, id)).all();
    return c.json(results);
  } catch (e) {
    return c.json({ error: e }, 500);
  }
});

export type AppType = typeof app;

export const GET = handle(app);
