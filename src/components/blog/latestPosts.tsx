import { getLatestPostIndex } from '@/lib/contentful';
import { BlogPostCard } from './postCard';

export const LatestPosts: React.FC = async () => {
  const posts = await getLatestPostIndex();
  return (
    <div className='grid gap-8 p-2 md:grid-cols-2 '>
      {posts ? (
        posts.map((post: any) => <BlogPostCard key={post.id} {...post} />)
      ) : (
        <div className='h-40 animate-pulse rounded-lg bg-gray-200'></div>
      )}
    </div>
  );
};
