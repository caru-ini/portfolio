import { useCallback } from "react";

export const useSmoothScroll = (offset: number = 100) => {
  const scrollToElement = useCallback(
    (elementId: string) => {
      const element = document.getElementById(elementId);
      if (!element) return;

      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    },
    [offset]
  );

  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      scrollToElement(id);
    },
    [scrollToElement]
  );

  return { scrollToElement, handleAnchorClick };
};
