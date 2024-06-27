import { FadeInAtom } from "~/components/Atoms/Animation/FadeInAtom/FadeInAtom";
import { BlogAtom } from "~/components/Atoms/BlogAtom/BlogAtom";

type Props = {
  blogsContent: Array<React.ComponentProps<typeof BlogAtom>>;
};

export function BlogsComponent(props: Props) {
  return (
    <div className='grid gap-12 lg:auto-cols-[1fr] lg:grid-flow-col'>
      {props.blogsContent.map((blogContent) => (
        <FadeInAtom key={blogContent.title}>
          <BlogAtom {...blogContent} />
        </FadeInAtom>
      ))}
    </div>
  );
}
