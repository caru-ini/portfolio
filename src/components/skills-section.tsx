"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useMemo } from "react";
import {
  SiDocker,
  SiGit,
  SiNextdotjs,
  SiOpenai,
  SiPrisma,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

type Involvement = "個人開発" | "日常ツール" | "学習中";

type SkillType = {
  name: string;
  icon: React.ReactNode;
  category: "フロントエンド" | "バックエンド" | "その他";
  involvement: Involvement;
};

const SvgIcon = ({ src, alt }: { src: string; alt: string }) => {
  return <Image src={src} alt={alt} width={24} height={24} className="size-8" />;
};

const skills: SkillType[] = [
  {
    name: "TypeScript",
    icon: <SvgIcon src="/icons/typescript.svg" alt="TypeScript" />,
    category: "フロントエンド",
    involvement: "個人開発",
  },
  {
    name: "Next.js (App Router)",
    icon: <SiNextdotjs className="size-8" />,
    category: "フロントエンド",
    involvement: "個人開発",
  },
  {
    name: "React",
    icon: <SiReact className="size-8 text-[#61DAFB]" />,
    category: "フロントエンド",
    involvement: "個人開発",
  },

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="size-8 text-[#06B6D4]" />,
    category: "フロントエンド",
    involvement: "個人開発",
  },
  {
    name: "Hono",
    icon: <SvgIcon src="/icons/hono.svg" alt="Hono" />,
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
    icon: <SiPrisma className="size-8 text-[#2D3748]" />,
    category: "バックエンド",
    involvement: "個人開発",
  },
  {
    name: "OpenAI API",
    icon: <SiOpenai className="size-8 text-[#000000]" />,
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
    icon: <SvgIcon src="/icons/aws.svg" alt="AWS" />,
    category: "その他",
    involvement: "学習中",
  },
  {
    name: "Docker",
    icon: <SiDocker className="size-8 text-[#2496ED]" />,
    category: "その他",
    involvement: "日常ツール",
  },
  {
    name: "Git",
    icon: <SiGit className="size-8 text-[#F05032]" />,
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
    <section className="bg-muted/30 py-20" id="skills">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">スキル</h2>
          <div className="mb-2 flex justify-center">
            <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium">現在作成中</span>
          </div>
          <div className="mx-auto max-w-2xl space-y-3 text-muted-foreground">
            <p>現在扱っているテクノロジーとツールの一覧です。</p>
            <p className="text-xs">
              個人開発=プロダクトで継続使用 / 日常ツール=日常的に活用 / 学習中=キャッチアップ段階
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {groupedByInvolvement.map(({ band, items }) => (
            <div key={band}>
              <h3 className="mb-6 text-xl font-semibold">{band}</h3>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }: { skill: SkillType }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="flex h-full items-center gap-4 p-4">
        <div className="shrink-0">{skill.icon}</div>
        <div className="flex-1 space-y-1">
          <p className="whitespace-nowrap font-medium">{skill.name}</p>
        </div>
      </CardContent>
    </Card>
  );
}
