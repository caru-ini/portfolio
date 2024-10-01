import { CodeIcon, DatabaseIcon, Flag, Lock } from 'lucide-react';

export function About() {
  return (
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
              Prisma, DrizleORMを使ってデータベースの管理を行っています。最近は、SQLiteやPostgreSQL,
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
  );
}
