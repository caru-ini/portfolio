import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const posts = sqliteTable('posts', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  title: text('title'),
  content: text('content'),
  createdAt: integer('createdAt', { mode: 'timestamp' }).default(
    sql`CURRENT_TIMESTAMP`
  ),
  updatedAt: integer('updatedAt', { mode: 'timestamp' }).default(
    sql`CURRENT_TIMESTAMP`
  ),
});

export const tags = sqliteTable('tags', {
  id: text('id'),
  name: text('name'),
});

export const postTags = sqliteTable('postTags', {
  postId: text('postId'),
  tagId: text('tagId'),
});
