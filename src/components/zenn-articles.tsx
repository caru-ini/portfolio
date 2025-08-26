import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
      <div className="container mx-auto px-4">
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
        <div className="mx-auto flex max-w-4xl flex-col gap-4">
          {articles.map((article) => (
            <Link href={article.link} target="_blank" rel="noopener noreferrer" key={article.link}>
              <Card className="transition-all duration-300 hover:ring-1 hover:ring-ring">
                <CardHeader>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Calendar className="size-4" />
                    {new Date(article.isoDate).toLocaleDateString("ja-JP")}
                  </CardDescription>
                </CardHeader>
                <CardContent>{article.description}</CardContent>
              </Card>
            </Link>
          ))}
          <div className="ml-auto mt-3 inline-block w-full text-end">
            <Button variant={"ghost"} className="rounded-full" asChild>
              <Link href="https://zenn.dev/caru" target="_blank" rel="noopener noreferrer">
                さらにみる <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
