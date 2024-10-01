import { About } from '@/components/sections/About';
import { Creations } from '@/components/sections/Creations';
import { Hero } from '@/components/sections/Hero';
import { LatestPosts } from '@/components/sections/LatestPosts';
import { getLatestPostIndex } from '@/lib/contentful';

export const revalidate = 60;

export default async function Home() {
  const posts = await getLatestPostIndex(3);
  return (
    <main>
      <Hero />
      <About />
      <Creations />
      <LatestPosts posts={posts} />
    </main>
  );
}
