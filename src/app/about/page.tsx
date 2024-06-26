import React from 'react';
import Image from 'next/image';
import Header from '@/components/header';

const AboutPage: React.FC = () => {
  return (
    <main className='container flex flex-col justify-center space-y-5'>
      <div className='flex flex-col items-center justify-center'>
        <Image
          src='/avatar.png'
          alt='caru'
          layout='responsive'
          width={200}
          height={200}
          className='mt-5 max-w-[300px] select-none rounded-full md:max-w-[400px]'
          draggable={false}
        />
      </div>
      <div className='flex flex-col items-center justify-center'>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container flex flex-col items-center justify-center space-y-12 px-4 md:px-6'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              About Me
            </h2>
            <p className='mt-5 max-w-[900px] p-2 pt-0 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              Caruと申します。INIAD(東洋大学情報連携学部)の8期生として学んでいます。
              中学生の頃にプログラミングに興味を持ち、独学でpythonを学んで、discordbotなどを作成していました。
              最近では、Reactを使ったWebアプリケーションの開発に興味を持ち、勉強しています。
              <br />
              サイトはNext.jsで作成しています。
              なお、現在作成中ですので、詳しいプロフィールはGitHubをご覧ください。
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
