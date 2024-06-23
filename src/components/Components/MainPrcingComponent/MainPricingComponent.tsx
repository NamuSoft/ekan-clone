import { PricingHeaderAtom } from "~/components/Atoms/PricingAtoms/PricingHeaderAtom";
import { PricingOptionAtom } from "~/components/Atoms/PricingAtoms/PricingOptionAtom";

type Props = {
  pricingOptionAtomProps: React.ComponentProps<typeof PricingOptionAtom>;
};

export function MainPricingComponent({ pricingOptionAtomProps }: Props) {
  return (
    <div
      className='grid gap-20 rounded-[0_2rem_0_0] bg-[--background3] px-4 py-24 lg:px-12'
      data-scroll-index='4'
    >
      <PricingHeaderAtom />
      <PricingOptionAtom {...pricingOptionAtomProps} />
    </div>
  );
}
