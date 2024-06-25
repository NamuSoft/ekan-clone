import Link from "next/link";

import NavbarStore from "~/store/NavbarStore";

type NavItemAtomProps = {
  link: string;
  name: string;
  scrollToIndex?: number;
};

export function NavItemAtom(props: NavItemAtomProps) {
  return (
    <li className='px-[1rem] py-2.5'>
      <Link
        href={props.link}
        onClick={() => NavbarStore.close()}
        data-scroll-nav={props.scrollToIndex}
      >
        {props.name}
      </Link>
    </li>
  );
}
