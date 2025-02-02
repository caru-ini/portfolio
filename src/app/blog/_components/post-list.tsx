import { ContentfulEntry } from '@/lib/contentful';
import { BlogPostCard } from './post-card';

type PostsListProps = {
  posts: ContentfulEntry[];
};

export const PostList: React.FC<PostsListProps> = async ({ posts }) => (
  <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
    {posts ? (
      posts.map((post) => <BlogPostCard key={post.sys.id} post={post} />)
    ) : (
      <div className='h-40 animate-pulse rounded-lg bg-gray-200'></div>
    )}
  </div>
);
