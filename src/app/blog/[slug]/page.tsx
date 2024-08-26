import { BlogPostContent } from '@/components/blog/postContent';
import { TagBadge } from '@/components/blog/tagBadge';
import { getPostBySlug } from '@/lib/contentful';
import { redirect } from 'next/navigation';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

const BlogPostPage: React.FC<BlogPostPageProps> = async ({ params: { slug } }) => {
  const post = await getPostBySlug(slug);

  if (!post) {
    return redirect('/404');
  }
  return (
    <div className='container mt-[74px] max-w-[800px]'>
      <div className='flex flex-col gap-y-3 pb-5'>
        <time className='inline-flex items-center text-muted-foreground'>
          {new Date(post?.updatedAt).toLocaleDateString('sv-SE').replace(/-/g, '/')}
        </time>
        <h1 className='text-2xl font-bold tracking-tighter md:text-3xl'>{post.title}</h1>
        <ul className='flex flex-wrap gap-2'>
          {post.tags.map((tag) => (
            <li key={tag}>
              <TagBadge tag={tag} />
            </li>
          ))}
        </ul>
      </div>
      <BlogPostContent content={post.content} />
    </div>
  );
};

export default BlogPostPage;
