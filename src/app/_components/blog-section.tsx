import { BlogCard } from "@/app/blog/_components/blog-card";
import { Button } from "@/components/ui/button";
import { env } from "@/env";
import { BLOG_CONFIG } from "@/lib/config";
import { getArticlesList } from "@/lib/github-blog";
import { ArrowRight, NotebookPen } from "lucide-react";
import Link from "next/link";

export const BlogSection = async () => {
  const articles = await getArticlesList({
    owner: BLOG_CONFIG.OWNER,
    repo: BLOG_CONFIG.REPO,
    githubToken: env.GITHUB_TOKEN,
  });

  const recentArticles = articles.slice(0, 3);

  return (
    <section className="py-20" id="blog">
      <div className="container mx-auto flex max-w-5xl flex-col items-center px-4">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block">
            <div className="rounded-2xl bg-primary/10 p-3 backdrop-blur-sm">
              <NotebookPen className="size-6 text-primary" />
            </div>
          </div>
          <h2 className="mb-4 text-center text-3xl font-bold">最新のブログ記事</h2>
          <p className="text-muted-foreground">技術的な学びや日々の気づきを記録しています。</p>
        </div>

        {recentArticles.length === 0 ? (
          <div className="py-20 text-center">
            <h3 className="mb-3 text-2xl font-semibold">記事がまだありません</h3>
            <p className="text-lg text-muted-foreground">最初の記事をお楽しみに！</p>
          </div>
        ) : (
          <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentArticles.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
          </div>
        )}

        {articles.length > 3 && (
          <div className="ml-auto mt-8 inline-block w-full text-end">
            <Button variant={"ghost"} className="rounded-full" asChild>
              <Link href="/blog">
                すべての記事をみる <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
