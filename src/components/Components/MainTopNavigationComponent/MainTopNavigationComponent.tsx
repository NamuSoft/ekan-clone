import { MainNavMenuList } from "~/components/Atoms/MainNavAtoms/MainNavMenuList";

export function MainTopNavigationComponent() {
  return (
    <div className='hidden lg:relative lg:mt-12 lg:block lg:p-0 '>
      <MainNavMenuList />
    </div>
  );
}
