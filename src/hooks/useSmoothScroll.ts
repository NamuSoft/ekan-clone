import { useEffect, useRef } from "react";

export const useSmoothScrollNav = () => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      event.preventDefault();

      const target = event.currentTarget as HTMLAnchorElement;
      const targetIndex = target.getAttribute("data-scroll-nav");
      if (!targetIndex) return;

      const targetElement = document.querySelector(
        `[data-scroll-index="${targetIndex}"]`
      );
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    const navElement = navRef.current;
    if (!navElement) return;

    const links =
      navElement.querySelectorAll<HTMLAnchorElement>("a[data-scroll-nav]");
    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return { navRef };
};
