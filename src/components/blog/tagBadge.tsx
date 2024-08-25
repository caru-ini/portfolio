'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

type TagBadgeProps = {
  tag: string;
};

export const TagBadge: React.FC<TagBadgeProps> = ({ tag }) => {
  const router = useRouter();
  return (
    <div key={tag}>
      <button
        onClick={() => router.push(`/blog/tags/${tag}`)}
        className='mr-2 inline-block rounded-lg bg-secondary px-2 py-1 text-sm text-white backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-primary'
      >
        {tag}
      </button>
    </div>
  );
};
