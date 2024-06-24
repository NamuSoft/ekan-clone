import { type SocialLinks } from "~/components/Components/SocialsComponent/SocialsComponent";

const navMenuListComponentProps = {
  navItems: [
    {
      name: "Home",
      link: "#",
      scrollToIndex: 1,
    },
  ],
};

const socialsComponentProps = {
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
  ] as SocialLinks,
};

export const darkLightPreviewComponentProps = {
  darkLightProps: [
    {
      imageUrl: "/assets/1.png",
      title: "Dark Mode",
      route: "/dark",
    },
    {
      imageUrl: "/assets/2.png",
      title: "Light Mode",
      route: "/light",
    },
  ],
};

export const linesComponentProps = {
  numberOfLines: 5,
};

export const utilityModulesProps = {
  linesComponentProps: { numberOfLines: 5 },
};

export const mainHeaderModuleProps = {
  socialsComponentProps,
  navMenuListComponentProps,
};

export const mainTopNavigationComponent = {
  navMenuListComponentProps,
};

export const mainHeroModuleProps = {
  heroProfileComponentProps: {
    iconOverlayComponentProps: {
      Icons: [
        {
          width: 24,
          height: 24,
          imageUrl: "/assets/icon1.png",
          className: "-left-5 top-[2rem]",
        },
        {
          width: 24,
          height: 24,
          imageUrl: "/assets/icon2.png",
          className: "-right-5 top-[40%]",
        },
        {
          width: 24,
          height: 24,
          imageUrl: "/assets/icon3.png",
          className: "left-5 bottom-8",
        },
      ],
    },
    socialsComponentProps,
  },
};
