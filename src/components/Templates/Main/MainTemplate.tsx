import { ConfigProvider, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

import { CustomCursorAtom } from "~/components/Atoms/CustomCursorAtom/CustomCursorAtom";
import { LoaderComponent } from "~/components/Components/LoaderComponent/LoaderComponent";
import { LinesAtom } from "~/components/Atoms/LinesAtom/LinesAtom";
import { MainContentModules } from "~/components/Modules/Main/MainContentModules";
import { MainHeaderModule } from "~/components/Modules/Main/MainHeaderModule";

type Props = {
  buttonThemeProps: {
    defaultActiveBorderColor: string;
    defaultHoverBorderColor: string;
    defaultHoverColor: string;
  };
  linesAtomProps: React.ComponentProps<typeof LinesAtom>;
  mainContentModuleProps: React.ComponentProps<typeof MainContentModules>;
};

export const MainTemplate = ({
  buttonThemeProps,
  linesAtomProps,
  mainContentModuleProps,
}: Props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            ...buttonThemeProps,
          },
        },
      }}
    >
      <Layout
        style={{ height: "100vh" }}
        className='m-auto overflow-x-hidden bg-background font-sora dark:bg-backgroundDark sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1280px]'
      >
        <LoaderComponent />
        <CustomCursorAtom />
        <LinesAtom {...linesAtomProps} />

        <Header className='relative z-50 bg-transparent py-[1.8rem]'>
          <MainHeaderModule />
        </Header>

        <Content>
          <MainContentModules {...mainContentModuleProps} />
        </Content>

        {/* <Footer className='z-[2] bg-transparent'>
            
          </Footer> */}
      </Layout>
    </ConfigProvider>
  );
};
