import marked from '@/lib/marked';
import 'highlight.js/styles/atom-one-dark.css';
import './style.css';

type BlogPostContentProps = {
  content: string;
};

export const BlogPostContent: React.FC<BlogPostContentProps> = ({ content }) => (
  <div
    className='markdown-body prose grow dark:prose-invert lg:prose-lg lg:rounded-md'
    dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
  />
);
