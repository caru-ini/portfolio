import { mdIt } from '@/lib/markdownIt';
import './style.css';

type BlogPostContentProps = {
  content: string;
};

export const BlogPostContent: React.FC<BlogPostContentProps> = ({ content }) => (
  <div
    className='markdown-body prose dark:prose-invert lg:prose-lg lg:rounded-md'
    dangerouslySetInnerHTML={{ __html: mdIt.render(content) }}
  />
);