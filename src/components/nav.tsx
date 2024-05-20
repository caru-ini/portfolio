'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { sourceCodePro } from '@/utils/font';
import { Menu, Terminal } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import ToggleTheme from '@/components/toggletheme';
import { Button } from '@/components/ui/button';

const Nav: React.FC = () => {
  const [scroll, setScroll] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const transition = scroll
    ? 'transform translate-y-0'
    : 'transform -translate-y-full';

  return (
    <header>
      <nav className='sticky top-0 z-50 flex h-[74px] w-full flex-col items-center justify-center'>
        {/* desktop */}
        <div
          className={`hidden w-full space-x-4 border border-border px-6 py-4 transition-transform duration-300 ease-in-out md:flex ${transition} items-center justify-between bg-background`}
        >
          <div className='flex items-center space-x-2'>
            <Link href='/'>
              <div
                className={`flex items-center space-x-2 rounded-md border-2 border-teal-100 px-2 ${sourceCodePro.className} bg-slate-500 text-xl text-white`}
              >
                <Terminal />
                <span>caru.live</span>
              </div>
            </Link>
            <Link href='/about'>
              <Button variant={'link'} className='text-xl text-foreground'>
                About
              </Button>
            </Link>
            <Link href='#'>
              <Button
                variant={'link'}
                className='text-xl text-muted-foreground'
              >
                Blog
              </Button>
            </Link>
          </div>
          <div className='flex items-center space-x-4'>
            <ToggleTheme
              variant={'ghost'}
              className='border border-border dark:border-gray-700'
            />
            <Link href='https://github.com/caru-ini'>
              <SiGithub size={24} />
            </Link>
          </div>
        </div>
        {/* mobile */}
        <div className='flex w-full items-center justify-between border-b border-border bg-background px-6 py-4 md:hidden'>
          <div
            className={`flex items-center space-x-2 rounded-md border-2 border-blue-400 px-2 ${sourceCodePro.className} bg-slate-500 text-xl text-white`}
          >
            <Terminal />
            <span>caru.live</span>
          </div>
          <Button
            onClick={() => setMenuOpen(!menuOpen)}
            className='text-3xl'
            variant={'outline'}
          >
            <Menu />
          </Button>
        </div>
        {menuOpen && (
          <div className='fixed left-0 top-[74px] z-50 flex size-full flex-col bg-background p-5'>
            <div className='flex flex-col space-y-4 text-2xl text-muted-foreground'>
              <Link
                href='/'
                onClick={closeMenu}
                className='hover:text-foreground'
              >
                Home
              </Link>
              <Link
                href='/about'
                onClick={closeMenu}
                className='hover:text-foreground'
              >
                About
              </Link>
            </div>
            <div className='flex items-center justify-center space-x-4'>
              <ToggleTheme
                variant={'ghost'}
                className='mt-5 grow border border-border dark:border-gray-700'
              />
              <Link href='https://github.com/caru-ini'>
                <SiGithub size={24} className='mt-5' />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
