import { MainTemplate } from "~/components/Templates/Main/MainTemplate";

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
    linesAtomProps: { numberOfLines: 5 },
    mainContentModuleProps: {
      mainServicesComponent: {
        servicesInsightsAtomProps: {
          insights: [
            {
              imageUrl: "/assets/service1.png",
              title: "UI / UX DESIGN",
              description:
                "There are many variations of passages of available but to the majority have suffered but the into majority.",
            },
            {
              imageUrl: "/assets/service2.png",
              title: "WEB DEVELOPMENT",
              description:
                "There are many variations of passages of available but to the majority have suffered but the into majority.",
            },
            {
              imageUrl: "/assets/service3.png",
              title: "SEO / MARKETING",
              description:
                "There are many variations of passages of available but to the majority have suffered but the into majority.",
            },
            {
              imageUrl: "/assets/service4.png",
              title: "TECHNOLOGY SOLUTION",
              description:
                "There are many variations of passages of available but to the majority have suffered but the into majority.",
            },
          ],
        },
      },
    },
  };

  return <MainTemplate {...mainTemplateProps} />;
};
