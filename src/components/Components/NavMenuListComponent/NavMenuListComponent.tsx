import { useSmoothScrollNav } from "~/hooks/useSmoothScroll";
import {
  NavItemAtom,
  type NavItemAtomProps,
} from "../../Atoms/NavItemAtom/NavItemAtom";

type Prop = {
  navItems: Array<NavItemAtomProps>;
};

export function NavMenuListComponent({ navItems }: Prop) {
  const { navRef } = useSmoothScrollNav();

  return (
    <div className='flex justify-center lg:justify-end'>
      <nav ref={navRef}>
        <ul className='py-5 text-center text-base uppercase lg:relative lg:ml-20 lg:flex lg:w-[calc(100%_-_5rem)] lg:flex-row lg:rounded-[1rem_1rem_0_0] lg:bg-[--background3] lg:pl-[0.25rem] lg:pr-10 lg:text-xs lg:after:absolute lg:after:bottom-0 lg:after:left-[-4.375rem] lg:after:h-0 lg:after:w-0 lg:after:border-b-[4.5rem] lg:after:border-l-[4.5rem] lg:after:border-solid lg:after:border-b-[--background3] lg:after:border-l-transparent lg:after:content-[""]'>
          {navItems.map((item) => (
            <NavItemAtom key={item.name} {...item} />
          ))}
        </ul>
      </nav>
    </div>
  );
}
