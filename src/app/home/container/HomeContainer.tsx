import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";
import { darkLightPreviewComponentProps, linesComponentProps } from "~/data";

import "~/styles/dark.css";

export const HomeContainer = () => {
  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    homeContentModuleProps: {
      darkLightPreviewComponentProps,
    },
    utilityModulesProps: {
      linesComponentProps,
    },
  };

  return <HomeTemplate {...homeTemplateProps} />;
};
