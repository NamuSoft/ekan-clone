import React from "react";

import { PortfolioHeaderAtom } from "~/components/Atoms/ProfileAtoms/PortfolioHeaderAtom";
import { PortfolioWorkAtom } from "~/components/Atoms/ProfileAtoms/PortfolioWorkAtom";

type Props = {
  portfolioWorkAtomProps: React.ComponentProps<typeof PortfolioWorkAtom>;
};

export function MainPortfolioComponent({ portfolioWorkAtomProps }: Props) {
  return (
    <div
      className='rounded-[0_0_2rem_0] bg-[--background3] px-4 py-24 lg:px-12'
      data-scroll-index='3'
    >
      <PortfolioHeaderAtom />
      <PortfolioWorkAtom {...portfolioWorkAtomProps} />
    </div>
  );
}
