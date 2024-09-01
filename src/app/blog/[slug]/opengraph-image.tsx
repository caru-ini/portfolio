import { ContentfulTag } from '@/lib/contentful';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

type OpenGraphImageProps = {
  params: {
    slug: string;
  };
};

const getPostBySlugREST = async (slug: string) => {
  const result = await fetch(
    `https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE_ID}/entries?content_type=post&fields.slug=${slug}`,
    {
      headers: {
        Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
      },
      next: {
        revalidate: 600,
      },
    },
  );

  if (!result.ok) {
    return null;
  }

  const entries = await result.json();

  if (entries.items.length === 0) {
    return null;
  }

  const entry = entries.items[0];

  if (!entry) {
    return null;
  }

  return entry;
};

const Image = async ({ params: { slug } }: OpenGraphImageProps) => {
  const post = await getPostBySlugREST(slug);
  if (!post) {
    return null;
  }

  const { title } = post.fields;
  const tags = post.metadata.tags?.map((tag: ContentfulTag) => tag.sys.id);
  const notoSansJP = await fetch(
    'https://github.com/ixkaito/NotoSansJP-subset/raw/master/subset-min/NotoSansJP-Regular.woff',
  );

  const notoSansJPData = await notoSansJP.arrayBuffer();

  return new ImageResponse(
    (
      <div tw='flex w-full h-full flex-col items-center justify-center bg-teal-50'>
        <div tw='flex h-[570px] w-[1140px] flex-col justify-between rounded-xl bg-slate-300 p-5 shadow-lg'>
          <div tw='flex flex-col'>
            <h1 tw={'mt-3 text-7xl font-extrabold'}>{title}</h1>
            <div tw='flex flex-col'>
              <ul tw='flex flex-wrap items-center'>
                {tags.map((tag: string) => (
                  <li key={tag}>
                    <span tw='flex px-3 mx-2 py-1 text-xl text-white bg-slate-700 rounded-full items-center'>
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div tw='flex flex-col'>
            <div tw='flex items-center mt-5'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src='https://www.caru.live/_next/image?url=%2Favatar.webp&w=640&q=75'
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
    {
      fonts: [{ name: 'Noto Sans JP', data: notoSansJPData }],
    },
  );
};

export default Image;
