"use client";

type Props = {
  htmlContent: string;
};

export const Article = ({ htmlContent }: Props) => {
  return (
    <article className="flex-1 py-6 md:py-12">
      <div className="container mx-auto max-w-2xl px-4">
        <div
          className="prose prose-lg prose-gray max-w-none dark:prose-invert prose-headings:tracking-tight prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-code:rounded prose-code:bg-muted/30 prose-code:px-1.5 prose-code:py-0.5 prose-pre:bg-muted/50 prose-pre:backdrop-blur-sm prose-li:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </article>
  );
};
