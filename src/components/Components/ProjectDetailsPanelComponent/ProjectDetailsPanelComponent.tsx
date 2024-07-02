import { SVGAtom, type IconNames } from "~/components/Atoms/SVGAtom/SVGAtom";

export type ItemIcon = {
  iconName: IconNames;
  title: string;
  detail?: string;
};

type Props = {
  listItemIcon: Array<ItemIcon>;
};

export function ProjectDetailsPanelComponent(props: Props) {
  return (
    <div>
      <ul className='flex flex-col gap-8'>
        {props.listItemIcon.map((item) => (
          <li key={item.title} className='flex flex-col gap-1'>
            <span className='inline-flex items-center gap-2'>
              <SVGAtom
                iconName={item.iconName}
                className='inline-block'
                width={16}
                height={16}
              />
              <h6 className='inline-block text-sm'>{item.title}</h6>
            </span>
            <p>{item.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
