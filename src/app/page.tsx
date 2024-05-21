import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa6';
import { MdChevronRight } from 'react-icons/md';
import { SiDiscord, SiGithub, SiX } from 'react-icons/si';
import ToggleTheme from '@/components/toggletheme';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main>
      <div className='fixed left-0 top-0 p-4'>
        <ToggleTheme variant={'outline'} />
      </div>
      <div className='container flex min-h-screen flex-col items-center justify-center space-y-6'>
        <Image
          src='/avatar.png'
          alt='caru'
          width={200}
          height={200}
          className='rounded-full'
        />
        <h1 className='text-4xl font-bold'>Caru</h1>
        <Link href={'/about'} className='flex items-center justify-center'>
          <Button variant='secondary'>
            Check My Profile
            <MdChevronRight className='ml-2' size={24} />
          </Button>
        </Link>
        <div className='flex items-center space-x-4'>
          <a href='https://twitter.com/caru_ini_8' target='_blank'>
            <SiX size={32} />
          </a>
          <a href='https://github.com/caru-ini'>
            <SiGithub size={32} />
          </a>
          <a
            href='https://discordapp.com/users/1226826654794649690'
            target='_blank'
          >
            <SiDiscord size={32} />
          </a>
          <a href='mailto:s1F102400392@iniad.org' target='_blank'>
            <FaEnvelope size={32} />
          </a>
        </div>
      </div>
    </main>
  );
}
