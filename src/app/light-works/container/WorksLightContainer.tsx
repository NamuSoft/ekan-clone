import { useState } from "react";

import { useTitle } from "~/hooks/useTitle";
import { utilityModulesProps, worksContentModuleProps } from "~/utils/data";
import { WorksTemplate } from "~/components/Templates/Works/WorksTemplate";

import "~/styles/light.css";

export const WorksLightContainer = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  useTitle("Gavi - Light");

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleToggle = () => {
    setIsNavOpen((prev) => !prev);
  };

  const worksTemplateProps: React.ComponentProps<typeof WorksTemplate> = {
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
    worksContentModuleProps,
  };

  return <WorksTemplate {...worksTemplateProps} />;
};
