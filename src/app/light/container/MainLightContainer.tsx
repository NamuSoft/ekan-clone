import { MainTemplate } from "~/components/Templates/Main/MainTemplate";
import {
  utilityModulesProps,
  mainHeaderModuleProps,
  mainHeroModuleProps,
  mainAboutModuleProps,
  mainServicesModuleProps,
  mainPortfolioModuleProps,
  mainPricingModuleProps,
  mainContactModuleProps,
  mainBlogModuleProps,
} from "~/utils/data";

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
    inputThemeProps: {
      activeBg: "transparent",
      hoverBg: "transparent",
      hoverBorderColor: "none",
      activeBorderColor: "black",
    },
    mainUtilityModulesProps: utilityModulesProps,
    mainHeaderModuleProps,
    mainHeroModuleProps,
    mainServicesModuleProps,
    mainAboutModuleProps,
    mainPortfolioModuleProps,
    mainPricingModuleProps,
    mainContactModuleProps,
    mainBlogModuleProps,
  };

  return <MainTemplate {...mainTemplateProps} />;
};
