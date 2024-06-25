import Link from "next/link";

import { PortfolioWorksComponent } from "../../Components/PortfolioWorksComponent/PortfolioWorksComponet";

type Props = {
  portfolioWorksComponentProps: React.ComponentProps<
    typeof PortfolioWorksComponent
  >;
};

export function MainPortfolioModule({ portfolioWorksComponentProps }: Props) {
  return (
    <div
      className='grid gap-12 rounded-[0_0_2rem_0] bg-[--background3] px-4 py-24 lg:px-12'
      data-scroll-index='3'
    >
      <div className='flex flex-col justify-between gap-8 lg:flex-row'>
        <div>
          <h6 className='mb-4 uppercase tracking-wide opacity-70'>
            Our Portfolio
          </h6>
          <h3>
            Look at my work &amp; <br /> give us{" "}
            <span className='text-[--primary]'>your feedback</span>
          </h3>
        </div>
        <div className='lg:self-center'>
          <Link href='#'>View All Works</Link>
        </div>
      </div>
      <PortfolioWorksComponent {...portfolioWorksComponentProps} />
    </div>
  );
}
