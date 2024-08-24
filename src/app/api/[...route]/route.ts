import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { blog } from './blog';

const app = new Hono().basePath('/api');

const route = app.route('/blog', blog);

export type AppType = typeof route;

export const GET = handle(app);
export const POST = handle(app);
