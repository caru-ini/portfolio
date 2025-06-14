"use client";

import { cn } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";

interface ArticleTocItem {
  id: string;
  text: string;
  level: number;
}

export const ArticleToc = ({ toc }: { toc: ArticleTocItem[] }) => {
  const [activeId, setActiveId] = useState<string>("");

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveId(entry.target.id);
      }
    });
  }, []);

  const handleClick = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "-10% 0% -90% 0%",
      threshold: 0,
    });

    const headings = document.querySelectorAll("h1, h2, h3");
    headings.forEach((heading) => {
      if (heading.id) {
        observer.observe(heading);
      }
    });

    return () => {
      headings.forEach((heading) => {
        if (heading.id) {
          observer.unobserve(heading);
        }
      });
    };
  }, [handleIntersection]);

  if (toc.length === 0) {
    return null;
  }

  return (
    <div className="sticky top-24 h-fit">
      <nav className="w-64 rounded-2xl border bg-card/80 p-6 px-4 shadow-lg backdrop-blur-md">
        <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          <div className="size-2 rounded-full bg-primary" />
          目次
        </h2>
        <ul className="max-h-[70vh] space-y-1 overflow-y-auto">
          {toc.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={cn(
                  "group flex w-full items-start gap-3 rounded-lg px-3 py-2 text-left text-sm transition-all duration-200 hover:bg-muted/50",
                  activeId === item.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
                style={{
                  paddingLeft: `${(item.level - 1) * 12 + 12}px`,
                }}
              >
                <div
                  className={cn(
                    "mt-2 size-1.5 rounded-full transition-all duration-200",
                    activeId === item.id
                      ? "bg-primary"
                      : "bg-muted-foreground/40 group-hover:bg-muted-foreground"
                  )}
                />
                <span className="flex-1 truncate leading-relaxed">{item.text}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
