import { PreviewAtom } from "~/components/Atoms/PreviewAtom/PreviewAtom";

type Props = {
  darkLightProps: Array<{
    imageUrl: string;
    title: string;
    route: string;
  }>;
};

export function DarkLightPreviewComponent({ darkLightProps }: Props) {
  return (
    <div className='flex flex-col gap-[1.5rem] lg:flex-row'>
      {darkLightProps.map((content) => (
        <PreviewAtom key={content.title} {...content} />
      ))}
    </div>
  );
}
