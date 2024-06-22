import { ConfigProvider, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { type ComponentToken } from "antd/es/button/style";
import { type AliasToken } from "antd/es/theme/internal";

import { MainContentModules } from "~/components/Modules/Main/MainContentModules";
import { MainHeaderModule } from "~/components/Modules/Main/MainHeaderModule";

import { LoaderComponent } from "~/components/Components/LoaderComponent/LoaderComponent";

import { CustomCursorAtom } from "~/components/Atoms/CustomCursorAtom/CustomCursorAtom";
import { LinesAtom } from "~/components/Atoms/LinesAtom/LinesAtom";
import { MainHeroModule } from "~/components/Modules/Main/MainHeroModule";

type Props = {
  buttonThemeProps: Partial<ComponentToken> & Partial<AliasToken>;
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
        style={{ height: "100%" }}
        className='mx-auto w-full overflow-x-hidden bg-[--background] px-[0.75rem] font-sora sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1280px]'
      >
        <LoaderComponent />
        <CustomCursorAtom />
        <LinesAtom {...linesAtomProps} />

        <Header
          className='z-50 flex items-center bg-transparent text-[--text]'
          style={{
            paddingInline: 0,
            paddingBlock: 50,
          }}
        >
          <MainHeaderModule />
        </Header>

        <Content className='z-[2] text-[--text]'>
          <MainHeroModule />
          <MainContentModules {...mainContentModuleProps} />
        </Content>

        {/* <Footer className='z-[2] bg-transparent'>
            
          </Footer> */}
      </Layout>
    </ConfigProvider>
  );
};
