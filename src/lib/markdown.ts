import { BlogArticle } from "@/lib/github-blog";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import { transformerNotationDiff } from "@shikijs/transformers";
import { Metadata } from "next";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export const getPageMeta = async (article: BlogArticle): Promise<Metadata> => ({
  /**
   * @description Get Next.js metadata for the article page
   */
  title: article.title,
  description: article.description || `${article.title}について`,
  openGraph: {
    title: article.title,
    description: article.description || `${article.title}について`,
    type: "article",
    publishedTime: article.date,
    tags: article.tags,
  },
  twitter: {
    card: "summary_large_image",
    title: article.title,
    description: article.description || `${article.title}について`,
  },
});

const processUrlLines = (content: string): string => {
  /**
   * @description Process URL lines and convert them to linkcard iframe
   */
  return content.replace(
    /^(https?:\/\/[^\s]+)$/gm,
    '<iframe src="/embed?url=$1" class="w-full" frameborder="0" style="margin: 16px 0;"></iframe>'
  );
};

const processCodeBlockTitle = (content: string): string => {
  /**
   * @description Convert ```{language}:{title} to ```{language} title="{title}"
   */
  return content.replace(/^```(\w+):([^ ]+)$/gm, '```$1 title="$2"');
};

const processImagePaths = (content: string, owner: string, repo: string): string => {
  /**
   * @description Convert relative image paths to use the image proxy API
   * Only processes relative paths (./path) and absolute paths that don't start with http(s)
   */
  return content
    .replace(/!\[([^\]]*)\]\(\.\/([^)]+)\)/g, `![$1](/api/images/${owner}/${repo}/$2)`)
    .replace(/!\[([^\]]*)\]\(\/(?!\/|https?:)([^)]+)\)/g, `![$1](/api/images/${owner}/${repo}/$2)`);
};

const createSlug = (text: string, usedSlugs: Set<string>): string => {
  /**
   * @description Create a slug from text (Japanese, English, and numbers)
   */
  let slug = text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF\u0400-\u04FF-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");

  if (!slug) {
    slug = "heading";
  }

  let uniqueSlug = slug;
  let counter = 1;
  while (usedSlugs.has(uniqueSlug)) {
    uniqueSlug = `${slug}-${counter}`;
    counter++;
  }

  usedSlugs.add(uniqueSlug);
  return uniqueSlug;
};

export const extractTocFromMarkdown = (markdown: string): TocItem[] => {
  /**
   * @description Extract table of contents from markdown
   */
  const lines = markdown.split("\n");
  const toc: TocItem[] = [];
  const usedSlugs = new Set<string>();

  for (const line of lines) {
    const match = line.match(/^(#{1,3})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      if (level > 3) {
        continue;
      }
      const text = match[2].trim();
      const id = createSlug(text, usedSlugs);

      toc.push({ id, text, level });
    }
  }

  return toc;
};

export const markdownToHtml = async (
  markdown: string,
  options?: {
    owner?: string;
    repo?: string;
  }
): Promise<string> => {
  let processedMarkdown = processUrlLines(processCodeBlockTitle(markdown));

  // Process image paths if repository info is provided
  if (options?.owner && options?.repo) {
    processedMarkdown = processImagePaths(processedMarkdown, options.owner, options.repo);
  }

  const result = await unified()
    .use(remarkParse, { fragment: true })
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeAutoLinkHeadings, {
      behavior: "wrap",
      properties: {
        className: ["anchor-link"],
        ariaLabel: "Link to heading",
      },
    })
    .use(rehypePrettyCode, {
      theme: "material-theme-ocean",
      transformers: [transformerNotationDiff(), transformerCopyButton()],
    })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(processedMarkdown);

  return String(result);
};
