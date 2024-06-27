import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

import { HomeFooterModule } from "~/components/Modules/Footer/HomeFooterModule";
import { WorksHeaderModule } from "~/components/Modules/Header/WorksHeaderModule";
import { WorksUtilityModules } from "~/components/Modules/Utility/WorksUtilityModules";
import { WorksContentModule } from "~/components/Modules/Works/WorksContentModule";

type Props = {
  worksUtilityModulesProps: React.ComponentProps<typeof WorksUtilityModules>;
  worksHeaderModuleProps: React.ComponentProps<typeof WorksHeaderModule>;
  worksContentModuleProps: React.ComponentProps<typeof WorksContentModule>;
};

export const WorksTemplate = (props: Props) => {
  return (
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
        <WorksContentModule {...props.worksContentModuleProps} />
      </Content>

      <Footer className='z-[2] bg-transparent'>
        <HomeFooterModule />
      </Footer>
    </Layout>
  );
};
