"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

const cardBaseStyles =
  "group overflow-hidden border border-border/50 bg-background transition-all duration-300 hover:ring-1 hover:ring-ring";
const tagStyles = "rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground";

type ProjectType = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
};

const projects: ProjectType[] = [
  {
    id: "portfolio",
    title: "ポートフォリオサイト",
    description: "Next.js、TypeScript、Tailwind CSSを使用して構築した個人ポートフォリオサイト",
    image: "/projects/portfolio.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    github: "https://github.com/caru-ini/portfolio",
  },
  {
    id: "yoncomic-studio",
    title: "Yoncomic Studio",
    description:
      "AIを使った簡易4コマ漫画作成ツール。Next.js 14とAI技術を活用し、誰でも簡単に4コマ漫画を作成できます。",
    image: "/projects/yoncomic-studio.webp",
    tags: [
      "Next.js",
      "Auth.js",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "shadcn/ui",
      "Docker",
      "OpenAI API",
      "Civitai API",
    ],
    github: "https://github.com/runa-devs/yoncomic-studio",
  },
  {
    id: "clothify",
    title: "Clothify",
    description: "FLUX.1(画像生成AI)を使用して高品質な服の試着ができるサービス。現在継続開発中",
    image: "/projects/clothify.webp",
    tags: ["Next.js", "Auth.js", "Prisma", "PostgreSQL", "Tailwind CSS", "shadcn/ui", "Docker"],
    github: "https://github.com/runa-devs/clothify",
    demo: "https://clothify.runa.dev",
  },
  {
    id: "magnito",
    title: "Magnito",
    description:
      "Amazon Cognitoのエミュレーター。インターネット接続なしでCognitoのエンドポイントとして使用できます。",
    image: "/projects/magnito.svg",
    tags: ["TypeScript", "Docker", "Cognito", "API", "フレームワーク"],
    github: "https://github.com/frouriojs/magnito",
  },
];

function ProjectTags({ tags, maxCount = 5 }: { tags: string[]; maxCount?: number }) {
  const visibleTags = tags.slice(0, maxCount);
  const remainingCount = tags.length - maxCount;

  return (
    <div className="flex flex-wrap gap-2">
      {visibleTags.map((tag) => (
        <span key={tag} className={tagStyles}>
          {tag}
        </span>
      ))}
      {remainingCount > 0 && <span className={tagStyles}>+{remainingCount}</span>}
    </div>
  );
}

function ProjectLinks({
  github,
  demo,
  size = "default",
}: {
  github?: string;
  demo?: string;
  size?: "default" | "compact";
}) {
  const isCompact = size === "compact";

  return (
    <div className="flex gap-2">
      {github && (
        <Button
          variant={isCompact ? "ghost" : "outline"}
          size="sm"
          className={cn("gap-1.5", isCompact && "h-8 px-2")}
          asChild
        >
          <Link href={github} target="_blank" rel="noopener noreferrer">
            <SiGithub className={isCompact ? "size-3.5" : "size-4"} />
            <span className={isCompact ? "text-xs" : undefined}>
              {isCompact ? "Code" : "GitHub"}
            </span>
          </Link>
        </Button>
      )}
      {demo && (
        <Button
          variant={isCompact ? "ghost" : undefined}
          size="sm"
          className={cn("gap-1.5", isCompact && "h-8 px-2")}
          asChild
        >
          <Link href={demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink className={isCompact ? "size-3.5" : "size-4"} />
            <span className={isCompact ? "text-xs" : undefined}>{isCompact ? "Demo" : "デモ"}</span>
          </Link>
        </Button>
      )}
    </div>
  );
}

export function ProjectsSection() {
  const [featured, ...others] = projects;

  return (
    <section className="bg-muted/20 py-20" id="projects">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">プロジェクト</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            これまでに手がけた主なプロジェクトをご紹介します。
          </p>
        </div>

        <FeaturedProject project={featured} />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {others.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProject({ project }: { project: ProjectType }) {
  return (
    <div className={cn(cardBaseStyles, "rounded-2xl")}>
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-video md:aspect-auto">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={80}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center p-6 md:p-8">
          <div className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
            Featured
          </div>
          <h3 className="mb-3 text-2xl font-bold">{project.title}</h3>
          <p className="mb-4 text-muted-foreground">{project.description}</p>
          <div className="mb-6">
            <ProjectTags tags={project.tags} />
          </div>
          <ProjectLinks github={project.github} demo={project.demo} />
        </div>
      </div>
    </div>
  );
}

function ProjectItem({ project }: { project: ProjectType }) {
  return (
    <div className={cn(cardBaseStyles, "flex flex-col rounded-xl")}>
      <div className="relative h-40 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          quality={70}
          className={cn(
            "transition-transform duration-300 group-hover:scale-105",
            project.id === "magnito" ? "object-contain" : "object-cover"
          )}
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 font-semibold">{project.title}</h3>
        <p className="mb-3 line-clamp-2 flex-1 text-sm text-muted-foreground">
          {project.description}
        </p>
        <ProjectLinks github={project.github} demo={project.demo} size="compact" />
      </div>
    </div>
  );
}
