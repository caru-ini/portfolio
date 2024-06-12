'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { QrCode } from 'lucide-react';
import { MdChevronRight } from 'react-icons/md';
import { SiDiscord, SiGithub, SiSpeakerdeck, SiX } from 'react-icons/si';
import ToggleTheme from '@/components/toggletheme';
import { Button, buttonVariants } from '@/components/ui/button';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <main className='bg-gradient-to-b from-background to-teal-200/10'>
      <div className='fixed left-0 top-0 flex gap-2 p-4'>
        <ToggleTheme variant={'outline'} />
        <Button
          variant={'outline'}
          className='flex items-center space-x-2'
          onClick={() => setIsModalOpen(true)}
        >
          <QrCode size={24} />
        </Button>
      </div>
      {isModalOpen && (
        <div
          className='container fixed inset-0 z-50 flex min-h-full min-w-full items-center justify-center bg-background/50'
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className='select-none gap-3 rounded-lg bg-foreground/30 p-5'
            onClick={(e) => e.stopPropagation()}
          >
            <Image src='/qrcode.png' alt='qr' width={400} height={400} />
          </div>
        </div>
      )}
      <div className='container flex min-h-svh flex-col items-center justify-center space-y-6'>
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
      </div>
    </main>
  );
}
