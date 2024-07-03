import { PreviewAtom } from "~/components/Atoms/PreviewAtom/PreviewAtom";

type Props = {
  darkLightProps: React.ComponentProps<typeof PreviewAtom>[];
};

export function DarkLightPreviewComponent(props: Props) {
  return (
    <div className='flex flex-col gap-[1.5rem] lg:flex-row'>
      {props.darkLightProps.map((content) => (
        <PreviewAtom key={content.title} {...content} />
      ))}
    </div>
  );
}
