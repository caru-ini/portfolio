import { getPostBySlug } from '@/lib/contentful';
import { ImageResponse } from 'next/og';

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
      <div tw='flex w-full h-full flex-col items-center justify-center bg-teal-50'>
        <div tw='flex h-[570px] w-[1140px] flex-col justify-between rounded-xl bg-slate-300 p-5 shadow-lg'>
          <div tw='flex flex-col'>
            <h1 tw={'mt-3 text-6xl font-bold'}>{post.title}</h1>
            <div tw='flex flex-col'>
              <ul tw='flex flex-wrap'>
                {post.tags.map((tag) => (
                  <li key={tag}>
                    <span tw='px-3 py-1 text-xl text-white bg-slate-700 rounded-full'>{tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div tw='flex flex-col'>
            <div tw='flex items-center mt-5'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src='https://caru.live/static/avatar.webp'
                width={100}
                tw='rounded-full'
                alt='avatar'
              />
              <p tw='ml-3 text-4xl font-semibold'>Caru</p>
            </div>
          </div>
        </div>
      </div>
    ),
  );
};

export default Image;
