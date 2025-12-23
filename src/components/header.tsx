"use client";

import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

export const Header = () => {
  const isScrolled = useScrollHeader();

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 bg-transparent px-2 transition-all duration-300",
        isScrolled ? "py-2" : "py-2 md:py-3"
      )}
    >
      <div className="container mx-auto flex max-w-5xl items-center justify-between rounded-xl border border-border bg-white/80 px-4 py-3 backdrop-blur-md">
        <BrandLogo />
        <nav className="flex items-center">
          <div className="flex items-center gap-1 rounded-full border border-border/60 bg-background/60 p-1 shadow-sm">
            <Button variant="ghost" size="sm" className="h-8 rounded-full px-2.5" asChild>
              <Link href="/blog" aria-label="Blog" className="flex items-center gap-1.5">
                <Icon icon="lucide:notebook-pen" className="size-4" />
                <span className="hidden md:inline">Blog</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" className="h-8 rounded-full px-2.5" asChild>
              <Link
                href="https://github.com/caru-ini"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-1.5"
              >
                <SiGithub className="size-4" />
                <span className="hidden md:inline">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" className="h-8 rounded-full px-2.5" asChild>
              <Link
                href="https://runa.dev/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Runa.dev"
                className="flex items-center gap-1.5"
              >
                <Image src="/runa.svg" alt="Runa" width={16} height={16} className="size-4" />
                <span className="hidden md:inline">Runa.dev</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" className="h-8 rounded-full px-2.5" asChild>
              <Link
                href="https://bento.me/caru-ini"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bento"
                className="flex items-center gap-1.5"
              >
                <Image src="/bento.svg" alt="Bento" width={20} height={20} />
                <span className="hidden md:inline">Bento</span>
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
