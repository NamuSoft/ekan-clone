import { FadeInUpAtom } from "~/components/Atoms/Animation/FadeInUpAtom/FadeInUpAtom";

import { PricingOptionsComponent } from "../../Components/PricingOptionsComponent/PricingOptionsComponent";

type Props = {
  pricingOptionsComponentProps: React.ComponentProps<
    typeof PricingOptionsComponent
  >;
};

export function MainPricingModule({ pricingOptionsComponentProps }: Props) {
  return (
    <div
      className='grid gap-20 rounded-[0_2rem_0_0] bg-[--background3] px-4 py-24 lg:px-12'
      data-scroll-index='4'
    >
      <FadeInUpAtom>
        <div className='flow text-center'>
          <h4 className='uppercase tracking-wide opacity-70 '>Best Pricing</h4>
          <h2>
            <span className='text-[--primary]'>Flexible</span> Pricing Plan
          </h2>
        </div>
      </FadeInUpAtom>

      <PricingOptionsComponent {...pricingOptionsComponentProps} />
    </div>
  );
}
