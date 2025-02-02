'use client';

import { ContentfulEntry } from '@/lib/contentful';
import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import React from 'react';
import { BlogAuthor } from './author';
import { BlogPostContent } from './post-content';
import { BlogPostHeader } from './post-header';

type PostProps = {
  post: ContentfulEntry;
};

dayjs.extend(utc);
dayjs.extend(timezone);

// wrapper of postHeader, postContent, author
export const Post: React.FC<PostProps> = ({ post }) => {
  const data = useContentfulLiveUpdates(post);
  const { tags } = data.metadata;
  const date = dayjs(post.sys.createdAt).tz('Asia/Tokyo').format('YYYY-MM-DD');
  const { title, content } = data.fields;
  return (
    <article className='mb-8 flex grow flex-col gap-8'>
      <BlogPostHeader title={title} tags={tags} date={date} postId={post.sys.id} />
      <BlogPostContent content={content} />
      <BlogAuthor />
    </article>
  );
};
