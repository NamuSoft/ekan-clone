import { ConfigProvider, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { type ComponentToken } from "antd/es/button/style";
import { type AliasToken } from "antd/es/theme/internal";

import { MainHeaderModule } from "~/components/Modules/Header/MainHeaderModule";
import { MainHeroModule } from "~/components/Modules/Main/MainHeroModule";
import { UtilityModules } from "~/components/Modules/UtilityModules/UtilityModules";
import { MainServicesModule } from "~/components/Modules/Main/MainServicesModule";
import { MainAboutModule } from "~/components/Modules/Main/MainAboutModule";
import { MainPortfolioModule } from "~/components/Modules/Main/MainPortfolioModule";
import { MainTestimonialModule } from "~/components/Modules/Main/MainTestimonialModule";
import { MainPricingModule } from "~/components/Modules/Main/MainPricingModule";

type Props = {
  buttonThemeProps: Partial<ComponentToken> & Partial<AliasToken>;
  mainHeaderModuleProps: React.ComponentProps<typeof MainHeaderModule>;
  utilityModulesProps: React.ComponentProps<typeof UtilityModules>;
  mainHeroModuleProps: React.ComponentProps<typeof MainHeroModule>;
  mainServicesModuleProps: React.ComponentProps<typeof MainServicesModule>;
  mainAboutModuleProps: React.ComponentProps<typeof MainAboutModule>;
  mainPortfolioModuleProps: React.ComponentProps<typeof MainPortfolioModule>;
  mainPricingModuleProps: React.ComponentProps<typeof MainPricingModule>;
};

export const MainTemplate = ({
  buttonThemeProps,
  utilityModulesProps,
  mainHeaderModuleProps,
  mainHeroModuleProps,
  mainServicesModuleProps,
  mainAboutModuleProps,
  mainPortfolioModuleProps,
  mainPricingModuleProps,
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
        <UtilityModules {...utilityModulesProps} />

        <Header
          className='z-50 flex items-center bg-transparent text-[--text]'
          style={{
            paddingInline: 0,
            paddingBlock: 50,
          }}
        >
          <MainHeaderModule {...mainHeaderModuleProps} />
        </Header>

        <Content className='z-[2] text-[--text]'>
          <MainHeroModule {...mainHeroModuleProps} />
          <MainServicesModule {...mainServicesModuleProps} />
          <MainAboutModule {...mainAboutModuleProps} />
          <MainPortfolioModule {...mainPortfolioModuleProps} />
          <MainTestimonialModule />
          <MainPricingModule {...mainPricingModuleProps} />
        </Content>

        {/* <Footer className='z-[2] bg-transparent'>
            
          </Footer> */}
      </Layout>
    </ConfigProvider>
  );
};
