import { Button } from "@/components/ui/button";
import { ArrowDown, ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

export function HeroSection() {
  const age = Math.floor(
    (new Date().getTime() - new Date("2005-12-02").getTime()) / (1000 * 60 * 60 * 24 * 365.25)
  );

  return (
    <section className="relative flex w-full items-center overflow-hidden">
      {/* Grid pattern background */}
      <div className="hero-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="container mx-auto max-w-5xl px-4 pb-16 pt-28 md:pt-32">
        <div className="flex flex-col-reverse items-start gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
          <div className="max-w-2xl">
            <h1 className="mb-5 font-poppins text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Caru
            </h1>
            <p className="mb-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
              エンジニアを目指す大学生。{age}歳。
              <br />
              東洋大学情報連携学部(INIAD)所属(28卒)。
              <br />
              Web開発が大好きで、中学時代からプログラミングを続けています。
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button className="gap-2" asChild>
                <Link href="#projects">
                  <span>プロジェクトを見る</span>
                  <ArrowDown className="size-4" />
                </Link>
              </Button>
              <Button variant="outline" className="gap-2 bg-background" asChild>
                <Link href="https://github.com/caru-ini" target="_blank" rel="noopener noreferrer">
                  <SiGithub className="size-4" />
                  <span>GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" className="gap-2" asChild>
                <Link href="https://own.page/caru" target="_blank" rel="noopener noreferrer">
                  <ExternalLinkIcon className="size-4" />
                  <span>リンク集</span>
                </Link>
              </Button>
            </div>
          </div>

          <Image
            src="/avatar.webp"
            alt="Caru"
            width={208}
            height={208}
            quality={70}
            priority
            className="size-28 shrink-0 select-none rounded-full ring-1 ring-border sm:size-36 md:size-52"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
