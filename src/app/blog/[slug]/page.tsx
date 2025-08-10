import { ArticleContent } from "@/app/blog/[slug]/_components/article-content";
import { ArticleHeader } from "@/app/blog/[slug]/_components/article-header";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { env } from "@/env";
import { BLOG_CONFIG } from "@/lib/config";
import { getArticle } from "@/lib/github-blog";
import { getPageMeta, markdownToHtml } from "@/lib/markdown";
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
  if (slug.startsWith("_")) {
    notFound();
  }
  try {
    article = await getCachedArticle(slug);
  } catch {
    notFound();
  }

  const { html: htmlContent, toc } = await markdownToHtml(article.content, {
    owner: BLOG_CONFIG.OWNER,
    repo: BLOG_CONFIG.REPO,
  });

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

        <article className="relative flex-1 py-4 md:py-6 lg:py-12">
          <div className="container mx-auto px-4">
            <ArticleContent htmlContent={htmlContent} toc={toc} />
          </div>
        </article>
        <Footer />
      </main>
    </>
  );
}
