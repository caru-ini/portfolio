import { BlogCard } from "@/app/blog/_components/blog-card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { env } from "@/env";
import { BLOG_CONFIG } from "@/lib/config";
import { getArticlesList } from "@/lib/github-blog";
import { Newspaper } from "lucide-react";

export default async function BlogListPage() {
  const articles = await getArticlesList({
    owner: BLOG_CONFIG.OWNER,
    repo: BLOG_CONFIG.REPO,
    githubToken: env.GITHUB_TOKEN,
  });

  return (
    <main className="flex flex-1 flex-col">
      <Header />

      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-background via-muted/20 to-primary/5 pb-10 pt-24 md:pb-20">
        <div className="container mx-auto max-w-2xl px-4">
          <div className="space-y-4">
            <div className="inline-block">
              <div className="rounded-2xl bg-primary/10 p-4 backdrop-blur-sm">
                <Newspaper className="size-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">Blog</h1>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
              技術的な学びや日々の気づきを記録しています。
            </p>
          </div>
        </div>

        <div className="absolute -left-10 top-1/2 size-24 rounded-full bg-primary/5 blur-xl" />
        <div className="absolute -right-10 top-1/3 size-32 rounded-full bg-primary/5 blur-xl" />
      </section>

      <section className="flex-1 py-8 md:py-12">
        <div className="container mx-auto max-w-2xl px-4">
          {articles.length === 0 ? (
            <div className="py-20 text-center">
              <div className="mb-6 inline-block rounded-2xl bg-muted/50 p-6 backdrop-blur-sm">
                <span className="text-5xl">📝</span>
              </div>
              <h3 className="mb-3 text-2xl font-semibold">記事がまだありません</h3>
              <p className="text-lg text-muted-foreground">最初の記事をお楽しみに！</p>
            </div>
          ) : (
            <div className="space-y-6">
              {articles.map((article) => (
                <BlogCard key={article.slug} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
