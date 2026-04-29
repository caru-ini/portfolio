import { cn } from "@/lib/utils";
import {
  Briefcase,
  Code2,
  ExternalLink,
  Flag,
  GraduationCap,
  LogOut,
  Mic,
  Trophy,
  Users,
} from "lucide-react";
import Link from "next/link";

type Variant = "primary" | "amber" | "pink" | "muted";

type HistoryItem = {
  date: string;
  icon: React.ComponentType<{ className?: string }>;
  variant?: Variant;
  title: string;
  description?: string;
  link?: { href: string; label: string };
};

const items: HistoryItem[] = [
  {
    date: "2020",
    icon: Flag,
    variant: "amber",
    title: "14歳から独学でプログラミングをはじめる",
    description: "最初の言語は Python。",
  },
  {
    date: "2021",
    icon: Code2,
    variant: "pink",
    title: "高校時代はプログラミングに没頭する",
    description: "LangChainやDiscord.py、Web開発を中心に",
  },
  {
    date: "2024.4",
    icon: Users,
    title: "大学入学後、プログラミングサークル INIAD.ts に加入",
    description: "TypeScript専門のプログラミングサークル",
  },
  {
    date: "2024.5",
    icon: Mic,
    title: "貢献したOSS(Magnito)の解説を技術イベントで登壇し発表",
    link: {
      href: "https://zenn.dev/caru/articles/0e063d368484ce",
      label: "参考記事",
    },
  },
  {
    date: "2024.10",
    icon: Trophy,
    title: "技育CAMPハッカソン 努力賞",
    description: "AI早押しクイズ - AIがテーマに沿った問題を生成し出題するアプリ",
  },
  {
    date: "2024.12",
    icon: Trophy,
    title: "技育CAMPハッカソン 努力賞",
    description: "Yoncomic Studio - 画像生成AIを活用した漫画作成アプリ",
  },
  {
    date: "2025.4",
    icon: Trophy,
    title: "技育CAMPハッカソン 優秀賞",
    description: "Clothify - 画像生成AIを活用した、服を着ずに試着できるアプリ",
  },
  {
    date: "2025.5",
    icon: Trophy,
    title: "技育博 企業賞を2つ受賞 (DeNA賞 / CARTA賞)",
    description: "Clothify - 画像生成AIを活用した、服を着ずに試着できるアプリ",
  },
  {
    date: "2025.6",
    icon: GraduationCap,
    variant: "amber",
    title: "情報連携学部 2024年度 学業成績最優秀者に選出",
    link: {
      href: "https://www.iniad.org/blog/2025/06/25/post-3300/",
      label: "INIAD 公式ブログ",
    },
  },
  {
    date: "2026.2",
    icon: Briefcase,
    title: "株式会社ブルーメンヘラ 入社 (インターン)",
  },
  {
    date: "2026.3",
    icon: Briefcase,
    title: "株式会社アライア 入社 (インターン)",
  },
  {
    date: "2026.4",
    icon: LogOut,
    variant: "muted",
    title: "株式会社ブルーメンヘラ 契約終了",
  },
];

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground",
  amber: "bg-amber-500 text-white dark:bg-amber-400 dark:text-amber-950",
  pink: "bg-brandPink text-primary-foreground",
  muted: "bg-muted text-muted-foreground",
};

export function HistorySection() {
  return (
    <section className="bg-muted/20 py-20" id="history">
      <div className="container mx-auto max-w-5xl px-2">
        <div className="mb-8 max-w-2xl px-2 sm:mb-12">
          <h2 className="mb-4 inline-flex rounded-sm py-2 text-3xl font-bold sm:text-4xl">経歴</h2>
          <p className="leading-7 text-muted-foreground">
            プログラミングをはじめてから、現在に至るまでの歩み。
          </p>
        </div>

        <ol className="relative rounded-2xl border border-border/70 bg-background p-4 sm:p-6">
          <span
            aria-hidden
            className="absolute bottom-6 left-[calc(1rem+3.5rem+0.75rem+0.875rem)] top-6 w-px bg-border sm:left-[calc(1.5rem+4.5rem+1rem+0.875rem)]"
          />
          {items.map((item, idx) => {
            const Icon = item.icon;
            const variant = item.variant ?? "primary";
            return (
              <li
                key={`${item.date}-${idx}`}
                className="relative flex items-start gap-3 py-2 sm:gap-4 sm:py-2.5"
              >
                <span className="w-14 shrink-0 pt-1 text-right font-mono text-xs tabular-nums text-muted-foreground sm:w-[4.5rem] sm:text-sm">
                  {item.date}
                </span>
                <span
                  className={cn(
                    "relative z-10 mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full",
                    variantClasses[variant]
                  )}
                  aria-hidden
                >
                  <Icon className="size-3.5" />
                </span>
                <div className="min-w-0 pt-0.5">
                  <h3 className="text-sm font-semibold leading-snug sm:text-base">{item.title}</h3>
                  {item.description && (
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      {item.description}
                    </p>
                  )}
                  {item.link && (
                    <Link
                      href={item.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-xs text-primary underline-offset-4 hover:underline sm:text-sm"
                    >
                      {item.link.label}
                      <ExternalLink className="size-3" aria-hidden />
                    </Link>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
