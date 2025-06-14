import { BlogArticleMeta } from "@/lib/github-blog";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";

export const ArticleHeader = ({ article }: { article: BlogArticleMeta }) => {
  const formattedDate = Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(article.date));

  return (
    <section className="relative overflow-hidden border-b bg-gradient-to-br from-background via-muted/20 to-primary/5 py-4 pt-24 md:py-8 md:pt-32">
      <div className="container mx-auto max-w-2xl px-4">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:-translate-x-1 hover:text-primary"
        >
          <ArrowLeft className="size-4" />
          ブログ一覧に戻る
        </Link>

        <header className="space-y-3">
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 rounded-xl bg-card/50 p-2 pl-0 text-sm text-muted-foreground backdrop-blur-sm">
            <div className="flex items-center gap-2 font-medium">
              <Calendar className="size-4" />
              <time dateTime={formattedDate}>{formattedDate}</time>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <Clock className="size-4" />
              <span>{article.readingTime}</span>
            </div>
          </div>

          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-3">
              <Tag className="size-4 text-muted-foreground" />
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm transition-colors hover:bg-primary/15"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
      </div>

      <div className="absolute -left-4 top-1/2 size-24 rounded-full bg-primary/5 blur-xl" />
      <div className="absolute -right-4 top-1/3 size-32 rounded-full bg-primary/5 blur-xl" />
    </section>
  );
};
