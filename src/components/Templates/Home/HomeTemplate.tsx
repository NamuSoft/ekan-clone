import { ConfigProvider, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { type ComponentToken } from "antd/es/button/style";
import { type AliasToken } from "antd/es/theme/internal";

import { HomeContentModule } from "~/components/Modules/Home/HomeContentModule";
import { HomeHeaderModule } from "~/components/Modules/Home/HomeHeaderModule";
import { HomeFooterModule } from "~/components/Modules/Home/HomeFooterModule";

import { LoaderComponent } from "~/components/Components/LoaderComponent/LoaderComponent";

import { LinesAtom } from "~/components/Atoms/LinesAtom/LinesAtom";
import { CustomCursorAtom } from "~/components/Atoms/CustomCursorAtom/CustomCursorAtom";

import "~/styles/dark.css";

type Props = {
  buttonThemeProps: Partial<ComponentToken> & Partial<AliasToken>;
  homeContentModuleProps: React.ComponentProps<typeof HomeContentModule>;
  linesAtomProps: React.ComponentProps<typeof LinesAtom>;
};

export const HomeTemplate = ({
  buttonThemeProps,
  homeContentModuleProps,
  linesAtomProps,
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
        className='m-auto overflow-x-hidden bg-[--background] font-sora sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1280px]'
      >
        <LoaderComponent />
        <CustomCursorAtom />
        <LinesAtom {...linesAtomProps} />

        <Header className='relative z-50 bg-transparent py-[1.8rem]'>
          <HomeHeaderModule />
        </Header>

        <Content className='z-[2] flex items-center justify-center py-[6rem]'>
          <HomeContentModule {...homeContentModuleProps} />
        </Content>

        <Footer className='z-[2] bg-transparent'>
          <HomeFooterModule />
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};
