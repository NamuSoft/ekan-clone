import { InsightsAtom } from "../../Atoms/InsightsAtom/InsightsAtom";
import { FadeInAtom } from "../../Atoms/Animation/FadeInAtom/FadeInAtom";

type Props = {
  insights: Array<React.ComponentProps<typeof InsightsAtom>>;
};

export function ServicesInsightsComponent({ insights }: Props) {
  return (
    <div className='grid gap-4 md:grid-cols-[repeat(2,1fr)]'>
      {insights.map((service) => (
        <FadeInAtom key={service.title}>
          <InsightsAtom {...service} />
        </FadeInAtom>
      ))}
    </div>
  );
}
