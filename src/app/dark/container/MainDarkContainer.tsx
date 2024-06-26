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

import "~/styles/dark.css";

export const MainDarkContainer = () => {
  const mainTemplateProps: React.ComponentProps<typeof MainTemplate> = {
    buttonThemeProps: {
      defaultActiveBorderColor: "#ffffff",
      defaultActiveColor: "#000000",
      defaultHoverBorderColor: "#ffffff",
      defaultHoverColor: "#000000",
      defaultHoverBg: "#ffffff",
    },
    inputThemeProps: {
      activeBg: "transparent",
      hoverBg: "transparent",
      hoverBorderColor: "none",
      activeBorderColor: "white",
      colorTextPlaceholder: "#ffffff33",
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
