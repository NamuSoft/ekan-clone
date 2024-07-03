import { InsightsAtom } from "../../Atoms/InsightsAtom/InsightsAtom";
import { FadeInAtom } from "../../Atoms/Animation/FadeInAtom/FadeInAtom";

type Props = {
  insights: React.ComponentProps<typeof InsightsAtom>[];
};

export function ServicesInsightsComponent(props: Props) {
  return (
    <div className='grid gap-4 md:grid-cols-[repeat(2,1fr)]'>
      {props.insights.map((service) => (
        <FadeInAtom key={service.title}>
          <InsightsAtom {...service} />
        </FadeInAtom>
      ))}
    </div>
  );
}
