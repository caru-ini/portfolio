import { dotGothic16 } from '@/utils/font';

export const BrandLogo: React.FC = () => (
  <div className={`${dotGothic16.className} select-none text-2xl`}>
    <span>CARU</span>.<span className='text-blue-400'>live</span>
  </div>
);
