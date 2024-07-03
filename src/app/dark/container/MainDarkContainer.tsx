import { useState } from "react";

import { useTitle } from "~/hooks/useTitle";
import {
  utilityModulesProps,
  mainHeroModuleProps,
  mainAboutModuleProps,
  mainServicesModuleProps,
  mainDarkPortfolioModuleProps,
  mainPricingModuleProps,
  mainContactModuleProps,
  mainBlogModuleProps,
} from "~/utils/data";
import { MainTemplate } from "~/components/Templates/Main/MainTemplate";

import "~/styles/dark.css";

export const MainDarkContainer = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  useTitle("Gavi - Dark");

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleToggle = () => {
    setIsNavOpen((prev) => !prev);
  };

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
      colorText: "#ffffff",
    },
    mainUtilityModulesProps: utilityModulesProps,
    mainHeaderModuleProps: {
      SocialIconsComponentProps: {
        socialLinks: [
          {
            iconName: "behance",
            link: "#",
          },
          {
            iconName: "github",
            link: "#",
          },
          {
            iconName: "linkedin",
            link: "#",
          },
          {
            iconName: "dribble",
            link: "#",
          },
        ],
      },
      navMenuListComponentProps: {
        navItems: [
          {
            name: "Home",
            link: "#",
            onClick: closeNav,
          },
          {
            name: "Services",
            link: "#",
            scrollToIndex: 1,
            onClick: closeNav,
          },
          {
            name: "About",
            link: "#",
            scrollToIndex: 2,
            onClick: closeNav,
          },
          {
            name: "Portfolio",
            link: "#",
            scrollToIndex: 3,
            onClick: closeNav,
          },
          {
            name: "Price",
            link: "#",
            scrollToIndex: 4,
            onClick: closeNav,
          },
          {
            name: "Contact",
            link: "#",
            scrollToIndex: 5,
            onClick: closeNav,
          },
          {
            name: "Blog",
            link: "#",
            scrollToIndex: 6,
            onClick: closeNav,
          },
        ],
      },
      navContactToggleComponentProps: {
        toggleAtomProps: {
          onClick: handleToggle,
        },
      },
      isNavOpen: isNavOpen,
    },
    mainHeroModuleProps,
    mainServicesModuleProps,
    mainAboutModuleProps,
    mainPortfolioModuleProps: mainDarkPortfolioModuleProps,
    mainPricingModuleProps,
    mainContactModuleProps,
    mainBlogModuleProps,
  };

  return <MainTemplate {...mainTemplateProps} />;
};
