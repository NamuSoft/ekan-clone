import { HeroProfileAtom } from "~/components/Atoms/HeroAtoms/HeroProfileAtom";
import { ProfileInfoAtom } from "~/components/Atoms/HeroAtoms/ProfileInfoAtom";

export function MainHeroComponent() {
  return (
    <div className='flex flex-wrap'>
      <HeroProfileAtom />
      <ProfileInfoAtom />
    </div>
  );
}
