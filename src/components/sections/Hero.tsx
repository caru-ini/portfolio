import { Avatar } from '@/components/avatar';
import { BsChevronDoubleDown } from 'react-icons/bs';
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
    <section className='flex h-svh w-full flex-col bg-secondary'>
      <div className='flex size-full flex-col items-center justify-center gap-y-6 bg-gradient-to-b from-cyan-100 to-background dark:from-cyan-950 dark:to-background'>
        <Avatar />
        <div className='flex flex-col items-center'>
          <h1 className='text-4xl font-bold'>Caru</h1>
          <p className='text-lg text-muted-foreground'>Student / Developer</p>
        </div>
        <div className='flex items-center space-x-4'>
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target='_blank' rel='noopener noreferrer'>
              <link.icon size={32} />
            </a>
          ))}
        </div>
        <div className='absolute bottom-4 flex flex-col items-center text-muted-foreground'>
          <BsChevronDoubleDown className='animate-bounce' size={32} />
          <span className='text-sm'>Learn more</span>
        </div>
      </div>
    </section>
  );
}
