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
      mainAboutComponent: {
        aboutSkillAtomProp: {
          skills: [
            {
              imageUrl: "/assets/skill1.png",
              title: "UI / UX Design",
              progress: 95,
            },
            {
              imageUrl: "/assets/skill2.png",
              title: "Development",
              progress: 90,
            },
            {
              imageUrl: "/assets/skill3.png",
              title: "Graphic Design",
              progress: 85,
            },
            {
              imageUrl: "/assets/skill4.png",
              title: "WordPress",
              progress: 78,
            },
          ],
        },
        awardAtomProp: {
          awards: [
            {
              serial: 0o1,
              year: 2019,
              imageUrl: "/assets/award1.png",
              title: "02x Designer Award",
              accolade: "NOMINEE",
            },
            {
              serial: 0o2,
              year: 2020,
              imageUrl: "/assets/award2.png",
              title: "02x Designer Award",
              accolade: "WINNER",
            },
            {
              serial: 0o3,
              year: 2021,
              imageUrl: "/assets/award2.png",
              title: "02x Designer Award",
              accolade: "RUNNERS UP",
            },
          ],
        },
      },
    },
  };

  return <MainTemplate {...mainTemplateProps} />;
};
