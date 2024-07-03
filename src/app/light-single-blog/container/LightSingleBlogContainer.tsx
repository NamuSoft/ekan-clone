import { useState } from "react";

import { useTitle } from "~/hooks/useTitle";
import {
  utilityModulesProps,
  singleBlogContentModuleProps,
} from "~/utils/data";
import { SingleBlogTemplate } from "~/components/Templates/SingleBlog/SingleBlogTemplate";

import "~/styles/light.css";

export const LightSingleBlogContainer = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  useTitle("Gavi - Light");

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleToggle = () => {
    setIsNavOpen((prev) => !prev);
  };

  const singleBlogTemplateProps: React.ComponentProps<
    typeof SingleBlogTemplate
  > = {
    inputThemeProps: {
      activeBg: "transparent",
      hoverBg: "transparent",
      hoverBorderColor: "none",
      activeBorderColor: "black",
      colorTextPlaceholder: "#00000033",
      colorText: "#000000",
    },
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
    singleBlogContentModuleProps,
  };

  return <SingleBlogTemplate {...singleBlogTemplateProps} />;
};
