import { motion } from "framer-motion";

export function ServicesHeaderAtom() {
  return (
    <motion.div
      className='mb-20'
      initial={{ opacity: 0, transform: "translate3d(0, 100%, 0)" }}
      whileInView={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
      transition={{ ease: "linear", duration: 2 }}
      viewport={{ once: true }}
    >
      <div className='flex justify-center'>
        <div className='flow px-4 text-center lg:w-1/2'>
          <h6 className='sub-title uppercase tracking-[2px] opacity-70'>
            Our Services
          </h6>
          <h2>
            Turn Information{" "}
            <span className='inline-block text-[--primary]'>
              Into Actionable
            </span>{" "}
            Insights
          </h2>
        </div>
      </div>
    </motion.div>
  );
}
