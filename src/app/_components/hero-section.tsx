"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

export function HeroSection() {
  return (
    <section className="relative flex h-svh w-full items-center justify-center overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="blob-animation absolute -right-32 -top-32 size-96 rounded-full bg-primary/10"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="blob-animation absolute -left-32 top-1/2 size-64 rounded-full bg-secondary"
          style={{ animationDelay: "-2s" }}
        />
        <div
          className="blob-animation absolute -bottom-32 right-1/3 size-80 rounded-full bg-accent"
          style={{ animationDelay: "-4s" }}
        />
      </div>

      <div className="container relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-4 text-center">
        <Image
          src="/avatar.webp"
          alt="Caru"
          width={200}
          height={200}
          quality={70}
          priority
          className="mb-4 size-[200px] select-none rounded-full"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />
        <h1 className="mb-4 font-poppins text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Caru
        </h1>
        <p className="mb-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          エンジニアを目指す大学生。
          {Math.floor(
            (new Date().getTime() - new Date("2005-12-02").getTime()) /
              (1000 * 60 * 60 * 24 * 365.25)
          )}
          歳。
          <br />
          東洋大学情報連携学部(INIAD)所属(28卒)。
          <br />
          Web開発が大好きで、中学時代からプログラミングを続けています。
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button className="gap-2" asChild>
            <Link href="https://github.com/caru-ini" target="_blank" rel="noopener noreferrer">
              <SiGithub className="size-4" />
              <span>GitHub</span>
            </Link>
          </Button>
          <Button variant="outline" className="gap-2 bg-background" asChild>
            <Link href="https://bento.me/caru-ini" target="_blank" rel="noopener noreferrer">
              <Image src="/bento.svg" alt="Bento" width={20} height={20} />
              <span>リンク集</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
