import Link from "next/link";
import { FadeInAtom } from "~/components/Atoms/Animation/FadeInAtom/FadeInAtom";
import { BlogsComponent } from "~/components/Components/BlogsComponent/BlogsComponent";

type Props = {
  blogsComponentProps: React.ComponentProps<typeof BlogsComponent>;
};

export function MainBlogModule(props: Props) {
  return (
    <div
      className='grid gap-8 rounded-[0_0_1rem_1rem] bg-[--background3] px-4 py-24 lg:px-12'
      data-scroll-index='6'
    >
      <FadeInAtom className='flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between'>
        <div className='flow'>
          <h6 className='uppercase tracking-wide opacity-70'>Our Blog</h6>
          <h3>
            Latest News &amp; <span className='text-[--primary]'>Blog</span>
          </h3>
        </div>
        <div>
          <div>
            <Link href='#'>
              <span>View All Posts </span>
            </Link>
          </div>
        </div>
      </FadeInAtom>

      <BlogsComponent {...props.blogsComponentProps} />
    </div>
  );
}
