import { Frourio } from "@/components/icons/frourio";
import type { Skill, SkillLevel, SkillPositionItem } from "@/types/skills";
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
import { Cloud, LayoutGrid, Layers, Monitor, Server } from "lucide-react";
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
    positions: ["fullstack", "frontend", "backend"],
    level: 3,
  },
  {
    name: "Next.js",
    icon: Nextjs,
    positions: ["fullstack", "frontend"],
    level: 3,
  },
  {
    name: "React",
    icon: ReactLight,
    positions: ["fullstack", "frontend"],
    level: 3,
  },
  {
    name: "Auth.js",
    icon: Authjs,
    positions: ["fullstack", "backend"],
    level: 2,
  },
  {
    name: "Better Auth",
    icon: BetterAuthLight,
    positions: ["fullstack", "backend"],
    level: 2,
  },
  {
    name: "Prisma",
    icon: PrismaLight,
    positions: ["fullstack", "backend"],
    level: 3,
  },
  {
    name: "Tailwind CSS",
    icon: TailwindCSS,
    positions: ["fullstack", "frontend"],
    level: 3,
  },
  {
    name: "shadcn/ui",
    icon: ShadcnUiLight,
    positions: ["fullstack", "frontend"],
    level: 2,
  },
  {
    name: "Hono",
    icon: Hono,
    positions: ["fullstack", "backend"],
    level: 2,
  },
  {
    name: "Fastify",
    icon: FastifyLight,
    positions: ["fullstack", "backend"],
    level: 2,
  },
  {
    name: "Frourio",
    icon: Frourio,
    positions: ["fullstack", "backend"],
    level: 2,
  },
  {
    name: "Python",
    icon: Python,
    positions: ["backend"],
    level: 3,
  },
  {
    name: "FastAPI",
    icon: FastAPI,
    positions: ["backend"],
    level: 2,
  },
  {
    name: "Pydantic",
    icon: SiPydantic,
    positions: ["backend"],
    level: 2,
  },
  {
    name: "PostgreSQL",
    icon: PostgreSQL,
    positions: ["fullstack", "backend", "infra"],
    level: 2,
  },
  {
    name: "Drizzle ORM",
    icon: DrizzleORMLight,
    positions: ["fullstack", "backend"],
    level: 2,
  },
  {
    name: "OpenAI API",
    icon: OpenAILight,
    positions: ["backend"],
    level: 2,
  },
  {
    name: "Git",
    icon: Git,
    positions: [],
    level: 2,
  },
  {
    name: "pnpm workspace",
    icon: PnpmLight,
    positions: [],
    level: 2,
  },
  {
    name: "Turborepo",
    icon: TurborepoLight,
    positions: ["fullstack"],
    level: 2,
  },
  {
    name: "Docker",
    icon: Docker,
    positions: ["fullstack", "backend", "infra"],
    level: 3,
  },
  {
    name: "Cloudflare Workers",
    icon: CloudflareWorkers,
    positions: ["fullstack", "backend", "infra"],
    level: 3,
  },
  {
    name: "Cloudflare D1",
    icon: Cloudflare,
    positions: ["backend", "infra"],
    level: 2,
  },
  {
    name: "GCP",
    icon: GoogleCloud,
    positions: ["infra"],
    level: 1,
  },
  {
    name: "Modal",
    icon: SiModal,
    positions: ["infra"],
    level: 2,
  },
  {
    name: "Claude Code",
    icon: ClaudeAI,
    positions: [],
    level: 3,
  },
  {
    name: "Codex",
    icon: OpenAILight,
    positions: [],
    level: 3,
  },
];

export const skillPositions: SkillPositionItem[] = [
  {
    key: "all",
    label: "すべて",
    icon: LayoutGrid,
  },
  {
    key: "fullstack",
    label: "フルスタック",
    icon: Layers,
  },
  {
    key: "frontend",
    label: "フロント",
    icon: Monitor,
  },
  {
    key: "backend",
    label: "バックエンド",
    icon: Server,
  },
  {
    key: "infra",
    label: "インフラ",
    icon: Cloud,
  },
];
