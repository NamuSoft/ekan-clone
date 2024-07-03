import Image from "next/image";
import Link from "next/link";

import { BlogsComponent } from "~/components/Components/BlogsComponent/BlogsComponent";
import { SVGAtom } from "~/components/Atoms/SVGAtom/SVGAtom";

type Props = {
  blogsComponentProps: React.ComponentProps<typeof BlogsComponent>;
};

export const BlogsContentModule = (props: Props) => {
  return (
    <div className='grid gap-10 rounded-[1rem] bg-[--background3] px-4 py-24 lg:px-24'>
      <div className='flow text-center'>
        <h5 className='uppercase tracking-wider opacity-70'>Our Blogs</h5>
        <h3>
          <span className='text-[--primary]'>Articles</span> &amp; Resources
        </h3>
      </div>
      <div className='rounded-lg border border-[--border]'>
        <div className='overflow-hidden rounded-lg'>
          <Image
            src='/assets/blogm1.jpg'
            alt=''
            width={1000}
            height={0}
            style={{ width: "100%", height: "100%" }}
            objectFit='cover'
            objectPosition='center'
          />
        </div>
        <div className='px-3'>
          <div className='flow relative z-[2] -mt-8 rounded-md bg-[--background5] p-5 text-center md:p-10'>
            <span className='mb-2.5 inline-flex items-center gap-2 rounded-[1.875rem] border border-solid border-[--border3] px-4 py-1 text-xs uppercase'>
              <SVGAtom
                width={12}
                height={12}
                iconName='calendar'
                className='inline-block text-[--primary]'
              />{" "}
              6, Aug 2022
            </span>

            <h3>
              <Link href='#'>12 unique examples of portfolio websites.</Link>
            </h3>

            <p>
              Dynamically fabricate excellent go forward technology. Intrinsicly
              impact empowered scenarios after cost effective outsourcing.
            </p>
          </div>

          <div className='flex items-center px-4 py-5 text-xs'>
            <div>
              <span className='inline-flex gap-2'>
                <SVGAtom
                  iconName='speechBubble'
                  width={12}
                  height={12}
                  className='inline-block'
                />{" "}
                2 Comments
              </span>
            </div>
            <div className='ml-auto'>
              <Link href='#' className='inline-flex items-center gap-2'>
                Read More
                <SVGAtom
                  iconName='arrowRight'
                  width={12}
                  height={12}
                  className='inline-block'
                />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='my-20 border-b border-b-[--border2] pb-5'>
        <h4 className='text-2xl tracking-wider lg:text-3xl'>All Posts</h4>
      </div>

      <BlogsComponent {...props.blogsComponentProps} />
    </div>
  );
};
