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
      <nav className='sticky z-50 flex flex-col justify-center items-center top-0 w-full h-[74px]'>
        {/* desktop */}
        <div
          className={`hidden md:flex space-x-4 py-4 px-6 border border-border transition-transform duration-300 ease-in-out w-full ${transition} justify-between items-center bg-background`}
        >
          <div className='flex items-center space-x-2'>
            <Link href='/'>
              <div
                className={`flex items-center space-x-2 border-2 border-teal-100 rounded-md px-2 ${sourceCodePro.className} bg-slate-500 text-white text-xl`}
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
        <div className='md:hidden flex justify-between items-center w-full px-6 py-4 border-b border-border bg-background'>
          <div
            className={`flex items-center space-x-2 border-2 border-blue-400 rounded-md px-2 ${sourceCodePro.className} bg-slate-500 text-white text-xl`}
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
          <div className='fixed top-[74px] left-0 w-full h-full bg-background z-50 flex flex-col p-5'>
            <div className='text-muted-foreground text-2xl flex flex-col space-y-4'>
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
            <div className='flex space-x-4 justify-center items-center'>
              <ToggleTheme
                variant={'ghost'}
                className='border border-border dark:border-gray-700 mt-5 flex-grow'
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
