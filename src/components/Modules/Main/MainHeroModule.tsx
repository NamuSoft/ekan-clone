import { HeroProfileComponent } from "~/components/Components/HeroProfileComponent/HeroProfileComponent";
import { ProfileInfoComponent } from "~/components/Components/ProfileInfoComponent/ProfileInfoComponent";

type Props = {
  heroProfileComponentProps: React.ComponentProps<typeof HeroProfileComponent>;
};

export const MainHeroModule = (props: Props) => {
  return (
    <div className='flex flex-wrap'>
      <HeroProfileComponent {...props.heroProfileComponentProps} />
      <ProfileInfoComponent />
    </div>
  );
};
