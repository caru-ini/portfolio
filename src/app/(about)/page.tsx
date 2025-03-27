import { About } from '@/app/(about)/_components/about';
import { Creations } from '@/app/(about)/_components/creations';
import { Hero } from '@/app/(about)/_components/hero';
import Hobbies from '@/app/(about)/_components/hobbies';

export default async function Home() {
  return (
    <main className='container px-4 md:px-6 lg:px-8'>
      <Hero />
      <About />
      <Hobbies />
      <Creations />
    </main>
  );
}
