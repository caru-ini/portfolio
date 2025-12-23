import { BlogArticleMeta } from "@/lib/github-blog";
import { Icon } from "@iconify/react";
import Link from "next/link";

export const BlogCard = ({ article }: { article: BlogArticleMeta }) => {
  const formattedDate = Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(article.date));

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border/50 bg-background transition-all duration-300 hover:border-border hover:ring-1 hover:ring-ring"
    >
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Icon icon="lucide:calendar" className="size-3.5" />
            <time dateTime={formattedDate} className="font-medium">
              {formattedDate}
            </time>
          </div>
          {article.readingTime && (
            <div className="flex items-center gap-1.5">
              <Icon icon="lucide:clock" className="size-3.5" />
              <span className="font-medium">{article.readingTime}</span>
            </div>
          )}
        </div>

        <h3 className="mb-2 line-clamp-2 font-semibold transition-colors group-hover:text-primary">
          {article.title}
        </h3>

        {article.description && (
          <p className="mb-3 line-clamp-2 flex-1 text-sm text-muted-foreground">
            {article.description}
          </p>
        )}

        {article.tags && article.tags.length > 0 && (
          <div className="mt-auto flex flex-wrap items-center gap-2">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
              >
                {tag}
              </span>
            ))}
            {article.tags.length > 3 && (
              <span className="text-xs font-medium text-muted-foreground">
                +{article.tags.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
};
