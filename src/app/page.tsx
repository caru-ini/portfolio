import { Avatar } from '@/components/avatar';
import { PostList } from '@/components/blog/postList';
import { CreationCard } from '@/components/creationCard';
import { buttonVariants } from '@/components/ui/button';
import { getLatestPostIndex } from '@/lib/contentful';
import { cn } from '@/lib/utils';
import { ArrowRight, CodeIcon, DatabaseIcon, ExternalLink, Flag, Lock } from 'lucide-react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import { SiDiscord, SiGithub, SiSpeakerdeck, SiX, SiZenn } from 'react-icons/si';

export const revalidate = 60;

export default async function Home() {
  const posts = await getLatestPostIndex(3);
  return (
    <main>
      {/* Hero */}
      <section className='flex h-svh w-full flex-col bg-secondary'>
        <div className='flex size-full flex-col items-center justify-center gap-y-6 bg-gradient-to-b from-cyan-100 to-background dark:from-cyan-950 dark:to-background'>
          <Avatar />
          <div className='flex flex-col items-center'>
            <h1 className='text-4xl font-bold'>Caru</h1>
            <p className='text-lg text-muted-foreground'>Student / Developer</p>
          </div>
          <div className='flex items-center space-x-4'>
            <a href='https://twitter.com/caru_ini' target='_blank' rel='noopener noreferrer'>
              <SiX size={32} />
            </a>
            <a href='https://github.com/caru-ini' target='_blank' rel='noopener noreferrer'>
              <SiGithub size={32} />
            </a>
            <a href='https://zenn.dev/caru' target='_blank' rel='noopener noreferrer'>
              <SiZenn size={32} />
            </a>
            <a
              href='https://discordapp.com/users/1226826654794649690'
              target='_blank'
              rel='noopener noreferrer'
            >
              <SiDiscord size={32} />
            </a>
            <a href='https://speakerdeck.com/caru' target='_blank' rel='noopener noreferrer'>
              <SiSpeakerdeck size={32} />
            </a>
          </div>
          {/* scroll */}
          <div className='absolute bottom-4 flex flex-col items-center text-muted-foreground'>
            <BsChevronDoubleDown className='animate-bounce' size={32} />
            <span className='text-sm'>Learn more</span>
          </div>
        </div>
      </section>
      <section className='py-12 md:py-24 lg:py-32'>
        <div className='container grid items-center justify-center gap-8 px-6 md:px-10 lg:grid-cols-2 lg:gap-16'>
          <div className='space-y-4'>
            <div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white'>
              About Me
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Hello, I&apos;m Caru😎
            </h2>
            <p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Caru(かる)と申します。18歳の大学生で、フロントエンドエンジニアを目指しています。Web開発やNLPに興味があります。プログラミングを始めたのは中学3年生のときで、
              Pythonを使ってDiscordBotを作っていました。
              その後、Web開発に興味を持ち、フロントエンドエンジニアを目指すようになりました。最近は、TypeScriptやReact,
              Next.jsのお勉強をしつつ、PythonでRAG(Retrieval Augmented
              Generation)を使ってチャットボットで遊んでいます。
            </p>
          </div>
          <div className='grid gap-4 md:grid-cols-2'>
            <div className='grid gap-2'>
              <CodeIcon className='size-8 text-primary' />
              <h3 className='text-lg font-semibold'>Web Development</h3>
              <p className='text-muted-foreground'>
                主にNext.js (app router, pages router), Reactを使って開発しています。
                TailwindCSSを使ってデザインを行っています。最近は、APIルートにHonoを使って開発しています。
              </p>
            </div>
            <div className='grid gap-2'>
              <DatabaseIcon className='size-8 text-primary' />
              <h3 className='text-lg font-semibold'>Database Management</h3>
              <p className='text-muted-foreground'>
                Prisma,
                DrizleORMを使ってデータベースの管理を行っています。最近は、SQLiteやPostgreSQL,
                CloudFlare D1, Workers KVを使った開発が多いです。
              </p>
            </div>
            <div className='grid gap-2'>
              <Lock className='size-8 text-primary' />
              <h3 className='text-lg font-semibold'>Security</h3>
              <p className='text-muted-foreground'>
                Amazon Cognitoのエミュレータである
                <a href='https://github.com/frouriojs/magnito'>Magnito</a>に、SRP(Secure Remote
                Password)を使った認証システムの実装で貢献しました。
              </p>
            </div>
            <div className='grid gap-2'>
              <Flag className='size-8 text-primary' />
              <h3 className='text-lg font-semibold'>Test</h3>
              <p className='text-muted-foreground'>
                普段の開発ではVitestでテストを書いています。テストを書くことで、コードの品質を保つことができるため、カバレッジは100%になるよう開発しています。
              </p>
            </div>
          </div>
        </div>
      </section>
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
          </div>
        </div>
      </section>
      <section className='py-12 md:py-16 lg:py-24' id='blog'>
        <div className='container space-y-3'>
          <div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white'>
            Blog
          </div>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            Latest Posts
          </h2>
          <p className='text-muted-foreground'>最近書いた記事や、最近の記事を紹介します。</p>
          <PostList posts={posts} />
          <div className='mt-8 flex justify-end'>
            <a
              href='/blog'
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'text-primary rounded-full hover:text-primary',
              )}
            >
              もっと見る
              <ArrowRight size={20} className='inline-block' />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
