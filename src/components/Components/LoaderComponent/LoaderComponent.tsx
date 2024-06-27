import { motion } from "framer-motion";

import styles from "./LoaderComponent.module.css";

export function LoaderComponent() {
  return (
    <motion.div
      className='fixed inset-0 z-[9999] my-auto flex h-[100vh] items-center justify-center bg-[--background2]'
      initial={{ translateY: 0 }}
      animate={{ translateY: -10000 }}
      exit={{ translateY: 0 }}
      transition={{ duration: 2, ease: "easeInOut", delay: 2.5 }}
    >
      <motion.div
        className={styles.text}
        initial={{ translateY: 0, opacity: 1 }}
        animate={{ translateY: -100, opacity: 0 }}
        exit={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
      >
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </motion.div>
    </motion.div>
  );
}
