'use client';

import { ContentfulEntry } from '@/lib/contentful';
import { useContentfulLiveUpdates } from '@contentful/live-preview/react';
import React from 'react';
import { BlogAuthor } from './author';
import { BlogPostContent } from './postContent';
import { BlogPostHeader } from './postHeader';

type PostProps = {
  post: ContentfulEntry;
};

// wrapper of postHeader, postContent, author
export const Post: React.FC<PostProps> = ({ post }) => {
  const data = useContentfulLiveUpdates(post);
  const { tags } = data.metadata;
  const { createdAt } = data.sys;
  const { title, content } = data.fields;
  return (
    <article className='mb-8 flex grow flex-col gap-8'>
      <BlogPostHeader title={title} tags={tags} updatedAt={createdAt} postId={post.sys.id} />
      <BlogPostContent content={content} />
      <BlogAuthor />
    </article>
  );
};
