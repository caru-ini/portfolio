import { env } from "@/env";
import { BLOG_CONFIG } from "@/lib/config";
import { getArticlesList } from "@/lib/github-blog";
import { Feed } from "feed";

export const dynamic = "force-static";
export const revalidate = 3600; // Revalidate every hour

export async function GET() {
  const articles = await getArticlesList({
    owner: BLOG_CONFIG.OWNER,
    repo: BLOG_CONFIG.REPO,
    articlesDir: BLOG_CONFIG.ARTICLES_DIR,
    githubToken: env.GITHUB_TOKEN,
  });

  const feed = new Feed({
    title: BLOG_CONFIG.SITE_TITLE,
    description: BLOG_CONFIG.SITE_DESCRIPTION,
    id: `${BLOG_CONFIG.SITE_URL}/blog`,
    link: `${BLOG_CONFIG.SITE_URL}/blog`,
    language: "ja",
    favicon: `${BLOG_CONFIG.SITE_URL}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Caru`,
    feedLinks: {
      rss2: `${BLOG_CONFIG.SITE_URL}/blog/rss.xml`,
      atom: `${BLOG_CONFIG.SITE_URL}/blog/atom.xml`,
      json: `${BLOG_CONFIG.SITE_URL}/blog/feed.json`,
    },
    author: {
      name: "Caru",
      link: BLOG_CONFIG.SITE_URL,
    },
  });

  articles.forEach((article) => {
    const articleUrl = `${BLOG_CONFIG.SITE_URL}/blog/${article.slug}`;
    feed.addItem({
      title: article.title,
      id: articleUrl,
      link: articleUrl,
      description: article.description || "",
      date: article.date ? new Date(article.date) : new Date(),
      category: article.tags?.map((tag) => ({ name: tag })),
    });
  });

  return new Response(feed.json1(), {
    headers: {
      "Content-Type": "application/feed+json; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
