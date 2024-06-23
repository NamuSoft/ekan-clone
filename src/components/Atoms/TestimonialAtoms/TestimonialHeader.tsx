import { motion } from "framer-motion";

export function TestimonialHeader() {
  return (
    <motion.div
      className='flow'
      initial={{ opacity: 0, transform: "translate3d(0, 100%, 0)" }}
      whileInView={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
      transition={{ ease: "linear", duration: 2 }}
      viewport={{ once: true }}
    >
      <h6 className='uppercase tracking-wide opacity-70'>Testimonials</h6>
      <h3>
        Trusted by <span className='text-[--primary]'>Hundreds Clients</span>
      </h3>
    </motion.div>
  );
}
