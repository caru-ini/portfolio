import { env } from "@/env";
import { BLOG_CONFIG } from "@/lib/config";
import { getArticlesList } from "@/lib/github-blog";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = BLOG_CONFIG.SITE_URL;

  // Get all blog articles
  const articles = await getArticlesList({
    owner: BLOG_CONFIG.OWNER,
    repo: BLOG_CONFIG.REPO,
    articlesDir: BLOG_CONFIG.ARTICLES_DIR,
    githubToken: env.GITHUB_TOKEN,
  });

  // Generate blog post entries
  const blogPosts: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: article.date ? new Date(article.date) : new Date(),
    changeFrequency: "daily",
    priority: 0.7,
  }));

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  return [...staticPages, ...blogPosts];
}
