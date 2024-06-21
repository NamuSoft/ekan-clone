import { MainTemplate } from "~/components/Templates/Main/MainTemplate";

export const MainLightContainer = () => {
  const mainTemplateProps: React.ComponentProps<typeof MainTemplate> = {
    buttonThemeProps: {
      defaultActiveBorderColor: "#ffffff",
      defaultHoverBorderColor: "#ffffff",
      defaultHoverColor: "#000000",
    },
    linesAtomProps: { numberOfLines: 5 },
    mainContentModuleProps: {
      preferredTheme: "light",
    },
  };

  return <MainTemplate {...mainTemplateProps} />;
};
