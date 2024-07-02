import { SVGAtom } from "~/components/Atoms/SVGAtom/SVGAtom";

import { type ItemIcon } from "../ProjectDetailsPanelComponent/ProjectDetailsPanelComponent";

type Props = {
  listItemIcon: Array<ItemIcon>;
};

export function ProjectFeatureHighlightsComponent(props: Props) {
  return (
    <ul className='flex flex-col'>
      {props.listItemIcon.map((item) => (
        <li key={item.title} className='inline-flex gap-2'>
          <span>
            <SVGAtom
              iconName={item.iconName}
              className='inline-block'
              width={15}
              height={15}
            />
          </span>
          <h6 className='inline-block text-base md:text-lg'>{item.title}</h6>
        </li>
      ))}
    </ul>
  );
}
