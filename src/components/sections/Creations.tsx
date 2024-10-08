import { cn } from '@/lib/utils';
import { sourceCodePro } from '@/utils/font';
import { ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

type Creation = {
  title: string;
  links: { href: string; icon: React.ElementType }[];
  description: string;
};

const creations: Creation[] = [
  {
    title: 'My-Components',
    links: [
      { href: 'https://github.com/caru-ini/my-components', icon: SiGithub },
      { href: 'https://components.caru.live/', icon: ExternalLink },
    ],
    description:
      'shadcn/uiを使った自作のコンポーネント集。デモサイトもあります。しかし、肝心の載せるコンポーネントのアイデアがあまりないので、まだコンポーネントの数は少なめです。',
  },
  {
    title: 'Hono + D1 Todo',
    links: [{ href: 'https://github.com/caru-ini/hono-d1-todo', icon: SiGithub }],
    description:
      'HonoとCloudFlare D1、Next.jsを使ったTodoアプリ。D1にデータを保存しています。Vitestのなんちゃってテストもあります。 ご参考までにどうぞ。デプロイはしていません。',
  },
  {
    title: 'wol-webui',
    links: [{ href: 'https://github.com/caru-ini/wol-webui', icon: SiGithub }],
    description:
      '自分用に作ったWoL (Wake on LAN)のWebUI。Next.js + Hono + Prisma(PostgreSQL)で作成しています。docker-composeで使用できます。',
  },
  {
    title: 'chat-cli',
    links: [{ href: 'https://github.com/caru-ini/chat-cli', icon: SiGithub }],
    description:
      'Pythonで作成したリッチなChatGPT(API)のCLI。 openai + rich + prompt_toolkitなどを使っています。レスポンスのストリーミング表示、ツール、マルチセッション対応です。',
  },
];

const CreationCard: React.FC<Creation> = ({ title, links, description }) => {
  return (
    <div className='flex flex-col gap-4'>
      <h3
        className={cn(
          'w-fit rounded-lg bg-secondary/60 py-0.5 px-2 text-2xl font-semibold',
          sourceCodePro.className,
        )}
      >
        {title}
      </h3>
      <p className='text-muted-foreground'>{description}</p>
      <div className='flex gap-2'>
        {links.map((link, index) => (
          <a key={index} href={link.href} target='_blank' rel='noopener noreferrer'>
            <link.icon className='size-8' />
          </a>
        ))}
      </div>
    </div>
  );
};

export function Creations() {
  return (
    <section className='py-12 md:py-16 lg:py-24' id='creations'>
      <div className='container space-y-3'>
        <div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white'>
          Creations
        </div>
        <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>Creations</h2>
        <p className='text-muted-foreground'>これまでに作成したアプリとかサイトとか</p>
        <div className='grid gap-8 p-2 md:grid-cols-2 '>
          {creations.map((creation) => (
            <CreationCard key={creation.title} {...creation} />
          ))}
        </div>
      </div>
    </section>
  );
}
