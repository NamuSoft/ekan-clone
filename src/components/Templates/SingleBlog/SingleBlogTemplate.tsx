import { ConfigProvider, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { type ComponentToken as InputComponentToken } from "antd/es/input/style";
import { type AliasToken } from "antd/es/theme/internal";

import { WorksUtilityModules } from "~/components/Modules/Utility/WorksUtilityModules";
import { WorksHeaderModule } from "~/components/Modules/Header/WorksHeaderModule";
import { HomeFooterModule } from "~/components/Modules/Footer/HomeFooterModule";
import { SingleBlogContentModule } from "~/components/Modules/SingleBlog/SingleBlogContentModule";

type Props = {
  inputThemeProps: Partial<InputComponentToken> & Partial<AliasToken>;
  worksUtilityModulesProps: React.ComponentProps<typeof WorksUtilityModules>;
  worksHeaderModuleProps: React.ComponentProps<typeof WorksHeaderModule>;
  singleBlogContentModuleProps: React.ComponentProps<
    typeof SingleBlogContentModule
  >;
};

export const SingleBlogTemplate = (props: Props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            ...props.inputThemeProps,
          },
        },
      }}
    >
      <Layout
        style={{ height: "100%" }}
        className='mx-auto w-full overflow-x-hidden bg-[--background] px-[0.75rem] font-sora sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1280px]'
      >
        <WorksUtilityModules {...props.worksUtilityModulesProps} />

        <Header
          className='z-50 flex items-center bg-transparent text-[--text]'
          style={{
            paddingInline: 0,
            paddingBlock: 50,
          }}
        >
          <WorksHeaderModule {...props.worksHeaderModuleProps} />
        </Header>

        <Content className='z-[2] text-[--text]'>
          <SingleBlogContentModule {...props.singleBlogContentModuleProps} />
        </Content>

        <Footer className='z-[2] bg-transparent'>
          <HomeFooterModule />
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};
