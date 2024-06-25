import { AwardAtom } from "~/components/Atoms/AwardAtom/AwardAtom";
import { FadeInAtom } from "~/components/Atoms/Animation/FadeInAtom/FadeInAtom";

type Props = {
  awards: Array<React.ComponentProps<typeof AwardAtom>>;
};

export function AwardsComponent({ awards }: Props) {
  return (
    <div className='mt-24 grid gap-4 lg:auto-cols-[1fr] lg:grid-flow-col'>
      {awards.map((award) => (
        <FadeInAtom delay={0.2} key={award.serial}>
          <AwardAtom {...award} />
        </FadeInAtom>
      ))}
    </div>
  );
}
