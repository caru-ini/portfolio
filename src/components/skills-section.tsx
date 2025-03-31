"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  SiDocker,
  SiGit,
  SiNextdotjs,
  SiOpenai,
  SiPrisma,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

type SkillType = {
  name: string;
  icon: React.ReactNode;
  category: "フロントエンド" | "バックエンド" | "その他";
  level: number; // 1-5
};

const SvgIcon = ({ src, alt }: { src: string; alt: string }) => {
  return <Image src={src} alt={alt} width={24} height={24} className="size-8" />;
};

const skills: SkillType[] = [
  {
    name: "TypeScript",
    icon: <SvgIcon src="/icons/typescript.svg" alt="TypeScript" />,
    category: "フロントエンド",
    level: 4,
  },
  {
    name: "Next.js (App Router)",
    icon: <SiNextdotjs className="size-8" />,
    category: "フロントエンド",
    level: 5,
  },
  {
    name: "React",
    icon: <SiReact className="size-8 text-[#61DAFB]" />,
    category: "フロントエンド",
    level: 4,
  },

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="size-8 text-[#06B6D4]" />,
    category: "フロントエンド",
    level: 5,
  },
  {
    name: "Hono",
    icon: <SvgIcon src="/icons/hono.svg" alt="Hono" />,
    category: "バックエンド",
    level: 3,
  },
  {
    name: "tRPC",
    icon: <SvgIcon src="/icons/trpc.svg" alt="tRPC" />,
    category: "バックエンド",
    level: 3,
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="size-8 text-[#2D3748]" />,
    category: "バックエンド",
    level: 3,
  },
  {
    name: "OpenAI API",
    icon: <SiOpenai className="size-8 text-[#000000]" />,
    category: "その他",
    level: 3,
  },
  {
    name: "Proxmox",
    icon: <SvgIcon src="/icons/proxmox.svg" alt="Proxmox" />,
    category: "その他",
    level: 3,
  },
  {
    name: "AWS",
    icon: <SvgIcon src="/icons/aws.svg" alt="AWS" />,
    category: "その他",
    level: 2,
  },
  {
    name: "Docker",
    icon: <SiDocker className="size-8 text-[#2496ED]" />,
    category: "その他",
    level: 3,
  },
  {
    name: "Git",
    icon: <SiGit className="size-8 text-[#F05032]" />,
    category: "その他",
    level: 4,
  },
];

export function SkillsSection() {
  const categories = ["フロントエンド", "バックエンド", "その他"] as const;

  return (
    <section className="bg-muted/30 py-20" id="skills">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            スキル
            <span className="ml-2 rounded-md bg-muted px-2 py-1 text-xs font-medium">
              現在作成中
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            現在習得しているテクノロジーとツールのリストです。
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="mb-6 text-xl font-semibold">{category}</h3>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
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
      <CardContent className="flex items-center gap-4 p-4">
        <div className="shrink-0">{skill.icon}</div>
        <div className="flex-1 space-y-1">
          <div className="font-medium">{skill.name}</div>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 w-6 rounded-full ${i < skill.level ? "bg-primary" : "bg-muted"}`}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
