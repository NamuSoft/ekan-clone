import { FadeInAtom } from "~/components/Atoms/Animation/FadeInAtom/FadeInAtom";
import { BlogAtom } from "~/components/Atoms/BlogAtom/BlogAtom";

type Props = {
  blogsContent: React.ComponentProps<typeof BlogAtom>[];
};

export function BlogsComponent(props: Props) {
  return (
    <div className='grid auto-rows-[1fr] grid-cols-[repeat(_auto-fit,minmax(min(250px,100%),1fr)_)] gap-12'>
      {props.blogsContent.map((blogContent) => (
        <FadeInAtom key={blogContent.title}>
          <BlogAtom {...blogContent} />
        </FadeInAtom>
      ))}
    </div>
  );
}
