import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";

export const HomeContainer = () => {
  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    homeContentModuleProps: {
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
      preferredTheme: "dark",
    },
    linesAtomProps: { numberOfLines: 5 },
  };

  return <HomeTemplate {...homeTemplateProps} />;
};
