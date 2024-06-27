import { ConfigProvider, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

import { HomeContentModule } from "~/components/Modules/Home/HomeContentModule";
import { HomeFooterModule } from "~/components/Modules/Footer/HomeFooterModule";
import { HomeHeaderModule } from "~/components/Modules/Header/HomeHeaderModule";
import { HomeUtilityModules } from "~/components/Modules/Utility/HomeUtilityModules";

type Props = {
  homeContentModuleProps: React.ComponentProps<typeof HomeContentModule>;
  homeUtilityModulesProps: React.ComponentProps<typeof HomeUtilityModules>;
};

export const HomeTemplate = (props: Props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultActiveBorderColor: "#ffffff",
            defaultActiveColor: "#000000",
            defaultHoverBorderColor: "#ffffff",
            defaultHoverColor: "#000000",
          },
        },
      }}
    >
      <Layout
        style={{ height: "100%" }}
        className='m-auto overflow-x-hidden bg-[--background] font-sora sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1280px]'
      >
        <HomeUtilityModules {...props.homeUtilityModulesProps} />

        <Header className='relative z-50 bg-transparent py-[1.8rem]'>
          <HomeHeaderModule />
        </Header>

        <Content className='z-[2] flex items-center justify-center py-[6rem]'>
          <HomeContentModule {...props.homeContentModuleProps} />
        </Content>

        <Footer className='z-[2] bg-transparent'>
          <HomeFooterModule />
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};
