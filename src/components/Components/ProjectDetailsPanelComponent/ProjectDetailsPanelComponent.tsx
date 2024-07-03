import { DetailPanelAtom } from "~/components/Atoms/DetailPanelAtom/DetailPanelAtom";

type Props = {
  listItemIcon: React.ComponentProps<typeof DetailPanelAtom>[];
};

export function ProjectDetailsPanelComponent(props: Props) {
  return (
    <div>
      <ul className='flex flex-col gap-8'>
        {props.listItemIcon.map((item, index) => (
          <DetailPanelAtom key={index} {...item} />
        ))}
      </ul>
    </div>
  );
}
