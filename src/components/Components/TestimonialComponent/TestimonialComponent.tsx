import { FadeInUpAtom } from "~/components/Atoms/Animation/FadeInUpAtom/FadeInUpAtom";
import { ReviewComponent } from "../ReviewComponent/ReviewComponent";

import styles from "./TestimonialComponent.module.css";

export function TestimonialComponent() {
  return (
    <div className={styles.testimonials}>
      <div className='grid gap-20 md:pl-28 lg:pl-24'>
        <FadeInUpAtom className='flow'>
          <h6 className='uppercase tracking-wide opacity-70'>Testimonials</h6>
          <h3>
            Trusted by{" "}
            <span className='text-[--primary]'>Hundreds Clients</span>
          </h3>
        </FadeInUpAtom>

        <ReviewComponent />
      </div>
      <span className='absolute right-[5%] top-[-4.3125rem] rotate-180 scale-x-[-1] text-[9.375rem] leading-none text-[--background3] md:top-[-6rem] md:text-[12.5rem] lg:top-[-9.25rem] lg:text-[15.625rem]'>
        &#x275E;
      </span>
    </div>
  );
}
