import Link from 'next/link';
import { client } from '@/lib/hono';
import Header from '@/components/header';
import { Button } from '@/components/ui/button';

const tags = [
  {
    id: 1,
    name: 'Technology',
  },
  {
    id: 2,
    name: 'Web Development',
  },
];

const postTags = [
  {
    postId: 1,
    tagId: 1,
  },
  {
    postId: 1,
    tagId: 2,
  },
  {
    postId: 1,
    tagId: 1,
  },
  {
    postId: 2,
    tagId: 1,
  },
];

const BlogPage = async () => {
  const getPosts = async () => {
    return (await client.api.posts.$get()).json();
  };

  const posts = await getPosts();
  console.log(posts);
  return (
    <main>
      <Header />
      <div className='container flex flex-col justify-center'>
        <section className='flex w-full flex-col items-center justify-center py-10 md:py-14 lg:py-20'>
          <h2 className='text-5xl font-bold'>Blog</h2>
        </section>
        <section className='container flex flex-col items-center justify-center space-y-12 px-4 md:px-6'>
          <div className='container mx-auto flex flex-col gap-8 px-4 md:flex-row md:px-6'>
            <div className='relative flex grow flex-col gap-8'>
              <div className='absolute left-0 top-3 z-0 h-full w-2 translate-x-[-34px] bg-gray-300 dark:bg-gray-700 md:h-[90%]' />
              {posts.map((post) => (
                <div className='relative flex flex-col gap-2' key={post.id}>
                  <div className='absolute left-0 top-1 z-10 aspect-square w-5 translate-x-[-39.5px] rounded-full bg-gray-900 dark:bg-gray-50' />
                  <div className='text-lg font-medium'>
                    {post.title}{' '}
                    <span className='text-sm text-muted-foreground'>
                      {post.updatedAt &&
                        new Date(post.updatedAt).toDateString()}
                    </span>
                  </div>
                  <div className='text-sm text-gray-500 dark:text-gray-400'>
                    {post.content}
                  </div>

                  {postTags.filter((postTag) => {
                    return postTag.postId === post.id;
                  }).length ? (
                    <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800'>
                      {tags
                        .filter((tag) =>
                          postTags
                            .filter((postTag) => postTag.postId === post.id)
                            .map((postTag) => postTag.tagId)
                            .includes(tag.id)
                        )
                        .map((tag) => tag.name)
                        .join(', ')}
                    </div>
                  ) : (
                    'no tags'
                  )}
                </div>
              ))}
            </div>
            <div className='block md:hidden'>
              <hr />
            </div>
            <div className='md:sticky md:top-0 md:col-span-4 lg:col-span-3'>
              <div className='space-y-6'>
                <div>
                  <h2 className='mb-4 text-2xl font-bold'>Recent Posts</h2>
                  <ul className='space-y-4'>
                    <li>
                      <Link
                        href='#'
                        className='font-medium hover:text-gray-900 dark:hover:text-gray-100'
                      >
                        The Future of Web Development
                      </Link>
                      <div className='text-sm text-gray-500 dark:text-gray-400'>
                        March 14, 2023
                      </div>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='font-medium hover:text-gray-900 dark:hover:text-gray-100'
                      >
                        The Rise of Headless CMS
                      </Link>
                      <div className='text-sm text-gray-500 dark:text-gray-400'>
                        April 1, 2023
                      </div>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='font-medium hover:text-gray-900 dark:hover:text-gray-100'
                      >
                        Accessibility in Web Design
                      </Link>
                      <div className='text-sm text-gray-500 dark:text-gray-400'>
                        June 12, 2023
                      </div>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='font-medium hover:text-gray-900 dark:hover:text-gray-100'
                      >
                        The Rise of Serverless Computing
                      </Link>
                      <div className='text-sm text-gray-500 dark:text-gray-400'>
                        December 31, 2023
                      </div>
                    </li>
                  </ul>
                </div>
                <div className='block md:hidden'>
                  <hr />
                </div>
                <div>
                  <h2 className='mb-4 text-2xl font-bold'>Categories</h2>
                  <ul className='space-y-2'>
                    <li>
                      <Link
                        href='#'
                        className='font-medium hover:text-gray-900 dark:hover:text-gray-100'
                      >
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='font-medium hover:text-gray-900 dark:hover:text-gray-100'
                      >
                        Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='font-medium hover:text-gray-900 dark:hover:text-gray-100'
                      >
                        Technology
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='#'
                        className='font-medium hover:text-gray-900 dark:hover:text-gray-100'
                      >
                        Tutorials
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default BlogPage;
