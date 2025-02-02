import { About } from '@/app/(about)/_components/about';
import { Creations } from '@/app/(about)/_components/creations';
import { Hero } from '@/app/(about)/_components/hero';
import Hobbies from '@/app/(about)/_components/hobbies';
import { LatestPosts } from '@/app/(about)/_components/latest-posts';
import { getLatestPostIndex } from '@/lib/contentful';

export const revalidate = 60;

export default async function Home() {
  const posts = await getLatestPostIndex(3);
  return (
    <main className='container px-4 md:px-6 lg:px-8'>
      <Hero />
      <About />
      <Hobbies />
      <Creations />
      <LatestPosts posts={posts} />
    </main>
  );
}
