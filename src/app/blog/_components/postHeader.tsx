import { ContentfulTag } from '@/lib/contentful';
import { TagBadge } from './tagBadge';

type PostHeaderProps = {
  title: string;
  date: string;
  tags: ContentfulTag[];
  postId: string;
};

export const BlogPostHeader: React.FC<PostHeaderProps> = ({ title, date, tags }) => (
  <header className='grow-0'>
    <time className='mb-2 block text-sm text-muted-foreground'>{date}</time>
    <h1 className='mb-4 text-3xl font-bold tracking-tight md:text-4xl'>{title}</h1>
    <ul className='flex flex-wrap gap-2'>
      {tags ? (
        tags.map((tag) => (
          <li key={tag.sys.id}>
            <TagBadge tag={tag.sys.id} />
          </li>
        ))
      ) : (
        <p className='text-muted-foreground'>No tags</p>
      )}
    </ul>
  </header>
);
