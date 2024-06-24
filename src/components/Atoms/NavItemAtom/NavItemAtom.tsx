import Link from "next/link";

export type NavItemAtomProps = {
  link: string;
  name: string;
  onClick?: () => void;
  scrollToIndex?: number;
};

export function NavItemAtom({
  link,
  name,
  onClick,
  scrollToIndex,
}: NavItemAtomProps) {
  return (
    <li className='px-[1rem] py-2.5'>
      <Link href={link} onClick={onClick} data-scroll-nav={scrollToIndex}>
        {name}
      </Link>
    </li>
  );
}
