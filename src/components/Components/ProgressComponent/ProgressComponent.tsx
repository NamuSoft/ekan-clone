import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import styles from "./ProgressComponent.module.css";

export function ProgressComponent() {
  const [pathLength, setPathLength] = useState(1);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  const { scrollYProgress } = useScroll();
  const strokeDashoffset = useTransform(
    scrollYProgress,
    [0, 1],
    [pathLength, 0]
  );
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const visibility = useTransform(
    scrollYProgress,
    [0, 1],
    ["hidden", "visible"]
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className={styles.progress}
      style={{ opacity, visibility }}
      onClick={scrollToTop}
    >
      <svg
        width='44'
        height='44'
        viewBox='0 0 44 44'
        xmlns='http://www.w3.org/2000/svg'
      >
        <motion.path
          ref={pathRef}
          d='M22,2 a20,20 0 1,1 0,40 a20,20 0 1,1 0,-40'
          fill='transparent'
          className='stroke-[--text]'
          strokeWidth={2}
          strokeDasharray={pathLength}
          style={{ strokeDashoffset }}
        />
      </svg>
    </motion.div>
  );
}
