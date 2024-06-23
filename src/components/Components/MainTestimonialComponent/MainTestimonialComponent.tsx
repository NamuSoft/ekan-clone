import { TestimonialHeader } from "~/components/Atoms/TestimonialAtoms/TestimonialHeader";
import { TestimonialReview } from "~/components/Atoms/TestimonialAtoms/TestimonialReview";

import styles from "./MainTestimonialComponent.module.css";

export function MainTestimonialComponent() {
  return (
    <div className={styles.testimonials}>
      <div className='grid gap-20 md:pl-28 lg:pl-24'>
        <TestimonialHeader />
        <TestimonialReview />
      </div>
      <span className='absolute right-[5%] top-[-4.3125rem] rotate-180 scale-x-[-1] text-[9.375rem] leading-none text-[--background3] md:top-[-6rem] md:text-[12.5rem] lg:top-[-9.25rem] lg:text-[15.625rem]'>
        &#x275E;
      </span>
    </div>
  );
}
