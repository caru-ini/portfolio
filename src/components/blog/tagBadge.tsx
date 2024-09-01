'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

type TagBadgeProps = {
  tag: string;
};

export const TagBadge: React.FC<TagBadgeProps> = ({ tag }) => {
  const router = useRouter();
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/blog/tags/${tag}`);
  };
  return (
    <div key={tag}>
      <button
        onClick={onClick}
        className='mr-2 inline-block rounded-lg bg-secondary px-2 py-1 text-sm backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-primary'
      >
        {tag}
      </button>
    </div>
  );
};
