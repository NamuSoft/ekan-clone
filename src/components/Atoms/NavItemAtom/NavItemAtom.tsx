import Link from "next/link";

import NavbarStore from "~/store/NavbarStore";

type NavItemAtomProps = {
  link: string;
  name: string;
  scrollToIndex?: number;
};

export function NavItemAtom({ link, name, scrollToIndex }: NavItemAtomProps) {
  return (
    <li className='px-[1rem] py-2.5'>
      <Link
        href={link}
        onClick={() => NavbarStore.close()}
        data-scroll-nav={scrollToIndex}
      >
        {name}
      </Link>
    </li>
  );
}
