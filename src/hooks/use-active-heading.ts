import { useEffect, useState } from "react";

type HeadingElement = {
  id: string;
  top: number;
};

export const useActiveHeading = (offset: number = 100) => {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const getHeadings = (): HeadingElement[] => {
      const elements = document.querySelectorAll("h2, h3, h4, h5, h6");
      return Array.from(elements).map((element) => ({
        id: element.id,
        top: element.getBoundingClientRect().top + window.scrollY,
      }));
    };

    const updateActiveHeading = () => {
      const headings = getHeadings();
      if (headings.length === 0) return;

      const scrollPosition = window.scrollY + offset;
      let currentHeadingId = headings[0]?.id;

      for (const heading of headings) {
        if (heading.top <= scrollPosition) {
          currentHeadingId = heading.id;
        } else {
          break;
        }
      }

      setActiveId(currentHeadingId ?? "");
    };

    const handleScroll = () => updateActiveHeading();
    const handleResize = () => updateActiveHeading();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    // Initial calculation
    updateActiveHeading();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [offset]);

  return activeId;
};
