import { getLatestPostIndex } from '@/lib/contentful';
import { BlogPostCard } from './postCard';

type LatestPostsProps = {
  limit?: number;
};

export const LatestPosts: React.FC<LatestPostsProps> = async ({ limit = 3 }) => {
  const posts = await getLatestPostIndex(limit);
  return (
    <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
      {posts ? (
        posts.map((post) => <BlogPostCard key={post.sys.id} post={post} />)
      ) : (
        <div className='h-40 animate-pulse rounded-lg bg-gray-200'></div>
      )}
    </div>
  );
};
