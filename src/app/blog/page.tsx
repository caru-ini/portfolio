import { PostList } from '@/app/blog/_components/postList';
import { TagBadge } from '@/app/blog/_components/tagBadge';
import { getLatestPostIndex, getTags } from '@/lib/contentful';

export const revalidate = 60;

const Page = async () => {
  const data = await getTags();
  const tags = data.map((tag) => tag.sys.id);
  const posts = await getLatestPostIndex(16);
  return (
    <div className='container mt-[74px] flex flex-1 flex-col gap-8'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-4xl font-bold tracking-tight md:text-5xl'>Blog</h1>
        <p className='text-muted-foreground'>技術の話から、日常の話まで書いていきます。</p>
      </div>
      <section className='flex flex-col gap-2' id='latest-posts'>
        <h2 className='text-2xl font-bold'>記事一覧</h2>
        <PostList posts={posts} />
      </section>
      <section className='flex flex-col gap-2' id='tags'>
        <h2 className='text-2xl font-bold'>タグ</h2>
        <ul className='flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Page;
