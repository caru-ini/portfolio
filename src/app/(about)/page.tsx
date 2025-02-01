import { About } from '@/app/(about)/_components/About';
import { Creations } from '@/app/(about)/_components/Creations';
import { Hero } from '@/app/(about)/_components/Hero';
import Hobbies from '@/app/(about)/_components/Hobbies';
import { LatestPosts } from '@/app/(about)/_components/LatestPosts';
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
