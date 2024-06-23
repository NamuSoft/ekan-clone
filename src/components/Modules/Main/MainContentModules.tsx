import React from "react";

import { MainAboutComponent } from "~/components/Components/MainOurSkillsComponent/MainAboutComponent";
import { MainServicesComponent } from "~/components/Components/MainServicesComponent/MainServicesComponent";
import { MainTopNavigationComponent } from "~/components/Components/MainTopNavigationComponent/MainTopNavigationComponent";

type Props = {
  mainServicesComponent: React.ComponentProps<typeof MainServicesComponent>;
  mainAboutComponent: React.ComponentProps<typeof MainAboutComponent>;
};

export const MainContentModules = ({
  mainServicesComponent,
  mainAboutComponent,
}: Props) => {
  return (
    <div>
      <MainTopNavigationComponent />
      <MainServicesComponent {...mainServicesComponent} />
      <MainAboutComponent {...mainAboutComponent} />
    </div>
  );
};
