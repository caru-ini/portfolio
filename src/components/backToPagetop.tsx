'use client';

import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

export const BackToPagetop: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className='fixed bottom-4 right-4 size-[55px]'>
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        variant={'secondary'}
        className={
          'size-full bg-secondary/50 dark:shadow-slate-800 backdrop-blur-md transition-opacity duration-300 shadow-sm' +
          (scrollY > 0 ? ' opacity-100' : ' opacity-0')
        }
      >
        <ChevronUp size={40} />
      </Button>
    </div>
  );
};
