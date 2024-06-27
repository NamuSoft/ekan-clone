import { PortfolioWorksComponent } from "../../Components/PortfolioWorksComponent/PortfolioWorksComponent";

type Props = {
  portfolioWorksComponentProps: React.ComponentProps<
    typeof PortfolioWorksComponent
  >;
};

export function WorksContentModule(props: Props) {
  return (
    <div
      className='grid gap-12 rounded-[2rem] bg-[--background3] px-4 py-24 lg:px-12'
      data-scroll-index='3'
    >
      <div className='flex flex-col justify-between gap-8 text-center lg:flex-row'>
        <div className='flex-1 text-center'>
          <h6 className='mb-4 uppercase tracking-wide opacity-70'>
            Our Portfolio
          </h6>
          <h3>
            Look at my <span className='text-[--primary]'>Portfolio</span>
          </h3>
        </div>
      </div>
      <PortfolioWorksComponent {...props.portfolioWorksComponentProps} />
    </div>
  );
}
