import { cn } from '@/lib/utils';
import { dotGothic16 } from '@/utils/font';
import Image from 'next/image';

export const HelloSection: React.FC = () => {
  return (
    <div className='flex shrink-0 flex-col items-center justify-center'>
      <div className='relative inline-block'>
        <Image
          src='https://github.com/caru-ini.png'
          alt='Hello'
          width={200}
          height={200}
          className='rounded-full'
        />
        <div className='absolute -top-12 right-1/2 translate-x-1/2 rounded-lg bg-white p-2 shadow-md'>
          <span
            className={cn(
              'text-xl font-bold text-black text-nowrap relaxed',
              dotGothic16.className,
            )}
          >
            Hello<span className='ml-0.5 text-pink-500'>♥</span>
          </span>
          <div className='absolute -bottom-2 left-1/2 size-4 -translate-x-1/2 rotate-45 bg-white'></div>
        </div>
      </div>
    </div>
  );
};
