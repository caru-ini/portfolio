"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

type ProjectType = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
};

const projects = [
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
    demo: "",
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
] satisfies ProjectType[];

export function ProjectsSection() {
  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">プロジェクト</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            これまでに手がけた主なプロジェクトをご紹介します。
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:ring-1 hover:ring-ring">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={70}
          className={`object-center transition-transform duration-300 ${
            project.id === "magnito" ? "object-contain" : "object-cover"
          }`}
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-4">
        {project.github && (
          <Button variant="outline" size="sm" className="gap-2" asChild>
            <Link href={project.github} target="_blank" rel="noopener noreferrer">
              <SiGithub className="size-4" />
              <span>GitHub</span>
            </Link>
          </Button>
        )}
        {project.demo && (
          <Button size="sm" className="gap-2" asChild>
            <Link href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="size-4" />
              <span>デモ</span>
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
