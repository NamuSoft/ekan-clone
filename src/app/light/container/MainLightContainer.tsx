import { MainTemplate } from "~/components/Templates/Main/MainTemplate";
import {
  utilityModulesProps,
  mainHeaderModuleProps,
  mainHeroModuleProps,
  mainAboutModuleProps,
  mainServicesModuleProps,
  mainPortfolioModuleProps,
  mainPricingModuleProps,
} from "~/data";

import "~/styles/light.css";

export const MainLightContainer = () => {
  const mainTemplateProps: React.ComponentProps<typeof MainTemplate> = {
    buttonThemeProps: {
      defaultActiveBorderColor: "#000000",
      defaultActiveColor: "#ffffff",
      defaultHoverBorderColor: "#000000",
      defaultHoverColor: "#ffffff",
      defaultHoverBg: "#000000",
    },
    utilityModulesProps,
    mainHeaderModuleProps,
    mainHeroModuleProps,
    mainServicesModuleProps,
    mainAboutModuleProps,
    mainPortfolioModuleProps,
    mainPricingModuleProps,
  };

  return <MainTemplate {...mainTemplateProps} />;
};
