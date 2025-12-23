"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { useMemo } from "react";

type Involvement = "個人開発" | "日常ツール" | "学習中";

type SkillType = {
  name: string;
  icon: React.ReactNode;
  category: "フロントエンド" | "バックエンド" | "その他";
  involvement: Involvement;
};

const SvgIcon = ({ src, alt }: { src: string; alt: string }) => {
  return <Image src={src} alt={alt} width={24} height={24} className="size-5" />;
};

const skills: SkillType[] = [
  {
    name: "TypeScript",
    icon: <Icon icon="logos:typescript-icon" className="size-5" />,
    category: "フロントエンド",
    involvement: "個人開発",
  },
  {
    name: "Next.js (App Router)",
    icon: <Icon icon="logos:nextjs-icon" className="size-5" />,
    category: "フロントエンド",
    involvement: "個人開発",
  },
  {
    name: "React",
    icon: <Icon icon="logos:react" className="size-5" />,
    category: "フロントエンド",
    involvement: "個人開発",
  },
  {
    name: "Tailwind CSS",
    icon: <Icon icon="logos:tailwindcss-icon" className="size-5" />,
    category: "フロントエンド",
    involvement: "個人開発",
  },
  {
    name: "Hono",
    icon: <Icon icon="logos:hono" className="size-5" />,
    category: "バックエンド",
    involvement: "個人開発",
  },
  {
    name: "tRPC",
    icon: <SvgIcon src="/icons/trpc.svg" alt="tRPC" />,
    category: "バックエンド",
    involvement: "学習中",
  },
  {
    name: "Prisma",
    icon: <Icon icon="logos:prisma" className="size-5" />,
    category: "バックエンド",
    involvement: "個人開発",
  },
  {
    name: "OpenAI API",
    icon: <Icon icon="logos:openai-icon" className="size-5" />,
    category: "その他",
    involvement: "個人開発",
  },
  {
    name: "Proxmox",
    icon: <SvgIcon src="/icons/proxmox.svg" alt="Proxmox" />,
    category: "その他",
    involvement: "日常ツール",
  },
  {
    name: "AWS",
    icon: <Icon icon="logos:aws" className="size-5" />,
    category: "その他",
    involvement: "学習中",
  },
  {
    name: "Docker",
    icon: <Icon icon="logos:docker-icon" className="size-5" />,
    category: "その他",
    involvement: "日常ツール",
  },
  {
    name: "Git",
    icon: <Icon icon="logos:git-icon" className="size-5" />,
    category: "その他",
    involvement: "日常ツール",
  },
];

export function SkillsSection() {
  const groupedByInvolvement = useMemo(() => {
    const bands: Involvement[] = ["個人開発", "日常ツール", "学習中"];
    return bands.map((band) => ({
      band,
      items: skills.filter((s) => s.involvement === band),
    }));
  }, []);

  return (
    <section className="py-20" id="skills">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">スキル</h2>
          <div className="mx-auto max-w-2xl space-y-2 text-muted-foreground">
            <p>現在扱っているテクノロジーとツールの一覧です。</p>
            <p className="text-xs">
              個人開発=プロダクトで継続使用 / 日常ツール=日常的に活用 / 学習中=キャッチアップ段階
            </p>
          </div>
        </div>

        <div className="space-y-10">
          {groupedByInvolvement.map(({ band, items }) => (
            <div key={band}>
              <h3 className="mb-4 text-lg font-semibold text-muted-foreground">{band}</h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <SkillTag key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillTag({ skill }: { skill: SkillType }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-border/60 bg-background px-4 py-2 transition-all duration-200 hover:border-primary/50 hover:bg-primary/5 hover:rotate-[1deg] hover:scale-110">
      {skill.icon}
      <span className="text-sm font-medium">{skill.name}</span>
    </div>
  );
}
