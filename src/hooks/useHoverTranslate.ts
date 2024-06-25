import { useRef, useEffect, useCallback } from "react";

export const useHoverTranslate = () => {
  const ref = useRef<HTMLSpanElement>(null);

  const getRandomTranslation = useCallback((): number => {
    return Math.random() * (15 - 7) + 7;
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (ref.current) {
        const { top, left, height, width } =
          ref.current.getBoundingClientRect();
        const mouseY = event.clientY - top;
        const mouseX = event.clientX - left;

        const translateY =
          mouseY < height / 2
            ? -getRandomTranslation()
            : getRandomTranslation();
        const translateX =
          mouseX < width / 2 ? -getRandomTranslation() : getRandomTranslation();

        ref.current.style.transform = `translate(${translateX}px, ${translateY}px)`;
      }
    };

    const handleMouseLeave = () => {
      if (ref.current) {
        ref.current.style.transform = "translate(0, 0)";
      }
    };

    const element = ref.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);
    }

    // Cleanup function to remove event listeners
    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [getRandomTranslation]);

  return { ref };
};
