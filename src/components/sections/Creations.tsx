import { CreationCard } from '@/components/creationCard';
import { ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

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
          <CreationCard
            title='My-Components'
            links={[
              { href: 'https://github.com/caru-ini/my-components', icon: <SiGithub size={32} /> },
              { href: 'https://components.caru.live/', icon: <ExternalLink size={32} /> },
            ]}
          >
            <code>shadcn/ui</code>を使った自作のコンポーネント集。デモサイトもあります。
            しかし、肝心の載せるコンポーネントのアイデアがあまりないので、まだコンポーネントの数は少なめです。
          </CreationCard>
          <CreationCard
            title='Hono + D1 Todo'
            links={[
              { href: 'https://github.com/caru-ini/hono-d1-todo', icon: <SiGithub size={32} /> },
            ]}
          >
            HonoとCloudFlare D1、Next.jsを使ったTodoアプリ。D1にデータを保存しています。
            Vitestのなんちゃってテストもあります。 ご参考までにどうぞ。デプロイはしていません。
          </CreationCard>
          <CreationCard
            title='wol-webui'
            links={[
              { href: 'https://github.com/caru-ini/wol-webui', icon: <SiGithub size={32} /> },
            ]}
          >
            自分用に作ったWoL (Wake on LAN)のWebUI。Next.js + Hono +
            Prisma(PostgreSQL)で作成しています。docker-composeで使用できます。
          </CreationCard>
          <CreationCard
            title='chat-cli'
            links={[{ href: 'https://github.com/caru-ini/chat-cli', icon: <SiGithub size={32} /> }]}
          >
            Pythonで作成したリッチなChatGPT(API)のCLI。 openai + rich +
            prompt_toolkitなどを使っています。
            レスポンスのストリーミング表示、ツール、マルチセッション対応です。
          </CreationCard>
        </div>
      </div>
    </section>
  );
}
