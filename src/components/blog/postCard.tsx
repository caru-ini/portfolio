import { CalendarDays } from 'lucide-react';
import Link from 'next/link';
import { TagBadge } from './tagBadge';

type BlogPostCardProps = {
  title: string;
  slug: string;
  excerpt: string;
  tags?: string[];
  updatedAt: string;
  createdAt: string;
};

export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  slug,
  excerpt,
  tags,
  createdAt,
}) => {
  return (
    <Link
      href={'/blog/' + slug}
      className='rounded-lg border p-4 transition-all duration-300 ease-out hover:scale-105 hover:bg-secondary/20 hover:shadow-md'
    >
      <h3 className='mb-2 text-xl font-semibold'>{title}</h3>
      <p className='mb-2 inline-flex items-center text-sm text-muted-foreground'>
        <CalendarDays size={16} className='mr-1' />
        {new Date(createdAt).toLocaleDateString()}
      </p>
      <p className='text-muted-foreground'>{excerpt}</p>
      <div className='mt-2 flex flex-wrap'>
        {tags?.map((tag) => <TagBadge tag={tag} key={tag} />)}
      </div>
    </Link>
  );
};
