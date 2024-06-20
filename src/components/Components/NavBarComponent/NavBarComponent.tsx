import { Button } from "antd";

import { LogoAtom } from "~/components/Atoms/LogoAtom/LogoAtom";

export function NavBarComponent() {
  return (
    <div className='flex flex-wrap items-center justify-between'>
      <LogoAtom />
      <Button
        type='default'
        className='pointer-events-auto hidden bg-transparent px-[2rem] py-[1.5rem] text-white lg:flex'
      >
        Buy Now
      </Button>
    </div>
  );
}
