import { LatestPosts } from '@/components/blog/latestPosts';
import { TagBadge } from '@/components/blog/tagBadge';
import { getTags } from '@/lib/contentful';

const Page = async () => {
  const data = await getTags();
  const tags = data.map((tag) => tag.sys.id);
  return (
    <div className='container mt-[74px] flex flex-1 flex-col gap-8'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-4xl font-bold tracking-tight md:text-5xl'>Blog</h1>
        <p className='text-muted-foreground'>技術の話から、日常の話まで書いていきます。</p>
      </div>
      <section className='flex flex-col gap-2' id='latest-posts'>
        <h2 className='text-2xl font-bold'>記事一覧</h2>
        <LatestPosts limit={18} />
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
