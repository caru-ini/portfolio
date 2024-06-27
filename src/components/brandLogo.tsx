import { sourceCodePro } from '@/utils/font';
import { Terminal } from 'lucide-react';

export const BrandLogo: React.FC = () => (
  <div
    className={`flex items-center gap-x-2 rounded-md border-2 border-blue-400 px-2 dark:border-teal-200 ${sourceCodePro.className} bg-slate-500 text-xl text-white`}
  >
    <Terminal />
    <span>caru.live</span>
  </div>
);
