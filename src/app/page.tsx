'use client';

import React, { useState } from 'react';
import { DotGothic16 } from 'next/font/google';
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

const dotGothic16 = DotGothic16({ weight: '400', subsets: ['latin'] });

export default function Home() {
  const [isBubbleShown, setIsBubbleShown] = useState(false);

  return (
    <main>
      {/* Hero */}
      <div className='flex min-h-[calc(100svh-74px)] w-full flex-col items-center justify-center gap-y-6'>
        <div className='relative'>
          <Image
            src='/avatar.png'
            alt='caru'
            width={200}
            height={200}
            className='select-none rounded-full'
            draggable={false}
            onMouseEnter={() => setIsBubbleShown(true)}
            onMouseLeave={() => setIsBubbleShown(false)}
          />
          <div
            className={`absolute -top-16 left-1/2 -translate-x-1/2 rounded-lg bg-white p-2 text-black shadow-md transition-opacity ease-in-out ${!isBubbleShown && 'opacity-0'}`}
          >
            <p className={`text-xl ${dotGothic16.className} text-nowrap`}>
              Hello😎
            </p>
            <div className='absolute bottom-0 left-1/2 size-3 -translate-x-1/2 translate-y-1/2 rotate-45 bg-white'></div>
          </div>
        </div>
        <h1 className='text-4xl font-bold'>Caru</h1>
        <div className='flex items-center space-x-4'>
          <a
            href='https://twitter.com/caru_ini'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SiX size={32} />
          </a>
          <a
            href='https://github.com/caru-ini'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SiGithub size={32} />
          </a>
          <a
            href='https://zenn.dev/caru'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SiZenn size={32} />
          </a>
          <a
            href='https://discordapp.com/users/1226826654794649690'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SiDiscord size={32} />
          </a>
          <a
            href='https://speakerdeck.com/caru'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SiSpeakerdeck size={32} />
          </a>
        </div>
      </div>
    </main>
  );
}
