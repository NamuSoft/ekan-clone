import { ConfigProvider, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

import { HomeContentModule } from "~/components/Modules/Home/HomeContentModule";
import { HomeHeaderModule } from "~/components/Modules/Home/HomeHeaderModule";
import { HomeFooterModule } from "~/components/Modules/Home/HomeFooterModule";

import { LinesAtom } from "~/components/Atoms/LinesAtom/LinesAtom";
import { LoaderComponent } from "~/components/Components/LoaderComponent/LoaderComponent";
import { CustomCursorAtom } from "~/components/Atoms/CustomCursorAtom/CustomCursorAtom";

type Props = {
  homeContentModuleProps: React.ComponentProps<typeof HomeContentModule>;
  linesAtomProps: React.ComponentProps<typeof LinesAtom>;
};

export const HomeTemplate = ({
  homeContentModuleProps,
  linesAtomProps,
}: Props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultActiveBorderColor: "#ffffff",
            defaultHoverBorderColor: "#ffffff",
            defaultHoverColor: "#000000",
          },
        },
      }}
    >
      <Layout
        style={{ height: "100%" }}
        className='bg-background dark:bg-backgroundDark m-auto overflow-x-hidden font-sora sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1280px]'
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
