import { client } from '@/lib/hono';
import useSWR from 'swr';
import { BlogPostCard } from './postCard';

const fetcher = () => client.api.blog.$get().then((res) => res.json() as any);

export const LatestPosts: React.FC = () => {
  const { data } = useSWR('/blog', fetcher);
  console.log(data);
  return (
    <div className='grid gap-8 p-2 md:grid-cols-2 '>
      {data?.posts ? (
        data.posts.map((post: any) => <BlogPostCard key={post.id} {...post} />)
      ) : (
        <div className='h-40 animate-pulse rounded-lg bg-gray-200'></div>
      )}
    </div>
  );
};
