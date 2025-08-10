import { BlogArticle } from "@/lib/github-blog";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import { transformerNotationDiff } from "@shikijs/transformers";
import type { Heading } from "mdast";
import { Metadata } from "next";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { visit } from "unist-util-visit";

export type TocItem = {
  url: string;
  depth: number;
  value: string;
};

type MarkdownProcessingOptions = {
  owner?: string;
  repo?: string;
};

type MarkdownProcessingResult = {
  html: string;
  toc: TocItem[];
};

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

/**
 * Process URL lines and convert them to linkcard iframe
 */
const processUrlLines = (content: string): string => {
  return content.replace(
    /^(https?:\/\/[^\s]+)$/gm,
    '<iframe src="/embed?url=$1" class="w-full" frameborder="0" style="margin: 16px 0;"></iframe>'
  );
};

/**
 * Convert ```{language}:{title} to ```{language} title="{title}"
 */
const processCodeBlockTitle = (content: string): string => {
  return content.replace(/^```(\w+):([^ ]+)$/gm, '```$1 title="$2"');
};

/**
 * Convert relative image paths to use the image proxy API
 * Only processes relative paths (./path) and absolute paths that don't start with http(s)
 * Also adds loading and styling attributes for better image handling
 */
const processImagePaths = (content: string, owner: string, repo: string): string => {
  if (!owner || !repo) {
    throw new Error("Owner and repo are required for image processing");
  }

  return content
    .replace(/!\[([^\]]*)\]\(\.\/([^)]+)\)/g, `![$1](/api/images/${owner}/${repo}/$2)`)
    .replace(/!\[([^\]]*)\]\(\/(?!\/|https?:)([^)]+)\)/g, `![$1](/api/images/${owner}/${repo}/$2)`)
    .replace(
      /!\[([^\]]*)\]\(([^)]+)\)/g,
      '<img src="$2" alt="$1" loading="lazy" style="max-height: min(80vh, 600px); object-fit: contain; width: 100%; height: auto;" onclick="window.open(this.src, \'_blank\')" />'
    );
};

/**
 * Create a slug from text (Japanese, English, and numbers)
 */
const createSlug = (text: string): string => {
  if (!text || typeof text !== "string") {
    return "heading";
  }

  const slugValue = text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF\u0400-\u04FF-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slugValue || "heading";
};

export const markdownToHtml = async (
  markdown: string,
  options?: MarkdownProcessingOptions
): Promise<MarkdownProcessingResult> => {
  let processedMarkdown = processUrlLines(processCodeBlockTitle(markdown));
  const toc: TocItem[] = [];

  // Process image paths if repository info is provided
  if (options?.owner && options?.repo) {
    processedMarkdown = processImagePaths(processedMarkdown, options.owner, options.repo);
  }

  const result = await unified()
    .use(remarkParse, { fragment: true })
    .use(remarkGfm)
    .use(() => (tree) => {
      visit(tree, "heading", (node: Heading) => {
        if (node.children[0]?.type === "text") {
          const value = node.children[0].value;
          toc.push({ value, depth: node.depth, url: `#${createSlug(value)}` });
        }
      });
    })
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

  return { html: String(result), toc };
};
