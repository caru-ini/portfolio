import { contentful } from '@/lib/contentful';
import { redirect } from 'next/navigation';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

const BlogPostPage: React.FC<BlogPostPageProps> = async ({ params }) => {
  const slug = params.slug;
  const data = await contentful.getEntries({
    content_type: 'post',
    'fields.slug': slug,
  });

  if (!data || data.items.length === 0) {
    redirect('/404');
    return null;
  }

  const post = data.items[0].fields;

  return (
    <div className='mt-[74px]'>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPostPage;
