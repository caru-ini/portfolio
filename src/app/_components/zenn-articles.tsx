import { Button } from "@/components/ui/button";
import { getZennArticles, ZennArticleItem } from "@/lib/zenn";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ZennArticlesProps {
  feedUrl: string;
}

export const ZennArticles = async ({ feedUrl }: ZennArticlesProps) => {
  const articles: ZennArticleItem[] = await getZennArticles(feedUrl);

  if (!articles.length) {
    return <p>記事を取得できませんでした。</p>;
  }

  return (
    <section className="py-20" id="zenn-articles">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-center text-3xl font-bold">最新の記事</h2>
          <p className="inline-flex items-center gap-0.5 text-muted-foreground">
            <Link
              href="https://zenn.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Image
                src="https://static.zenn.studio/images/logo.png"
                alt="Zenn"
                width={65}
                height={13}
              />
            </Link>
            からの新鮮な記事をお届けします。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.link} article={article} />
          ))}
        </div>

        <div className="mt-8 text-end">
          <Button variant="ghost" className="rounded-full" asChild>
            <Link href="https://zenn.dev/caru" target="_blank" rel="noopener noreferrer">
              さらにみる <ArrowRight className="ml-1 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

function ArticleCard({ article }: { article: ZennArticleItem }) {
  return (
    <Link
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-xl border border-border/50 bg-background transition-all duration-300 hover:border-border hover:ring-1 hover:ring-ring"
    >
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="size-3.5" />
          <time dateTime={article.isoDate}>
            {new Date(article.isoDate).toLocaleDateString("ja-JP")}
          </time>
        </div>
        <h3 className="mb-2 line-clamp-2 font-semibold transition-colors group-hover:text-primary">
          {article.title}
        </h3>
        {article.description && (
          <p className="line-clamp-2 flex-1 text-sm text-muted-foreground">{article.description}</p>
        )}
      </div>
    </Link>
  );
}
