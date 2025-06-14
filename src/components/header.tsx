"use client";

import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { cn } from "@/lib/utils";
import { Newspaper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

export const Header = () => {
  const isScrolled = useScrollHeader();

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-border bg-white/80 py-3 backdrop-blur-md"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex max-w-2xl items-center justify-between px-4">
        <BrandLogo />
        <nav className="flex items-center gap-6">
          <Link
            href="/blog"
            className="flex items-center gap-1.5 font-medium transition-colors hover:text-primary"
          >
            <Newspaper className="size-4" />
            <span className="hidden md:block">Blog</span>
          </Link>
          <Link
            href="https://github.com/caru-ini"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-medium transition-colors hover:text-primary"
          >
            <SiGithub className="size-4" />
            <span className="hidden md:block">GitHub</span>
          </Link>
          <Link
            href="https://runa.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-medium transition-colors hover:text-primary"
          >
            <Image src="/runa.svg" alt="Runa" width={16} height={16} className="size-4" />
            <span className="hidden md:block">Runa.dev</span>
          </Link>
          <Button variant="outline" className="gap-2" size="sm" asChild>
            <Link href="https://bento.me/caru-ini" target="_blank" rel="noopener noreferrer">
              <Image src="/bento.svg" alt="Bento" width={20} height={20} />
              <span className="ml-1 hidden md:block">Bento</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};
