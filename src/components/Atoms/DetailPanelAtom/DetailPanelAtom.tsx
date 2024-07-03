import { type IconNames, SVGAtom } from "../SVGAtom/SVGAtom";

type Props = {
  iconName: IconNames;
  title: string;
  detail?: string;
};

export function DetailPanelAtom(props: Props) {
  return (
    <li className='flex flex-col gap-1'>
      <span className='inline-flex items-center gap-2'>
        <SVGAtom
          iconName={props.iconName}
          className='inline-block text-[--text]'
          width={16}
          height={16}
        />
        <h6 className='inline-block text-sm'>{props.title}</h6>
      </span>
      <p>{props.detail}</p>
    </li>
  );
}
