import { SectionHeader } from "@/app/_components/section-header";
import { Button } from "@/components/ui/button";
import { getRepoStars } from "@/lib/github";
import { cn } from "@/lib/utils";
import { ExternalLink, Star, Trophy } from "lucide-react";
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
  awards?: string[];
  /** GitHub APIから取得したスター数をバッジ表示する */
  showStars?: boolean;
};

const projects: ProjectType[] = [
  {
    id: "clothify",
    title: "Clothify",
    description:
      "FLUX.1(画像生成AI)を使用して高品質な服の試着ができるサービス。技育CAMPハッカソンで優秀賞を受賞。",
    image: "/projects/clothify.webp",
    tags: ["Next.js", "Auth.js", "Prisma", "PostgreSQL", "Tailwind CSS", "shadcn/ui", "Docker"],
    github: "https://github.com/runa-devs/clothify",
    demo: "https://clothify.runa.dev",
    awards: ["技育CAMPハッカソン 優秀賞", "技育博 DeNA賞・CARTA賞"],
  },
  {
    id: "magnito",
    title: "Magnito",
    description:
      "Amazon Cognitoのエミュレーター。インターネット接続なしでCognitoのエンドポイントとして使用できます。",
    image: "/projects/magnito.svg",
    tags: ["TypeScript", "Docker", "Cognito", "API", "フレームワーク"],
    github: "https://github.com/frourios/magnito",
    showStars: true,
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
    awards: ["技育CAMPハッカソン 努力賞"],
  },
  {
    id: "novelai-sdk",
    title: "NovelAI SDK",
    description:
      "NovelAI APIのPython SDK。完全な型ヒントとPydantic v2バリデーションで、型安全なAI画像生成を実現。",
    image: "/projects/novelai-sdk.png",
    tags: ["Python", "SDK", "NovelAI", "Pydantic", "API"],
    github: "https://github.com/caru-ini/novelai-sdk",
  },
  {
    id: "next-authjs-template",
    title: "Next.js Auth Template",
    description:
      "Next.js 15 + Auth.js + Prisma + shadcn/uiのプロダクションレディなスターターキット。",
    image: "/projects/next-authjs-template.png",
    tags: ["Next.js", "Auth.js", "Prisma", "shadcn/ui", "Template"],
    github: "https://github.com/caru-ini/next-authjs-template",
    showStars: true,
  },
  {
    id: "portfolio",
    title: "ポートフォリオサイト",
    description: "Next.js、TypeScript、Tailwind CSSを使用して構築した個人ポートフォリオサイト",
    image: "/projects/portfolio.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    github: "https://github.com/caru-ini/portfolio",
  },
];

function AwardBadge({ award, compact = false }: { award: string; compact?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium text-foreground/80",
        compact ? "text-xs" : "text-sm"
      )}
    >
      <Trophy
        className={cn("text-amber-500 dark:text-amber-400", compact ? "size-3" : "size-3.5")}
        aria-hidden
      />
      {award}
    </span>
  );
}

function StarBadge({ count, compact = false }: { count: number; compact?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium text-foreground/80",
        compact ? "text-xs" : "text-sm"
      )}
    >
      <Star
        className={cn(
          "fill-amber-500 text-amber-500 dark:fill-amber-400 dark:text-amber-400",
          compact ? "size-3" : "size-3.5"
        )}
        aria-hidden
      />
      {count.toLocaleString("en-US")} Stars
    </span>
  );
}

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

export async function ProjectsSection() {
  const [featured, ...others] = projects;
  if (!featured) return null;

  const starEntries = await Promise.all(
    projects
      .filter((project): project is ProjectType & { github: string } =>
        Boolean(project.showStars && project.github)
      )
      .map(async (project) => [project.id, await getRepoStars(project.github)] as const)
  );
  const starsById = new Map(starEntries);

  return (
    <section className="scroll-mt-20 bg-muted/20 py-20" id="projects">
      <div className="container mx-auto max-w-5xl px-2">
        <SectionHeader
          title="プロジェクト"
          description="これまでに手がけた主なプロジェクトをご紹介します。"
          className="px-2"
        />

        <FeaturedProject project={featured} stars={starsById.get(featured.id)} />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {others.map((project) => (
            <ProjectItem key={project.id} project={project} stars={starsById.get(project.id)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProject({ project, stars }: { project: ProjectType; stars?: number | null }) {
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
          <h3 className="mb-3 text-2xl font-bold">{project.title}</h3>
          {(stars != null || (project.awards && project.awards.length > 0)) && (
            <div className="mb-3 flex flex-wrap gap-x-4 gap-y-1">
              {stars != null && <StarBadge count={stars} />}
              {project.awards?.map((award) => (
                <AwardBadge key={award} award={award} />
              ))}
            </div>
          )}
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

function ProjectItem({ project, stars }: { project: ProjectType; stars?: number | null }) {
  return (
    <div className={cn(cardBaseStyles, "flex flex-col rounded-xl")}>
      <div className="relative h-40 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 320px"
          quality={70}
          className={cn(
            "transition-transform duration-300 group-hover:scale-105",
            project.id === "magnito" ? "object-contain" : "object-cover"
          )}
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1 font-semibold">{project.title}</h3>
        {(stars != null || (project.awards && project.awards.length > 0)) && (
          <div className="mb-2 flex flex-wrap gap-x-3 gap-y-0.5">
            {stars != null && <StarBadge count={stars} compact />}
            {project.awards?.slice(0, 2).map((award) => (
              <AwardBadge key={award} award={award} compact />
            ))}
          </div>
        )}
        <p className="mb-3 flex-1 text-sm text-muted-foreground">{project.description}</p>
        <ProjectLinks github={project.github} demo={project.demo} size="compact" />
      </div>
    </div>
  );
}
