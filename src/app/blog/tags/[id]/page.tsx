import { PostList } from '@/app/blog/_components/post-list';
import { getPostByTag, getTagById } from '@/lib/contentful';
import { ChevronLeft } from 'lucide-react';
import { NextPage } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

type PageProps = {
  params: {
    id: string;
  };
};

const Page: NextPage<PageProps> = async ({ params: { id } }) => {
  const tag = await getTagById(id);
  if (!tag) redirect('/404');
  const posts = await getPostByTag(id);

  return (
    <div className='container mt-[74px] flex flex-1 flex-col gap-8'>
      <div className='flex flex-col gap-2'>
        <Link
          href='/blog'
          passHref
          className='group mb-8 flex w-max items-center rounded-md p-2 pl-0 font-semibold hover:underline'
        >
          <span className='mr-2 inline-flex h-full items-center rounded-sm border border-border transition-all group-hover:bg-foreground group-hover:text-background'>
            <ChevronLeft className='size-5 rounded-sm' />
          </span>
          Back to Blog
        </Link>
        <h1 className='text-3xl font-bold tracking-tight md:text-4xl'>
          タグ <span className='rounded-md bg-secondary px-2 font-mono'>{tag.sys?.id}</span>{' '}
          の記事一覧
        </h1>
      </div>
      <section className='flex flex-col gap-2' id='latest-posts'>
        <PostList posts={posts} />
      </section>
    </div>
  );
};

export default Page;
