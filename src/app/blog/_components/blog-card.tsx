import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BlogArticleMeta } from "@/lib/github-blog";
import { Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";

export const BlogCard = ({ article }: { article: BlogArticleMeta }) => {
  const formattedDate = Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(article.date));

  return (
    <Link href={`/blog/${article.slug}`} className="group w-full">
      <Card className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-border hover:bg-card/80 hover:shadow-xl">
        <CardHeader className="pb-4">
          <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="size-3.5" />
              <time dateTime={formattedDate} className="font-medium">
                {formattedDate}
              </time>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="size-3.5" />
              <span className="font-medium">{article.readingTime}</span>
            </div>
          </div>

          <CardTitle className="line-clamp-2 text-xl leading-tight transition-colors group-hover:text-primary md:text-2xl">
            {article.title}
          </CardTitle>

          {article.description && (
            <CardDescription className="line-clamp-2 text-base leading-relaxed">
              {article.description}
            </CardDescription>
          )}
        </CardHeader>

        {article.tags && article.tags.length > 0 && (
          <CardContent className="pt-0">
            <div className="flex flex-wrap items-center gap-2">
              <Tag className="size-3.5 text-muted-foreground" />
              {article.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors group-hover:bg-primary/15"
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
          </CardContent>
        )}
      </Card>
    </Link>
  );
};
