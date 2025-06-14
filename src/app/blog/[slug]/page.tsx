import { ArticleHeader } from "@/app/blog/[slug]/_components/article-header";
import { ArticleToc } from "@/app/blog/[slug]/_components/article-toc";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { env } from "@/env";
import { BLOG_CONFIG } from "@/lib/config";
import { getArticle } from "@/lib/github-blog";
import { extractTocFromMarkdown, getPageMeta, markdownToHtml } from "@/lib/markdown";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import "./shiki.css";

type Props = {
  params: Promise<{ slug: string }>;
};

const getCachedArticle = cache(async (slug: string) => {
  return await getArticle({
    owner: BLOG_CONFIG.OWNER,
    repo: BLOG_CONFIG.REPO,
    slug,
    githubToken: env.GITHUB_TOKEN,
  });
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const article = await getCachedArticle(slug);
    return getPageMeta(article);
  } catch {
    return {
      title: "記事が見つかりません",
    };
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

  let article;
  try {
    article = await getCachedArticle(slug);
  } catch {
    notFound();
  }

  const htmlContent = await markdownToHtml(article.content, {
    owner: BLOG_CONFIG.OWNER,
    repo: BLOG_CONFIG.REPO,
  });
  const toc = extractTocFromMarkdown(article.content);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: {
      "@type": "Person",
      name: "Caru",
    },
    keywords: article.tags?.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="flex flex-1 flex-col">
        <Header />

        <ArticleHeader article={article} />

        <article className="relative flex-1 py-6 md:py-12">
          <div className="container mx-auto px-4">
            {toc.length > 0 ? (
              <div className="flex justify-center gap-8">
                <div className="hidden w-64 lg:block" />
                <main className="max-w-2xl">
                  <div
                    className="prose prose-gray dark:prose-invert md:prose-lg"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                  />
                </main>

                <aside className="hidden lg:block">
                  <ArticleToc toc={toc} />
                </aside>
              </div>
            ) : (
              <main className="mx-auto max-w-2xl">
                <div
                  className="prose prose-gray dark:prose-invert md:prose-lg"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
              </main>
            )}
          </div>
        </article>
        <Footer />
      </main>
    </>
  );
}
