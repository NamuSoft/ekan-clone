import Image from "next/image";
import Link from "next/link";

import { SVGAtom } from "../SVGAtom/SVGAtom";

type Props = {
  imageUrl: string;
  title: string;
};

export function BlogAtom(props: Props) {
  return (
    <>
      <div className='overflow-hidden rounded-[0.25rem_0.25rem_0_0]'>
        <Image src={props.imageUrl} alt='' width={500} height={0} />
      </div>
      <div className='px-2.5 py-0'>
        <div className='relative z-[2] -mt-8 rounded-[0.25rem] bg-[--neutral] px-5 py-10 lg:px-10'>
          <span className='mb-2.5 inline-block rounded-[1.875rem] border border-solid border-[--border3] px-[1rem] py-[0.25rem] text-xs uppercase'>
            <SVGAtom
              iconName='calendar'
              className='mr-3 inline-block text-[--primary]'
              width={12}
              height={12}
            />{" "}
            6 , Aug 2022
          </span>
          <h5 className='text-xl leading-normal underline hover:text-[--primary]'>
            <Link href='#'>{props.title}</Link>
          </h5>
        </div>
        <div className='flex items-center px-4 py-5 text-sm'>
          <div>
            <span>
              <SVGAtom
                iconName='speechBubble'
                width={12}
                height={12}
                className='mr-3 inline-block'
              />{" "}
              2 Comments
            </span>
          </div>
          <div className='ml-auto'>
            <a href='#'>
              Read More{" "}
              <SVGAtom
                className='inline-block'
                iconName='arrowRight'
                width={12}
                height={12}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
