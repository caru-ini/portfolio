import Image from 'next/image';
import Link from 'next/link';
import { SiGithub, SiX, SiZenn } from 'react-icons/si';

export const BlogAuthor: React.FC = () => {
  return (
    <div className='grow-0'>
      <div className='flex select-none flex-col rounded-md border border-border p-4'>
        <p className='mb-2 text-sm text-muted-foreground md:text-base'>この記事を書いた人</p>
        <div className='flex gap-4'>
          <Link href='/' className='flex shrink-0 items-center'>
            <Image
              src='https://github.com/caru-ini.png'
              alt='caru'
              className='rounded-full'
              width={100}
              height={100}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </Link>
          <div className='flex flex-col'>
            <Link href='/'>
              <h2 className='text-xl font-bold md:text-2xl'>Caru</h2>
            </Link>
            <p className='text-sm leading-snug text-muted-foreground md:text-lg'>
              フロントエンドエンジニアを目指す情報系大学生。 このサイトは、Next.jsで構築しました。
            </p>
            <ul className='flex gap-4 py-2'>
              <li>
                <Link href='https://github.com/caru-ini' target='_blank' rel='noopener noreferrer'>
                  <SiGithub size={20} />
                </Link>
              </li>
              <li>
                <Link href='https://x.com/caru' target='_blank' rel='noopener noreferrer'>
                  <SiZenn size={20} />
                </Link>
              </li>
              <li>
                <Link href='https://x.com/caru_ini' target='_blank' rel='noopener noreferrer'>
                  <SiX size={20} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
