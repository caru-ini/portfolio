'use client';
import { dotGothic16 } from '@/utils/font';
import Image from 'next/image';
import { useState } from 'react';

export const Avatar = () => {
  const [isBubbleShown, setIsBubbleShown] = useState(false);

  return (
    <div className='relative flex flex-col items-center'>
      <Image
        src='/avatar.webp'
        alt='caru'
        width={200}
        height={200}
        className='select-none rounded-full'
        draggable={false}
        onMouseEnter={() => setIsBubbleShown(true)}
        onMouseLeave={() => setIsBubbleShown(false)}
      />
      <div
        className={`absolute -top-16 left-1/2 -translate-x-1/2 rounded-lg bg-white p-2 text-black shadow-md transition-opacity duration-300 ease-in-out ${
          isBubbleShown ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className={`text-xl ${dotGothic16.className} text-nowrap`}>
          Hello<span className='text-pink-500'>♥</span>
        </p>
        <div className='absolute bottom-0 left-1/2 size-3 -translate-x-1/2 translate-y-1/2 rotate-45 bg-white'></div>
      </div>
    </div>
  );
};
