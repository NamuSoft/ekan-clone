import React from "react";

import { ServicesHeaderAtom } from "~/components/Atoms/ServicesAtom/ServicesHeaderAtom";
import { ServicesInsightsAtom } from "~/components/Atoms/ServicesAtom/ServicesInsightsAtom";

type Props = {
  servicesInsightsAtomProps: React.ComponentProps<typeof ServicesInsightsAtom>;
};

export function MainServicesComponent({ servicesInsightsAtomProps }: Props) {
  return (
    <div
      className='mt-12 rounded-[1rem_1rem_0_0] bg-[--background3] px-4 py-24 lg:mt-0 lg:rounded-[1rem_0_0_0] lg:px-12'
      data-scroll-index='1'
    >
      <ServicesHeaderAtom />
      <ServicesInsightsAtom {...servicesInsightsAtomProps} />
    </div>
  );
}
