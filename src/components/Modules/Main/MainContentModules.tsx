import React from "react";

import { MainServicesComponent } from "~/components/Components/MainServicesComponent/MainServicesComponent";
import { MainTopNavigationComponent } from "~/components/Components/MainTopNavigationComponent/MainTopNavigationComponent";

type Props = {
  mainServicesComponent: React.ComponentProps<typeof MainServicesComponent>;
};

export const MainContentModules = ({ mainServicesComponent }: Props) => {
  return (
    <div>
      <MainTopNavigationComponent />
      <MainServicesComponent {...mainServicesComponent} />
    </div>
  );
};
