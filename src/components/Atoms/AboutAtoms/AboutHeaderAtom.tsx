import { motion } from "framer-motion";

export function AboutHeaderAtom() {
  return (
    <motion.div
      className='flow self-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "linear", delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h6 className='uppercase tracking-wide opacity-70'>Our Skills</h6>
      <h3>
        <span className='text-[--primary]'>Awards</span> &amp; Recognitions
      </h3>
    </motion.div>
  );
}
