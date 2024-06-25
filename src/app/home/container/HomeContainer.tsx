import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";
import {
  darkLightPreviewComponentProps,
  utilityModulesProps,
} from "~/utils/data";

import "~/styles/dark.css";

export const HomeContainer = () => {
  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    homeContentModuleProps: {
      darkLightPreviewComponentProps,
    },
    homeUtilityModulesProps: utilityModulesProps,
  };

  return <HomeTemplate {...homeTemplateProps} />;
};
