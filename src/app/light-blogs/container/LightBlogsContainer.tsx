import { useState } from "react";

import { useTitle } from "~/hooks/useTitle";
import {
  utilityModulesProps,
  lightBlogsContentModuleProps,
} from "~/utils/data";
import { LightBlogsTemplate } from "~/components/Templates/LightBlogs/LightBlogsTemplate";

import "~/styles/light.css";

export const LightBlogsContainer = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  useTitle("Gavi - Light");

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleToggle = () => {
    setIsNavOpen((prev) => !prev);
  };

  const lightBlogsTemplateProps: React.ComponentProps<
    typeof LightBlogsTemplate
  > = {
    worksUtilityModulesProps: utilityModulesProps,
    worksHeaderModuleProps: {
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
      toggleAtomProps: {
        onClick: handleToggle,
      },
      isNavOpen: isNavOpen,
    },
    lightBlogsContentModuleProps,
  };

  return <LightBlogsTemplate {...lightBlogsTemplateProps} />;
};
