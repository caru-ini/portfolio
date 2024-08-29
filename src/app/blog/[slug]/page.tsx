import { BlogAuthor } from '@/components/blog/author';
import { BlogPostContent } from '@/components/blog/postContent';
import { BlogPostHeader } from '@/components/blog/postHeader';
import { getPostBySlug, getPreviewPostBySlug } from '@/lib/contentful';
import { ChevronLeft } from 'lucide-react';
import { draftMode } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export const runtime = 'edge';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export const generateMetadata = async ({ params: { slug } }: BlogPostPageProps) => {
  const { isEnabled } = draftMode();
  const post = isEnabled ? await getPreviewPostBySlug(slug) : await getPostBySlug(slug);
  return (
    post && {
      title: post.title,
      description: post.excerpt,
      tags: post.tags,
    }
  );
};

const BlogPostPage: React.FC<BlogPostPageProps> = async ({ params: { slug } }) => {
  const { isEnabled } = draftMode();
  console.log('Preview mode enabled: ', isEnabled);
  const post = isEnabled ? await getPreviewPostBySlug(slug) : await getPostBySlug(slug);

  if (!post) {
    return redirect('/404');
  }
  return (
    <div className='container mt-[74px] flex max-w-[800px] flex-col gap-2'>
      <Link
        href='/blog'
        passHref
        className='group mb-8 flex w-max items-center rounded-md p-2 font-semibold hover:underline'
      >
        <span className='mr-2 inline-flex h-full items-center rounded-sm border border-border transition-all group-hover:bg-foreground group-hover:text-background'>
          <ChevronLeft className='size-5 rounded-sm' />
        </span>
        Back to Blog
      </Link>
      <article className='mb-8 flex flex-col gap-8'>
        <BlogPostHeader title={post.title} tags={post.tags} updatedAt={post.createdAt} />
        <BlogPostContent content={post.content} />
        <BlogAuthor />
      </article>
    </div>
  );
};

export default BlogPostPage;
