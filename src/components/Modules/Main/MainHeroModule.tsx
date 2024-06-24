import { HeroProfileComponent } from "~/components/Components/HeroProfileComponent/HeroProfileComponent";
import { ProfileInfoComponent } from "~/components/Components/ProfileInfoComponent/ProfileInfoComponent";

type Props = {
  heroProfileComponentProps: React.ComponentProps<typeof HeroProfileComponent>;
};

export const MainHeroModule = ({ heroProfileComponentProps }: Props) => {
  return (
    <div className='flex flex-wrap'>
      <HeroProfileComponent {...heroProfileComponentProps} />
      <ProfileInfoComponent />
    </div>
  );
};
