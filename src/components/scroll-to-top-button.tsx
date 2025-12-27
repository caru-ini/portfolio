"use client";

import { Button } from "@/components/ui/button";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";

export const ScrollToTopButton = () => {
  const isScrolled = useScrollHeader();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      variant="outline"
      size="icon"
      className={cn(
        "fixed bottom-6 right-6 z-50 size-12 rounded-full bg-white/80 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/90",
        isScrolled ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
      aria-label="ページの上部に戻る"
    >
      <ChevronUp className="size-5" />
    </Button>
  );
};
