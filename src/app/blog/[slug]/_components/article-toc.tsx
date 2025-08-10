"use client";

import { useActiveHeading } from "@/hooks/use-active-heading";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { TocItem } from "@/lib/markdown";
import { cn } from "@/lib/utils";

export const ArticleToc = ({ items }: { items: TocItem[] }) => {
  const activeId = useActiveHeading(100);
  const { handleAnchorClick } = useSmoothScroll(100);

  if (!items || items.length === 0) return null;

  return (
    <div className="sticky top-24 hidden w-64 lg:block">
      <div className="rounded-lg border bg-background/95 p-4 shadow-sm backdrop-blur-sm">
        <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
          <div className="size-1 rounded-full bg-primary"></div>
          目次
        </h3>
        <nav className="space-y-1">
          {items.map((heading) => {
            const id = heading.url.slice(1);
            const isActive = activeId === id;

            return (
              <a
                key={heading.url}
                href={heading.url}
                onClick={(e) => handleAnchorClick(e, id)}
                className={cn(
                  "group relative block py-2 text-sm transition-all duration-200 hover:text-foreground",
                  {
                    "border-l-2 border-primary bg-primary/5 pl-3 font-medium text-foreground":
                      isActive,
                    "border-l-2 border-transparent pl-3 text-muted-foreground hover:border-muted-foreground/30 hover:pl-4":
                      !isActive,
                    "pl-6": heading.depth === 3 && !isActive,
                    "pl-7": heading.depth === 3 && isActive,
                    "pl-10": heading.depth === 4 && !isActive,
                    "pl-11": heading.depth === 4 && isActive,
                  }
                )}
              >
                <span className="relative">
                  {heading.value}
                  {isActive && (
                    <div className="absolute -left-3 top-1/2 size-1 -translate-y-1/2 animate-pulse rounded-full bg-primary"></div>
                  )}
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
