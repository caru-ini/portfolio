import { SectionHeader } from "@/app/_components/section-header";
import { BlogCard } from "@/app/blog/_components/blog-card";
import { Button } from "@/components/ui/button";
import { env } from "@/env";
import { BLOG_CONFIG } from "@/lib/config";
import { getArticlesList } from "@/lib/github-blog";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const BlogSection = async () => {
  const articles = await getArticlesList({
    owner: BLOG_CONFIG.OWNER,
    repo: BLOG_CONFIG.REPO,
    githubToken: env.GITHUB_TOKEN,
  });

  const recentArticles = articles.slice(0, 3);

  return (
    <section className="scroll-mt-20 bg-muted/20 py-20" id="blog">
      <div className="container mx-auto max-w-5xl px-2">
        <SectionHeader
          title="最新のブログ記事"
          description="技術的な学びや日々の気づきを記録しています。"
          className="px-2"
        />

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
