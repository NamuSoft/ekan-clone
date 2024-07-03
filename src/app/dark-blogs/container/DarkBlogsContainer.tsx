import { useState } from "react";

import { useTitle } from "~/hooks/useTitle";
import { utilityModulesProps, blogsContentModuleProps } from "~/utils/data";
import { BlogsTemplate } from "~/components/Templates/Blogs/BlogsTemplate";

import "~/styles/dark.css";

export const DarkBlogsContainer = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  useTitle("Gavi - Dark");

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleToggle = () => {
    setIsNavOpen((prev) => !prev);
  };

  const blogsTemplateProps: React.ComponentProps<typeof BlogsTemplate> = {
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
    blogsContentModuleProps,
  };

  return <BlogsTemplate {...blogsTemplateProps} />;
};
