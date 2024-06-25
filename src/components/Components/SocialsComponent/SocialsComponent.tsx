import clsx from "clsx";
import Link from "next/link";

import { type IconNames, SVGAtom } from "~/components/Atoms/SVGAtom/SVGAtom";

export type SocialLinks = Array<{
  iconName: IconNames;
  link: string;
}>;

type Props = {
  socialLinks: SocialLinks;
  className?: string;
};

export function SocialsComponent({ socialLinks, className }: Props) {
  return (
    <ul className='flex'>
      {socialLinks.map((social, index) => {
        const { iconName, link } = social;
        return (
          <li key={`${iconName}-${index}`} className={`mx-0.5 my-0`}>
            <Link href={link}>
              <div
                className={clsx(
                  `flex h-10 w-10 items-center justify-center rounded-full border border-solid border-[--border2] text-center`,
                  className
                )}
              >
                <SVGAtom iconName={iconName} width={12} height={12} />
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
