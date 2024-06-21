import { LogoAtom } from "~/components/Atoms/LogoAtom/LogoAtom";
import { MainNavToggle } from "~/components/Atoms/MainNavToggle/MainNavToggle";

export function MainNavBarComponent() {
  return (
    <div className='flex flex-wrap items-center justify-between'>
      <LogoAtom />
      <MainNavToggle />
    </div>
  );
}
