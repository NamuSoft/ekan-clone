import Link from "next/link";

import { type IconNames, SVGAtom } from "~/components/Atoms/SVGAtom/SVGAtom";

export type SocialLinks = Array<{
  iconName: IconNames;
  link: string;
}>;

type Props = {
  socialLinks: SocialLinks;
  rounded?: boolean;
};

export function SocialsComponent({ socialLinks, rounded = true }: Props) {
  const isRounded = rounded ? "rounded-full" : "rounded-lg";
  return (
    <ul className='flex'>
      {socialLinks.map((social, index) => {
        const { iconName, link } = social;
        return (
          <li key={`${iconName}-${index}`} className={`mx-0.5 my-0`}>
            <Link href={link}>
              <div
                className={`flex h-10 w-10 items-center justify-center border border-solid border-[--border2] text-center ${isRounded}`}
              >
                <SVGAtom iconName={iconName} className='h-6 w-6' />
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
