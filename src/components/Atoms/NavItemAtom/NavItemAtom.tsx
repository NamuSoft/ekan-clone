import Link from "next/link";

type NavItemAtomProps = {
  link: string;
  name: string;
  scrollToIndex?: number;
  onClick?: () => void;
};

export function NavItemAtom(props: NavItemAtomProps) {
  return (
    <li className='px-[1rem] py-2.5'>
      <Link
        href={props.link}
        onClick={props.onClick}
        data-scroll-nav={props.scrollToIndex}
      >
        {props.name}
      </Link>
    </li>
  );
}
