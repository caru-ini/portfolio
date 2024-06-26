'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MdChevronRight } from 'react-icons/md';
import {
  SiDiscord,
  SiGithub,
  SiSpeakerdeck,
  SiX,
  SiZenn,
} from 'react-icons/si';
import { buttonVariants } from '@/components/ui/button';

export default function Home() {
  return (
    <main className='container flex min-h-[calc(100svh-74px)] flex-col items-center justify-center space-y-6 bg-gradient-to-b from-background'>
      <Image
        src='/avatar.png'
        alt='caru'
        width={200}
        height={200}
        className='select-none rounded-full'
        draggable={false}
      />
      <h1 className='text-4xl font-bold'>Caru</h1>
      <Link
        href={'/about'}
        className={`flex items-center justify-center ${buttonVariants({ variant: 'secondary' })}`}
      >
        Check My Profile
        <MdChevronRight className='ml-2' size={24} />
      </Link>
      <div className='flex items-center space-x-4'>
        <a href='https://twitter.com/caru_ini' target='_blank'>
          <SiX size={32} />
        </a>
        <a href='https://github.com/caru-ini'>
          <SiGithub size={32} />
        </a>
        <a href='https://zenn.dev/caru'>
          <SiZenn size={32} />
        </a>
        <a
          href='https://discordapp.com/users/1226826654794649690'
          target='_blank'
        >
          <SiDiscord size={32} />
        </a>
        <a href='https://speakerdeck.com/caru'>
          <SiSpeakerdeck size={32} />
        </a>
      </div>
    </main>
  );
}
