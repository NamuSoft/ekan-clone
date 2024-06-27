import Image from "next/image";

import { FadeInUpAtom } from "~/components/Atoms/Animation/FadeInUpAtom/FadeInUpAtom";
import { SVGAtom } from "~/components/Atoms/SVGAtom/SVGAtom";

export function ReviewComponent() {
  return (
    <FadeInUpAtom className='lg:w-7/12' delay={0.5}>
      <div className='flow mb-8'>
        <div className='flex items-center gap-4'>
          <span>
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <SVGAtom
                  key={index}
                  iconName='star'
                  className='inline-block h-4 w-4 text-[--primary]'
                />
              );
            })}
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
    </FadeInUpAtom>
  );
}
