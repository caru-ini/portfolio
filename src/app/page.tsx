'use client';

import React, { useState } from 'react';
import { DotGothic16 } from 'next/font/google';
import Image from 'next/image';
import { BsChevronDoubleDown } from 'react-icons/bs';
import {
  SiDiscord,
  SiGithub,
  SiSpeakerdeck,
  SiX,
  SiZenn,
} from 'react-icons/si';
import Skill, { SkillProps } from '@/components/skill';

const dotGothic16 = DotGothic16({ weight: '400', subsets: ['latin'] });

const skills: SkillProps[] = [
  {
    icon: '/avatar.png',
    title: 'React',
    description: 'React is a JavaScript library for building user interfaces.',
  },
  {
    icon: '/avatar.png',
    title: 'Next.js',
    description: 'Next.js is a React framework for production.',
  },
  {
    icon: '/icons/typescript.svg',
    title: 'TypeScript',
    description: 'TypeScript is a typed superset of JavaScript.',
  },
  {
    icon: '/icons/tailwindcss.svg',
    title: 'Tailwind CSS',
    description: 'Tailwind CSS is a utility-first CSS framework.',
  },
  {
    icon: '/icons/firebase.svg',
    title: 'Firebase',
    description:
      'Firebase is a platform developed by Google for creating mobile and web applications.',
  },
  {
    icon: '/icons/vercel.svg',
    title: 'Vercel',
    description:
      'Vercel is a cloud platform for static sites and Serverless Functions.',
  },
];

export default function Home() {
  const [isBubbleShown, setIsBubbleShown] = useState(false);

  return (
    <main>
      {/* Hero */}
      <section className='flex h-svh w-full flex-col items-center justify-center gap-y-6 bg-gray-100 dark:bg-gray-900'>
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
        {/* scroll */}
        <div className='absolute bottom-4 flex flex-col items-center text-muted-foreground'>
          <BsChevronDoubleDown className='animate-bounce' size={32} />
          <span className='text-sm'>Learn more</span>
        </div>
      </section>
      <section className='container mt-10 flex flex-col items-center justify-center gap-y-6'>
        <h2 className='text-2xl font-bold'>About</h2>
        <p className='text-center text-lg text-muted-foreground'>
          はじめまして、Caruです。INIAD(東洋大学情報連携学部)に在学しています。サークルはTypeScript専門のサークル
          INIAD.ts
          に所属していて、日々フロントエンドエンジニアを目指して努力しています。
          プログラミングは、中学生のときにPythonに出会い、独学で楽しんでいたのがきっかけで、高校3年のときにはWeb開発に興味を持ち、ReactやNext.jsについて学び始めました。
          何度も挫折しながらも、最低限の知識を身につけ、現在に至ります。
        </p>
      </section>
      <section className='container mt-10 flex flex-col items-center justify-center gap-y-6'>
        <h2 className='text-2xl font-bold'>Skills</h2>
        <div className='flex flex-wrap justify-center gap-3'>
          {skills.map((skill, index) => (
            <Skill key={index} {...skill} />
          ))}
        </div>
      </section>
    </main>
  );
}
