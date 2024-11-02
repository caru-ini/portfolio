'use client';
import { ContentfulEntry } from '@/lib/contentful';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { CalendarDays } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { TagBadge } from './tagBadge';

type BlogPostCardProps = {
  post: ContentfulEntry;
};

dayjs.extend(utc);
dayjs.extend(timezone);

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const router = useRouter();
  const tags = post.metadata.tags.map((tag) => tag.sys.id);
  const { title, excerpt, slug } = post.fields;
  const date = dayjs(post.sys.createdAt).tz('Asia/Tokyo').format('YYYY-MM-DD');

  const onClick = () => {
    router.push(`/blog/${slug}`);
  };

  return (
    <div
      onClick={onClick}
      className='flex cursor-pointer flex-col rounded-lg border border-border p-4 transition-all duration-300 ease-out hover:scale-105 hover:bg-secondary/20 hover:shadow-md'
    >
      <h3 className='mb-2 text-xl font-semibold'>{title}</h3>
      <p className='mb-2 inline-flex items-center text-sm text-muted-foreground'>
        <CalendarDays size={16} className='mr-1' />
        {date}
      </p>
      <p className='text-muted-foreground'>{excerpt}</p>
      <div className='mt-2 flex flex-wrap'>
        {tags?.map((tag) => <TagBadge tag={tag} key={tag} />)}
      </div>
    </div>
  );
};
