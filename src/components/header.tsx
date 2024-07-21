'use client';

import { BrandLogo } from '@/components/brandLogo';
import ToggleTheme from '@/components/toggletheme';
import { Button } from '@/components/ui/button';
import { Menu, QrCode } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { SiGithub } from 'react-icons/si';

const Links: {
  title: string;
  href: string;
}[] = [];

const Header: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const renderLinks = () => {
    return Links.map((link) => (
      <Link href={link.href} key={link.href}>
        <Button variant={'link'} className='text-xl text-foreground'>
          {link.title}
        </Button>
      </Link>
    ));
  };

  return (
    <header className='fixed top-0 z-40 box-border h-[74px] w-full'>
      {/* mobile modal menu */}
      {isModalOpen && (
        <div
          className='container fixed inset-0 z-50 flex min-h-screen min-w-full items-center justify-center bg-background/50'
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
      {/* desktop */}
      <nav className='flex w-full flex-col items-center justify-center'>
        <div
          className={`hidden w-full items-center justify-between space-x-4 border-b border-border px-6 py-4 backdrop-blur-md transition-colors duration-300 md:flex ${scrollY <= 0 ? 'border-none bg-none' : 'bg-background/50'}`}
        >
          <div className='flex items-center space-x-2'>
            <Link href='/' draggable={false}>
              <BrandLogo />
            </Link>
            {renderLinks()}
          </div>
          <div className='flex items-center space-x-4'>
            <ToggleTheme variant={'ghost'} className='border border-border dark:border-gray-700' />
            <Button
              variant={'ghost'}
              className='flex items-center space-x-2 border border-border dark:border-gray-700'
              onClick={() => setIsModalOpen((prev) => !prev)}
            >
              <QrCode size={24} />
            </Button>
            <Link href='https://github.com/caru-ini'>
              <SiGithub size={24} />
            </Link>
          </div>
        </div>
        {/* mobile */}
        <div
          className={`flex w-full items-center justify-between border-b border-border px-6 py-4 backdrop-blur-md transition-colors duration-300 md:hidden ${scrollY <= 0 && !menuOpen ? 'border-none bg-none' : 'bg-background/50'}`}
        >
          <Link href='/'>
            <BrandLogo />
          </Link>
          <Button onClick={() => setMenuOpen(!menuOpen)} className='text-3xl' variant={'outline'}>
            <Menu />
          </Button>
        </div>
        {menuOpen && (
          <div className='fixed left-0 top-[73px] z-40 flex size-full flex-col bg-background p-5 md:hidden'>
            <div className='flex flex-col space-y-4 text-2xl text-muted-foreground'>
              {renderLinks()}
            </div>
            <div className='flex items-center justify-center space-x-4'>
              <ToggleTheme
                variant={'ghost'}
                className='mt-5 grow border border-border dark:border-gray-700'
              />
              <Button
                variant={'outline'}
                className='mt-5'
                onClick={() => setIsModalOpen((prev) => !prev)}
              >
                <QrCode size={24} />
              </Button>
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

export default Header;
