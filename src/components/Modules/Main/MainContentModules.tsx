import { MainAboutComponent } from "~/components/Components/MainOurSkillsComponent/MainAboutComponent";
import { MainPortfolioComponent } from "~/components/Components/MainPortfolioComponent/MainPortfolioComponent";
import { MainPricingComponent } from "~/components/Components/MainPrcingComponent/MainPricingComponent";
import { MainServicesComponent } from "~/components/Components/MainServicesComponent/MainServicesComponent";
import { MainTestimonialComponent } from "~/components/Components/MainTestimonialComponent/MainTestimonialComponent";
import { MainTopNavigationComponent } from "~/components/Components/MainTopNavigationComponent/MainTopNavigationComponent";

type Props = {
  mainServicesComponent: React.ComponentProps<typeof MainServicesComponent>;
  mainAboutComponent: React.ComponentProps<typeof MainAboutComponent>;
  mainPortfolioComponent: React.ComponentProps<typeof MainPortfolioComponent>;
  mainPricingComponent: React.ComponentProps<typeof MainPricingComponent>;
  mainTopNavigationComponent: React.ComponentProps<
    typeof MainTopNavigationComponent
  >;
};

export const MainContentModules = ({
  mainServicesComponent,
  mainAboutComponent,
  mainPortfolioComponent,
  mainPricingComponent,
  mainTopNavigationComponent,
}: Props) => {
  return (
    <div>
      <MainTopNavigationComponent {...mainTopNavigationComponent} />
      <MainServicesComponent {...mainServicesComponent} />
      <MainAboutComponent {...mainAboutComponent} />
      <MainPortfolioComponent {...mainPortfolioComponent} />
      <MainTestimonialComponent />
      <MainPricingComponent {...mainPricingComponent} />
    </div>
  );
};
