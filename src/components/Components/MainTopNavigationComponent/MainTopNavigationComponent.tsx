import { NavMenuListComponent } from "../NavMenuListComponent/NavMenuListComponent";

type Props = {
  navMenuListComponentProps: React.ComponentProps<typeof NavMenuListComponent>;
};

export function MainTopNavigationComponent({
  navMenuListComponentProps,
}: Props) {
  return (
    <div className='hidden lg:relative lg:mt-12 lg:block lg:p-0 '>
      <NavMenuListComponent {...navMenuListComponentProps} />
    </div>
  );
}
