import { cn } from '@/lib/utils';
import { sourceCodePro } from '@/utils/font';
import { CodeIcon, DatabaseIcon, Flag, Lock } from 'lucide-react';

const strengths = [
  {
    icon: CodeIcon,
    title: 'Web Development',
    description: 'Next.js、React、TailwindCSS、Honoを使用したWeb開発',
  },
  {
    icon: DatabaseIcon,
    title: 'Database',
    description:
      'Prisma、DrizzleORMを使用。SQLite、PostgreSQL、Cloudflare D1、Workers KVの経験あり',
  },
  {
    icon: Lock,
    title: 'Security',
    description: 'Magnitoプロジェクトに貢献。SRPを使用した認証システムの実装',
  },
  {
    icon: Flag,
    title: 'Testing',
    description: 'Vitestを使用したテスト駆動開発。100%のカバレッジを目指す',
  },
];

export const Strengths = () => {
  return (
    <div className='container mt-16 grid gap-8 md:grid-cols-2'>
      {strengths.map((strength) => (
        <div
          key={strength.title}
          className='box-content grid gap-2 p-3 transition-transform hover:scale-105'
        >
          <strength.icon className='size-8 text-primary' />
          <h3 className={cn('text-lg font-semibold', sourceCodePro.className)}>{strength.title}</h3>
          <p className='text-muted-foreground'>{strength.description}</p>
        </div>
      ))}
    </div>
  );
};