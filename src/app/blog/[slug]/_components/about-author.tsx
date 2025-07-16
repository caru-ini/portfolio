"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

export const AboutAuthor = () => {
  return (
    <Card className="mx-auto mt-16 max-w-4xl">
      <CardContent className="p-4">
        <div className="mb-4">
          <h2 className="text-sm font-medium text-muted-foreground">この記事を書いた人</h2>
        </div>
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
          <div className="shrink-0">
            <Image
              src="/avatar.webp"
              alt="Caru"
              width={120}
              height={120}
              quality={70}
              className="size-[120px] select-none rounded-full"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>

          <div className="flex flex-1 flex-col items-center gap-4 text-center md:items-start md:text-left">
            <div>
              <h3 className="font-poppins text-xl font-bold text-foreground md:text-2xl">Caru</h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                エンジニアを目指す大学生。
                {Math.floor(
                  (new Date().getTime() - new Date("2005-12-02").getTime()) /
                    (1000 * 60 * 60 * 24 * 365.25)
                )}
                歳。
                <br />
                東洋大学情報連携学部(INIAD)所属(28卒)。
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <Button size="sm" className="gap-2" asChild>
                <Link href="https://github.com/caru-ini" target="_blank" rel="noopener noreferrer">
                  <SiGithub className="size-4" />
                  <span>GitHub</span>
                </Link>
              </Button>
              <Button size="sm" variant="outline" className="gap-2 bg-background" asChild>
                <Link href="https://bento.me/caru-ini" target="_blank" rel="noopener noreferrer">
                  <Image src="/bento.svg" alt="Bento" width={16} height={16} />
                  <span>Bento.me</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
