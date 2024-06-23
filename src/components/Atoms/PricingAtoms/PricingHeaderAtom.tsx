import { motion } from "framer-motion";

export function PricingHeaderAtom() {
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translate3d(0, 100%, 0)" }}
      whileInView={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
      transition={{ ease: "linear", duration: 2 }}
      viewport={{ once: true }}
    >
      <div className='flow text-center'>
        <h4 className='uppercase tracking-wide opacity-70 '>Best Pricing</h4>
        <h2>
          <span className='text-[--primary]'>Flexible</span> Pricing Plan
        </h2>
      </div>
    </motion.div>
  );
}
