import Link from 'next/link';
import Header from '@/components/header';

const BlogPage: React.FC = () => (
  <main>
    <Header />
    <div className='container flex flex-col justify-center'>
      <section className='flex w-full flex-col items-center justify-center py-10 md:py-1 lg:py-20'>
        <h2 className='text-5xl font-bold'>Blog</h2>
      </section>
      <section className='container flex flex-col items-center justify-center space-y-12 px-4 md:px-6'>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-12'>
            <div className='md:col-span-8 lg:col-span-9'>
              <div className='space-y-8'>
                <div className='relative flex flex-col gap-8'>
                  <div className='flex flex-col gap-2 text-sm'>
                    <div className='absolute left-0 top-1 z-10 aspect-square w-5 translate-x-[-39.5px] rounded-full bg-gray-900 dark:bg-gray-50' />
                    <div className='text-lg font-medium'>
                      March 14, 2023 - The Future of Web Development
                    </div>
                    <div className='text-gray-500 dark:text-gray-400'>
                      Exploring the latest trends and technologies shaping the
                      future of web development.
                    </div>
                    <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800'>
                      Web Development
                    </div>
                  </div>
                  <div className='relative grid gap-2 text-sm'>
                    <div className='absolute left-0 top-1 z-10 aspect-square w-5 translate-x-[-39.5px] rounded-full bg-gray-900 dark:bg-gray-50' />
                    <div className='text-lg font-medium'>
                      April 1, 2023 - The Rise of Headless CMS
                    </div>
                    <div className='text-gray-500 dark:text-gray-400'>
                      Discover how headless CMS is transforming the way we build
                      websites and web applications.
                    </div>
                    <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800'>
                      Technology
                    </div>
                  </div>
                  <div className='relative grid gap-2 text-sm'>
                    <div className='absolute left-0 top-1 z-10 aspect-square w-5 translate-x-[-39.5px] rounded-full bg-gray-900 dark:bg-gray-50' />
                    <div className='text-lg font-medium'>
                      June 12, 2023 - Accessibility in Web Design
                    </div>
                    <div className='text-gray-500 dark:text-gray-400'>
                      Explore best practices and techniques for creating
                      accessible websites that cater to all users.
                    </div>
                    <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800'>
                      Design
                    </div>
                  </div>
                  <div className='relative grid gap-2 text-sm'>
                    <div className='absolute left-0 top-1 z-10 aspect-square w-5 translate-x-[-39.5px] rounded-full bg-gray-900 dark:bg-gray-50' />
                    <div className='text-lg font-medium'>
                      December 31, 2023 - The Rise of Serverless Computing
                    </div>
                    <div className='text-gray-500 dark:text-gray-400'>
                      Discover how serverless computing is revolutionizing the
                      way we build and deploy web applications.
                    </div>
                    <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800'>
                      Technology
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='block md:hidden'>
              <hr />
            </div>
            <div className='md:col-span-4 lg:col-span-3'>
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
        </div>
      </section>
    </div>
  </main>
);

export default BlogPage;
