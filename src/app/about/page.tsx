import React from "react";
import Nav from "@/components/nav";
import Image from "next/image";

const AboutPage: React.FC = () => {
  return (
    <main>
      <Nav />
      <div className="flex flex-col justify-center min-h-[calc(100vh-74px)] container md:max-w-[800px] space-y-5 mt-3 md:mt-0">
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/avatar.png"
            alt="caru"
            layout="responsive"
            width={200}
            height={200}
            className="rounded-full max-w-[300px] md:max-w-[400px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>
            <h2 className="ml-2 text-2xl font-bold">About Me</h2>
            <div className="w-1/3 border-t-2 border-border" />
            <p className="p-2 pt-0 mt-5">
              Caruと申します。INIAD(東洋大学情報連携学部)の8期生として学んでいます。
              中学生の頃にプログラミングに興味を持ち、独学でpythonを学んで、discordbotなどを作成していました。
              最近では、Reactを使ったWebアプリケーションの開発に興味を持ち、勉強しています。
              <br />
              サイトはNext.jsで作成しています。
              なお、現在作成中ですので、詳しいプロフィールはGitHubをご覧ください。
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <h2 className="ml-2 text-2xl font-bold">Skills</h2>
            <div className="w-1/3 border-t-2 border-border" />
            <div className="flex flex-col mt-5">
              <h3 className="ml-2 text-xl font-bold">Programming Languages</h3>
              <ul className="mt-2 list-disc list-inside">
                <li>Python</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div className="flex flex-col mt-5">
              <h3 className="ml-2 text-xl font-bold">Frameworks</h3>
              <ul className="mt-2 list-disc list-inside">
                <li>React</li>
                <li>Next.js</li>
                <li>LangChain</li>
                <li>OpenAI API</li>
                <li>Discord.py</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
