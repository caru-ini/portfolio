import { getPostBySlug } from '@/lib/contentful';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

type OpenGraphImageProps = {
  params: {
    slug: string;
  };
};

const Image = async ({ params: { slug } }: OpenGraphImageProps) => {
  const post = await getPostBySlug(slug);
  if (!post) {
    return null;
  }
  return new ImageResponse(
    (
      <div className='p-8'>
        <h1 className='text-3xl font-semibold'>{post.title}</h1>
        <p className='text-lg text-muted-foreground'>
          {new Date(post.createdAt).toLocaleDateString()}
        </p>
      </div>
    ),
  );
};

export default Image;
