import { TagBadge } from './tagBadge';

type PostHeaderProps = {
  title: string;
  updatedAt: string;
  tags: string[];
};

export const BlogPostHeader: React.FC<PostHeaderProps> = ({ title, updatedAt, tags }) => (
  <header className='grow-0'>
    <time className='mb-2 block text-sm text-muted-foreground'>
      {new Date(updatedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })}
    </time>
    <h1 className='mb-4 text-3xl font-bold tracking-tight md:text-4xl'>{title}</h1>
    <ul className='flex flex-wrap gap-2'>
      {tags.map((tag) => (
        <li key={tag}>
          <TagBadge tag={tag} />
        </li>
      ))}
    </ul>
  </header>
);
