import { type PropsWithChildren } from "react";
import { motion } from "framer-motion";

type Props = {
  className?: string;
  duration?: number;
  delay?: number;
} & PropsWithChildren;

export function FadeInUpAtom({
  className,
  children,
  duration = 2,
  delay = 0,
}: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, transform: "translate3d(0, 100%, 0)" }}
      whileInView={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
      transition={{ ease: "linear", duration, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
