import { HelloSection } from '@/app/(about)/_components/HelloSection';
import { Strengths } from '@/app/(about)/_components/Strengths';

export function About() {
  return (
    <section className='py-12 md:py-24 lg:py-32'>
      <div className='flex flex-wrap items-center justify-center gap-20 md:gap-16'>
        <div className='grow space-y-4'>
          <div className='inline-block rounded-lg bg-primary px-3 py-1 text-sm text-white'>
            About Me
          </div>
          <div className='glow rounded-lg bg-secondary/20 p-4'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              I&apos;m Caru😎
            </h2>
            <p className='text-muted-foreground md:text-xl/relaxed lg:max-w-[60vw] lg:text-base/relaxed xl:text-xl/relaxed'>
              18歳の大学生で、フロントエンドエンジニアを目指しています。Web開発とNLPに興味があり、
              中学生の頃からプログラミングを始めました。現在は、TypeScript、React、Next.jsを学びながら、
              PythonでRAGを使ったチャットボットの開発も楽しんでいます。
            </p>
          </div>
        </div>
        <HelloSection />
      </div>
      <Strengths />
    </section>
  );
}
