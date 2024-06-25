import clsx from "clsx";

import { useSmoothScrollNav } from "~/hooks/useSmoothScroll";

import { NavItemAtom } from "../../Atoms/NavItemAtom/NavItemAtom";

type Prop = {
  navItems: Array<React.ComponentProps<typeof NavItemAtom>>;
  className?: string;
};

export function NavMenuListComponent({ navItems, className }: Prop) {
  const { navRef } = useSmoothScrollNav();

  return (
    <div className='flex justify-center lg:justify-end'>
      <nav ref={navRef}>
        <ul className={clsx("py-5 text-center text-base uppercase", className)}>
          {navItems.map((item) => (
            <NavItemAtom key={item.name} {...item} />
          ))}
        </ul>
      </nav>
    </div>
  );
}
