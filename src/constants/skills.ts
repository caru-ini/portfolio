import { Frourio } from "@/components/icons/frourio";
import type { Skill, SkillCategoryItem, SkillLevel } from "@/types/skills";
import {
  Authjs,
  BetterAuthLight,
  ClaudeAI,
  Cloudflare,
  CloudflareWorkers,
  Docker,
  DrizzleORMLight,
  FastAPI,
  FastifyLight,
  Git,
  GoogleCloud,
  Hono,
  Nextjs,
  OpenAILight,
  PnpmLight,
  PostgreSQL,
  PrismaLight,
  Python,
  ReactLight,
  ShadcnUiLight,
  TailwindCSS,
  TurborepoLight,
  TypeScript,
} from "@ridemountainpig/svgl-react";
import { SiModal, SiPydantic } from "react-icons/si";

export const levelLabels: Record<SkillLevel, string> = {
  1: "触ったことがある",
  2: "個人開発で使える",
  3: "実務で使える",
};

export const skills: Skill[] = [
  {
    name: "TypeScript",
    icon: TypeScript,
    category: "frontend",
    level: 3,
  },
  {
    name: "Next.js",
    icon: Nextjs,
    category: "frontend",
    level: 3,
  },
  {
    name: "React",
    icon: ReactLight,
    category: "frontend",
    level: 3,
  },
  {
    name: "Auth.js",
    icon: Authjs,
    category: "backend",
    level: 2,
  },
  {
    name: "Better Auth",
    icon: BetterAuthLight,
    category: "backend",
    level: 2,
  },
  {
    name: "Prisma",
    icon: PrismaLight,
    category: "database-infra",
    level: 3,
  },
  {
    name: "Tailwind CSS",
    icon: TailwindCSS,
    category: "frontend",
    level: 3,
  },
  {
    name: "shadcn/ui",
    icon: ShadcnUiLight,
    category: "frontend",
    level: 2,
  },
  {
    name: "Hono",
    icon: Hono,
    category: "backend",
    level: 2,
  },
  {
    name: "Fastify",
    icon: FastifyLight,
    category: "backend",
    level: 2,
  },
  {
    name: "Frourio",
    icon: Frourio,
    category: "backend",
    level: 2,
  },
  {
    name: "Python",
    icon: Python,
    category: "backend",
    level: 3,
  },
  {
    name: "FastAPI",
    icon: FastAPI,
    category: "backend",
    level: 2,
  },
  {
    name: "Pydantic",
    icon: SiPydantic,
    category: "backend",
    level: 2,
  },
  {
    name: "PostgreSQL",
    icon: PostgreSQL,
    category: "database-infra",
    level: 2,
  },
  {
    name: "Drizzle ORM",
    icon: DrizzleORMLight,
    category: "database-infra",
    level: 2,
  },
  {
    name: "OpenAI API",
    icon: OpenAILight,
    category: "backend",
    level: 2,
  },
  {
    name: "Git",
    icon: Git,
    category: "tools-ai",
    level: 2,
  },
  {
    name: "pnpm workspace",
    icon: PnpmLight,
    category: "tools-ai",
    level: 2,
  },
  {
    name: "Turborepo",
    icon: TurborepoLight,
    category: "tools-ai",
    level: 2,
  },
  {
    name: "Docker",
    icon: Docker,
    category: "database-infra",
    level: 3,
  },
  {
    name: "Cloudflare Workers",
    icon: CloudflareWorkers,
    category: "database-infra",
    level: 3,
  },
  {
    name: "Cloudflare D1",
    icon: Cloudflare,
    category: "database-infra",
    level: 2,
  },
  {
    name: "GCP",
    icon: GoogleCloud,
    category: "database-infra",
    level: 1,
  },
  {
    name: "Modal",
    icon: SiModal,
    category: "database-infra",
    level: 2,
  },
  {
    name: "Claude Code",
    icon: ClaudeAI,
    category: "tools-ai",
    level: 3,
  },
  {
    name: "Codex",
    icon: OpenAILight,
    category: "tools-ai",
    level: 3,
  },
];

export const skillCategories: SkillCategoryItem[] = [
  {
    key: "frontend",
    label: "フロントエンド",
  },
  {
    key: "backend",
    label: "サーバー・API",
  },
  {
    key: "database-infra",
    label: "DB・インフラ",
  },
  {
    key: "tools-ai",
    label: "ツール・AI",
  },
];
