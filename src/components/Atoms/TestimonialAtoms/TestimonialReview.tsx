import { StarFilled } from "@ant-design/icons";
import Image from "next/image";

import { motion } from "framer-motion";

export function TestimonialReview() {
  return (
    <motion.div
      className='lg:w-7/12'
      initial={{ opacity: 0, transform: "translate3d(0, 100%, 0)" }}
      whileInView={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
      transition={{ ease: "linear", delay: 0.5, duration: 2 }}
      viewport={{ once: true }}
    >
      <div className='flow mb-8'>
        <div className='flex items-center gap-4'>
          <span>
            <StarFilled className='text-[--primary]' />
            <StarFilled className='text-[--primary]' />
            <StarFilled className='text-[--primary]' />
            <StarFilled className='text-[--primary]' />
            <StarFilled className='text-[--primary]' />
          </span>
          <span className='text-xs opacity-70'>(71 Reviews)</span>
        </div>
        <p className='text-xl'>
          We have purchased well into the thousands of items, but this is
          without doubt one of the best we’ve have been lucky enough to work on,
          the attention to detail apparent throughout, and the delivery is
          impressively intuitive.
        </p>
      </div>

      <div className='flex items-center gap-8'>
        <div>
          <div className='h-[4.375rem] w-[4.375rem] overflow-hidden rounded-full'>
            <Image
              src='/assets/testimonial1.jpg'
              alt=''
              width={70}
              height={70}
            />
          </div>
        </div>

        <div className='flow'>
          <h5 className='text-[--primary]'>Leonard Heiser</h5>
          <span className='text-sm opacity-80'>Envato customer</span>
        </div>
      </div>
    </motion.div>
  );
}
