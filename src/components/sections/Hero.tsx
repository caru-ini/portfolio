import { ProfileJson } from '@/components/ProfileJson';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { dotGothic16 } from '@/utils/font';
import Link from 'next/link';
import { SiDiscord, SiGithub, SiSpeakerdeck, SiX, SiZenn } from 'react-icons/si';

const socialLinks = [
  { href: 'https://twitter.com/caru_ini', icon: SiX },
  { href: 'https://github.com/caru-ini', icon: SiGithub },
  { href: 'https://zenn.dev/caru', icon: SiZenn },
  { href: 'https://discordapp.com/users/1226826654794649690', icon: SiDiscord },
  { href: 'https://speakerdeck.com/caru', icon: SiSpeakerdeck },
];

export function Hero() {
  return (
    <section className='flex h-svh w-full items-center justify-center'>
      <div className='container flex items-center justify-between'>
        <div className='flex flex-col gap-6'>
          <h1 className={cn('text-5xl font-bold', dotGothic16.className)}>
            Expand
            <br />
            The
            <br />
            World.
          </h1>
          <p className={cn('text-xl text-muted-foreground', dotGothic16.className)}>
            学生開発者として、革新的なアイデアを現実に
          </p>
          <div className='flex gap-4'>
            <Link href='#creations' passHref>
              <Button className={cn('text-white', dotGothic16.className)}>
                ↓ Check out my projects
              </Button>
            </Link>
            <Button variant='outline' className={cn('text-white', dotGothic16.className)}>
              Contact me
            </Button>
          </div>
          <div className='flex items-center space-x-4'>
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target='_blank' rel='noopener noreferrer'>
                <link.icon
                  size={24}
                  className='text-muted-foreground transition-colors hover:text-foreground'
                />
              </a>
            ))}
          </div>
        </div>
        <div className='hidden md:flex md:items-center md:justify-center'>
          <ProfileJson />
        </div>
      </div>
    </section>
  );
}
