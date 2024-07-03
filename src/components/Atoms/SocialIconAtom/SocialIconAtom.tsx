import Link from "next/link";
import clsx from "clsx";

import { type IconNames, SVGAtom } from "../SVGAtom/SVGAtom";

type Props = {
  iconName: IconNames;
  link: string;
  className?: string;
};

export function SocialIconAtom(props: Props) {
  return (
    <li className={`mx-0.5 my-0`}>
      <Link href={props.link}>
        <div
          className={clsx(
            `flex h-10 w-10 items-center justify-center rounded-full border border-solid border-[--border2] text-center`,
            props.className
          )}
        >
          <SVGAtom
            className='text-[--text]'
            iconName={props.iconName}
            width={12}
            height={12}
          />
        </div>
      </Link>
    </li>
  );
}
