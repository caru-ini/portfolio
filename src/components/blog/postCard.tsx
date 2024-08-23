import { CalendarDays } from 'lucide-react';
import Link from 'next/link';
import { TagBadge } from './tagBadge';

type BlogPostCardProps = {
  title: string;
  date: string;
  excerpt: string;
  href: string;
  tags: string[];
};

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ title, date, excerpt, href, tags }) => {
  return (
    <div className='rounded-lg border p-4 transition-shadow hover:shadow-md'>
      <h3 className='mb-2 text-xl font-semibold'>
        <Link href={href} className='hover:text-primary'>
          {title}
        </Link>
      </h3>
      <p className='mb-2 inline-flex items-center text-sm text-muted-foreground'>
        <CalendarDays size={16} className='mr-1' />
        {date}
      </p>
      <p className='text-muted-foreground'>{excerpt}</p>
      <div className='mt-2 flex flex-wrap'>
        {tags.map((tag) => (
          <TagBadge tag={tag} key={tag} />
        ))}
      </div>
    </div>
  );
};
