import { AboutAuthor } from "@/app/blog/[slug]/_components/about-author";
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
  if (slug.startsWith("_")) {
    notFound();
  }
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

        <article className="relative flex-1 py-4 md:py-6 lg:py-12">
          <div className="container mx-auto px-4">
            {toc.length > 0 ? (
              <>
                {/* Mobile TOC (上部折りたたみ式) */}
                <div className="mx-auto mb-6 max-w-2xl lg:hidden">
                  <ArticleToc toc={toc} isMobile={true} />
                </div>

                {/* Desktop layout with sidebar TOC */}
                <div className="hidden lg:flex lg:justify-center lg:gap-8">
                  <div className="w-64" />
                  <main className="max-w-2xl">
                    <div
                      className="prose prose-gray dark:prose-invert md:prose-lg prose-headings:tracking-tight prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-p:leading-relaxed prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-pre:bg-muted/50 prose-pre:backdrop-blur-sm prose-li:leading-relaxed prose-img:rounded-lg prose-img:object-contain"
                      dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />
                    <AboutAuthor />
                  </main>

                  <aside>
                    <ArticleToc toc={toc} isMobile={false} />
                  </aside>
                </div>

                {/* Mobile content */}
                <main className="mx-auto max-w-2xl lg:hidden">
                  <div
                    className="prose prose-sm prose-gray dark:prose-invert sm:prose-base prose-headings:tracking-tight prose-h1:text-xl prose-h2:text-lg prose-h3:text-base prose-p:leading-relaxed prose-code:rounded prose-code:px-1 prose-code:py-0.5 prose-pre:overflow-x-auto prose-pre:bg-muted/50 prose-pre:backdrop-blur-sm prose-li:leading-relaxed prose-img:rounded-lg prose-img:object-contain sm:prose-h1:text-2xl sm:prose-h2:text-xl sm:prose-h3:text-lg sm:prose-code:px-1.5"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                  />
                  <AboutAuthor />
                </main>
              </>
            ) : (
              <main className="mx-auto max-w-2xl">
                <div
                  className="prose prose-sm prose-gray dark:prose-invert sm:prose-base md:prose-lg prose-headings:tracking-tight prose-h1:text-xl prose-h2:text-lg prose-h3:text-base prose-p:leading-relaxed prose-code:rounded prose-code:px-1 prose-code:py-0.5 prose-pre:overflow-x-auto prose-pre:bg-muted/50 prose-pre:backdrop-blur-sm prose-li:leading-relaxed prose-img:rounded-lg prose-img:object-contain sm:prose-h1:text-2xl sm:prose-h2:text-xl sm:prose-h3:text-lg sm:prose-code:px-1.5"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
                <AboutAuthor />
              </main>
            )}
          </div>
        </article>
        <Footer />
      </main>
    </>
  );
}
