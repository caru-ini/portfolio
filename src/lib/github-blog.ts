import { graphql } from "@octokit/graphql";
import matter from "gray-matter";
import getReadingTime from "reading-time";

import { unstable_cache as cache } from "next/cache";

const createGraphQLClient = (githubToken: string) => {
  return graphql.defaults({
    headers: {
      authorization: `token ${githubToken}`,
    },
  });
};

export type BlogArticleMeta = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  image?: string;
  readingTime?: string;
};

export type BlogArticle = BlogArticleMeta & {
  content: string;
};

const queryArticlesList = async ({
  owner,
  repo,
  articlesDir = "posts",
  githubToken,
}: {
  owner: string;
  repo: string;
  articlesDir?: string;
  githubToken: string;
}): Promise<BlogArticleMeta[]> => {
  try {
    const graphqlClient = createGraphQLClient(githubToken);

    const { repository } = await graphqlClient<{
      repository: {
        tree: {
          entries: Array<{
            name: string;
            type: string;
            object: {
              text: string;
            };
          }>;
        };
      };
    }>(`
      {
        repository(owner: "${owner}", name: "${repo}") {
          tree: object(expression: "main:${articlesDir}") {
            ... on Tree {
              entries {
                name
                type
                object {
                  ... on Blob {
                    text
                  }
                }
              }
            }
          }
        }
      }
    `);

    if (!repository?.tree?.entries) {
      console.warn(`No articles found in ${owner}/${repo}/${articlesDir}`);
      return [];
    }

    const articles = repository.tree.entries
      .filter((entry) => entry.type === "blob" && entry.name.endsWith(".md"))
      .map((entry) => {
        const slug = entry.name.replace(/\.md$/, "");
        const { data, content: mdContent } = matter(entry.object.text);
        return {
          slug,
          title: data.title ?? slug,
          date: data.date ?? "",
          tags: data.tags ?? [],
          description: data.description ?? "",
          image: data.image ?? undefined,
          readingTime: mdContent ? getReadingTime(mdContent).text : undefined,
        } satisfies BlogArticleMeta;
      });

    return articles.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error(`Error fetching articles from ${owner}/${repo}:`, error);
    return [];
  }
};

const queryArticle = async ({
  owner,
  repo,
  slug,
  articlesDir = "posts",
  githubToken,
}: {
  owner: string;
  repo: string;
  slug: string;
  articlesDir?: string;
  githubToken: string;
}) => {
  try {
    const graphqlClient = createGraphQLClient(githubToken);

    const { repository } = await graphqlClient<{
      repository: {
        content: {
          text: string;
        };
      };
    }>(`
      {
        repository(owner: "${owner}", name: "${repo}") {
          content:object(expression: "main:${articlesDir}/${slug}.md") {
            ... on Blob {
              text
            }
          }
        }
      }
    `);

    if (!repository?.content?.text) {
      throw new Error(`Article not found: ${slug}`);
    }

    return repository.content.text;
  } catch (error) {
    console.error(`Error fetching article ${slug} from ${owner}/${repo}:`, error);
    throw error;
  }
};

export const getArticlesList = async ({
  owner,
  repo,
  articlesDir = "posts",
  bypassCache = false,
  githubToken,
}: {
  owner: string;
  repo: string;
  articlesDir?: string;
  bypassCache?: boolean;
  githubToken: string;
}): Promise<BlogArticleMeta[]> => {
  /**
   * @description Get the list of articles from the GitHub repository. Cached by default.
   */

  const getCachedArticlesList = bypassCache
    ? queryArticlesList
    : cache(queryArticlesList, [`${owner}-${repo}-${articlesDir}`], {
        tags: ["posts"],
      });

  return (
    await getCachedArticlesList({
      owner,
      repo,
      articlesDir,
      githubToken,
    })
  ).filter((article) => !article.slug.startsWith("_"));
};

export const getArticle = async ({
  owner,
  repo,
  slug,
  articlesDir = "posts",
  githubToken,
  bypassCache = false,
}: {
  owner: string;
  repo: string;
  slug: string;
  articlesDir?: string;
  githubToken: string;
  bypassCache?: boolean;
}): Promise<BlogArticle> => {
  /**
   * @description Get the article from the GitHub repository.
   */
  const getCachedFileContent = bypassCache
    ? queryArticle
    : cache(queryArticle, [slug], { tags: ["posts"] });

  const content = await getCachedFileContent({
    owner,
    repo,
    slug,
    articlesDir,
    githubToken,
  });

  const { data, content: mdContent } = matter(content);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    tags: data.tags ?? [],
    description: data.description ?? "",
    image: data.image ?? undefined,
    content: mdContent,
    readingTime: mdContent ? getReadingTime(mdContent).text : undefined,
  } satisfies BlogArticle;
};

export const getArticleImageUrl = ({
  owner,
  repo,
  slug,
  imagePath,
  branch = "main",
}: {
  owner: string;
  repo: string;
  slug: string;
  imagePath: string;
  branch?: string;
}): string => {
  /**
   * @description Get the image URL from the GitHub repository.
   */
  return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/images/${slug}/${imagePath}`;
};
