import { useState } from "react";

import { LogoAtom } from "~/components/Atoms/LogoAtom/LogoAtom";
import { MainNavMenuAtom } from "~/components/Atoms/MainNavAtoms/MainNavMenuAtom";
import { MainNavToggle } from "~/components/Atoms/MainNavAtoms/MainNavToggle";

export function MainNavBarComponent() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleCloseNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div className='flex flex-1 items-center justify-between'>
      <LogoAtom />
      <MainNavMenuAtom isNavOpen={isNavOpen} closeNav={handleCloseNav} />
      <MainNavToggle setNav={setIsNavOpen} />
    </div>
  );
}
