import { useEffect, useRef } from "react";

import "./custom.css";

export function CustomCursorComponent() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cursorRef.current == null || cursorRef == null) return;

    // Mousemove event to update cursor position
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current == null) return;
      cursorRef.current.setAttribute(
        "style",
        "top: " + e.clientY + "px; left: " + e.clientX + "px;"
      );
    };

    // Mouseover event to add expand class if cursor is pointer
    const handleMouseOver = (e: MouseEvent) => {
      if (cursorRef.current == null) return;

      // Check if the current cursor style is pointer
      if (getComputedStyle(e.target as Element).cursor === "pointer") {
        cursorRef.current.classList.add("expandCustomCursor");
        setTimeout(() => {
          if (cursorRef.current == null) return;
          cursorRef.current.classList.remove("expandCustomCursor");
        }, 500);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return <div className='customCursor' ref={cursorRef} />;
}
