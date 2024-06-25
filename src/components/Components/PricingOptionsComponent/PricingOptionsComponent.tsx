import { PricingOptionAtom } from "~/components/Atoms/PricingOptionAtom/PricingOptionAtom";
import { FadeInAtom } from "~/components/Atoms/Animation/FadeInAtom/FadeInAtom";

type Props = {
  options: Array<React.ComponentProps<typeof PricingOptionAtom>>;
};

export function PricingOptionsComponent({ options }: Props) {
  return (
    <div className='grid gap-12 lg:auto-cols-[1fr] lg:grid-flow-col'>
      {options.map((option, index) => {
        return (
          <FadeInAtom delay={0.2} key={`${option.title}-${index}`}>
            <PricingOptionAtom {...option} />
          </FadeInAtom>
        );
      })}
    </div>
  );
}
