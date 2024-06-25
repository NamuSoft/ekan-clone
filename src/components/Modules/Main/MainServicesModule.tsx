import { NavMenuListComponent } from "../../Components/NavMenuListComponent/NavMenuListComponent";
import { ServicesInsightsComponent } from "~/components/Components/ServicesInsightsComponent/ServicesInsightsComponent";
import { FadeInUpAtom } from "~/components/Atoms/Animation/FadeInUpAtom/FadeInUpAtom";

type Props = {
  servicesInsightsComponentProps: React.ComponentProps<
    typeof ServicesInsightsComponent
  >;
  navMenuListComponentProps: React.ComponentProps<typeof NavMenuListComponent>;
};

export function MainServicesModule({
  servicesInsightsComponentProps,
  navMenuListComponentProps,
}: Props) {
  return (
    <div>
      <div className='hidden lg:relative lg:mt-12 lg:block lg:p-0 '>
        <NavMenuListComponent
          {...navMenuListComponentProps}
          className='lg:relative lg:ml-20 lg:flex lg:w-[calc(100%_-_5rem)] lg:flex-row lg:rounded-[1rem_1rem_0_0] lg:bg-[--background3] lg:pl-[0.25rem] lg:pr-10 lg:text-xs lg:after:absolute lg:after:bottom-0 lg:after:left-[-4.375rem] lg:after:h-0 lg:after:w-0 lg:after:border-b-[4.5rem] lg:after:border-l-[4.5rem] lg:after:border-solid lg:after:border-b-[--background3] lg:after:border-l-transparent lg:after:content-[""]'
        />
      </div>

      <div
        className='mt-12 rounded-[1rem_1rem_0_0] border-b border-solid border-b-[--border2] bg-[--background3] px-4 py-24 lg:mt-0 lg:rounded-[1rem_0_0_0] lg:px-12'
        data-scroll-index='1'
      >
        <FadeInUpAtom className='mb-20'>
          <div className='flex justify-center'>
            <div className='flow px-4 text-center lg:w-1/2'>
              <h6 className='sub-title uppercase tracking-[2px] opacity-70'>
                Our Services
              </h6>
              <h2>
                Turn Information{" "}
                <span className='inline-block text-[--primary]'>
                  Into Actionable
                </span>{" "}
                Insights
              </h2>
            </div>
          </div>
        </FadeInUpAtom>

        <ServicesInsightsComponent {...servicesInsightsComponentProps} />
      </div>
    </div>
  );
}
