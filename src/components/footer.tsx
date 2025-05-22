"use client";

import { BrandLogo } from "@/components/brand-logo";
import { QRCodeDisplay } from "@/components/qr-code";
import { ExternalLink, Heart, ImageIcon, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiDiscord, SiGithub, SiX } from "react-icons/si";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col items-start gap-4">
            <BrandLogo />
            <p className="text-sm text-muted-foreground">
              エンジニアを目指す大学生。東洋大学情報連携学部(INIAD)所属。
              <br />
              Web開発と新しい技術を探求しています。
            </p>
            <div className="mt-2 flex items-center gap-4">
              <Link
                href="https://github.com/caru-ini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="GitHub"
              >
                <SiGithub className="size-5" />
              </Link>
              <Link
                href="https://x.com/caru_ini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Twitter"
              >
                <SiX className="size-5" />
              </Link>
              <Link
                href="https://discord.com/users/1226826654794649690"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Discord"
              >
                <SiDiscord className="size-5" />
              </Link>
              <Link
                href="mailto:caru17122@gmail.com"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Email"
              >
                <Mail className="size-5" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-foreground">リンク</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://github.com/caru-ini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <SiGithub className="size-4" />
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://bento.me/caru-ini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Image src="/bento.svg" alt="Bento" width={16} height={16} />
                  Bento
                </Link>
              </li>
              <li>
                <Link
                  href="https://runa.dev/caru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Image src="/runa.svg" alt="Runa" width={16} height={16} className="size-4" />
                  Runa.dev
                </Link>
              </li>
              <li>
                <Link
                  href="https://lapras.com/public/VNMRI0Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <ExternalLink className="size-4" />
                  LAPRAS
                </Link>
              </li>
              <li>
                <Link
                  href="/mediakit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                >
                  <ImageIcon className="size-4" />
                  メディアキット
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-foreground">プロジェクト</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://github.com/runa-devs/yoncomic-studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Yoncomic Studio
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/runa-devs/clothify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Clothify
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/frouriojs/magnito"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  magnito
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/caru-ini/next-authjs-template"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Next.js Auth.js Template
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-center text-sm text-muted-foreground md:flex-row">
          <div>
            &copy; {currentYear} Caru. Made with <Heart className="inline size-3 text-red-500" /> in
            Tokyo.
          </div>
          <div>
            <QRCodeDisplay buttonText="サイトQRコード" modalTitle="このサイトのQRコード" />
          </div>
        </div>
      </div>
    </footer>
  );
};
