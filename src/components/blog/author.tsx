'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { SiGithub, SiX, SiZenn } from 'react-icons/si';

export const BlogAuthor: React.FC = () => {
  const router = useRouter();
  const onClick = () => {
    router.push('/');
  };
  const ignore = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div onClick={onClick} className='cursor-pointer'>
      <div className='flex select-none flex-col rounded-md border border-border p-4'>
        <p className='mb-2 text-sm text-muted-foreground md:text-base'>この記事を書いた人</p>
        <div className='flex gap-4'>
          <div className='flex shrink-0 items-center'>
            <Image
              src='/avatar.webp'
              alt='caru'
              className='rounded-full'
              width={100}
              height={100}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          <div className='flex flex-col'>
            <h2 className='text-xl font-bold md:text-2xl'>Caru</h2>
            <p className='text-sm leading-snug text-muted-foreground md:text-lg'>
              フロントエンドエンジニアを目指す情報系大学生。 このサイトは、Next.jsで構築しました。
            </p>
            <ul className='flex gap-4 py-2'>
              <li>
                <a
                  href='https://github.com/caru-ini'
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={ignore}
                >
                  <SiGithub size={20} />
                </a>
              </li>
              <li>
                <a
                  href='https://x.com/caru'
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={ignore}
                >
                  <SiZenn size={20} />
                </a>
              </li>
              <li>
                <a
                  href='https://x.com/caru_ini'
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={ignore}
                >
                  <SiX size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
