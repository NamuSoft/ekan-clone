import { MainTemplate } from "~/components/Templates/Main/MainTemplate";

export const MainLightContainer = () => {
  const mainTemplateProps: React.ComponentProps<typeof MainTemplate> = {
    buttonThemeProps: {
      defaultActiveBorderColor: "#000000",
      defaultActiveColor: "#ffffff",
      defaultHoverBorderColor: "#000000",
      defaultHoverColor: "#ffffff",
    },
    linesAtomProps: { numberOfLines: 5 },
    mainContentModuleProps: {
      preferredTheme: "light",
    },
  };

  return <MainTemplate {...mainTemplateProps} />;
};
