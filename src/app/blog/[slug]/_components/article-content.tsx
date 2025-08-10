import { AboutAuthor } from "@/app/blog/[slug]/_components/about-author";
import { ArticleToc } from "@/app/blog/[slug]/_components/article-toc";
import { TocItem } from "@/lib/markdown";
import { cn } from "@/lib/utils";

const proseClasses = {
  base: "prose prose-gray dark:prose-invert prose-headings:tracking-tight prose-p:leading-relaxed prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-pre:bg-muted/50 prose-pre:backdrop-blur-sm prose-li:leading-relaxed prose-img:rounded-lg prose-img:object-contain",
  mobile:
    "prose-sm prose-h1:text-xl prose-h2:text-lg prose-h3:text-base prose-code:px-1 sm:prose-base sm:prose-h1:text-2xl sm:prose-h2:text-xl sm:prose-h3:text-lg sm:prose-code:px-1.5",
  desktop: "md:prose-lg prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg",
  mobileOverrides: "prose-pre:overflow-x-auto",
} as const;

type ArticleContentProps = {
  htmlContent: string;
  toc: TocItem[];
};

export const ArticleContent = ({ htmlContent, toc }: ArticleContentProps) => {
  const hasTableOfContents = toc.length > 0;

  return (
    <>
      {/* Desktop layout */}
      <div className="hidden lg:block">
        <div className="relative mx-auto max-w-6xl">
          <div className="flex gap-8">
            <main className="mx-auto max-w-2xl flex-1">
              <div
                className={cn(proseClasses.base, proseClasses.desktop)}
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
              <AboutAuthor />
            </main>
            {hasTableOfContents && (
              <aside className="relative w-64 shrink-0">
                <ArticleToc items={toc} />
              </aside>
            )}
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <main className="mx-auto max-w-2xl lg:hidden">
        <div
          className={cn(proseClasses.base, proseClasses.mobile, proseClasses.mobileOverrides)}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
        <AboutAuthor />
      </main>
    </>
  );
};
