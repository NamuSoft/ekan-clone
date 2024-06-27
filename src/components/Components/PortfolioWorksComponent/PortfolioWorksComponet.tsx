import { PortfolioWorkAtom } from "~/components/Atoms/ProfileAtom/PortfolioWorkAtom";
import { FadeInUpAtom } from "~/components/Atoms/Animation/FadeInUpAtom/FadeInUpAtom";

type Props = {
  portfolios: Array<React.ComponentProps<typeof PortfolioWorkAtom>>;
};

export function PortfolioWorksComponent(props: Props) {
  return (
    <div className='grid gap-x-8 gap-y-12 md:grid-cols-[repeat(2,1fr)]'>
      {props.portfolios.map((portfolio, index) => (
        <FadeInUpAtom key={`${portfolio.title}-${index}`} delay={0.2}>
          <PortfolioWorkAtom {...portfolio} />
        </FadeInUpAtom>
      ))}
    </div>
  );
}
