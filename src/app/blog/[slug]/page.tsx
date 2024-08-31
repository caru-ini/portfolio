import { Post } from '@/components/blog/post';
import { getPostBySlug, getPreviewPostBySlug } from '@/lib/contentful';
import { ChevronLeft } from 'lucide-react';
import { NextPage } from 'next';
import { draftMode } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async ({ params: { slug } }: BlogPostPageProps) => {
  const { isEnabled } = draftMode();
  const post = isEnabled ? await getPreviewPostBySlug(slug) : await getPostBySlug(slug);
  const title = post?.fields.title;
  const excerpt = post?.fields.excerpt;
  const tags = post?.metadata.tags.map((tag) => tag.sys.id);
  return (
    post && {
      title: title,
      description: excerpt,
      tags: tags,
    }
  );
};

async function getPost(slug: string) {
  const { isEnabled } = draftMode();
  return isEnabled ? await getPreviewPostBySlug(slug) : await getPostBySlug(slug);
}

const Page: NextPage<BlogPostPageProps> = async ({ params: { slug } }) => {
  const post = await getPost(slug);

  if (!post) redirect('/404');
  return (
    <div className='container mt-[74px] flex max-w-[800px] grow flex-col gap-2'>
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
      <Post post={post} />
    </div>
  );
};

export default Page;
