import { AboutHeaderAtom } from "~/components/Atoms/AboutAtoms/AboutHeaderAtom";
import { AboutSkillAtom } from "~/components/Atoms/AboutAtoms/AboutSkillAtom";

type Props = {
  aboutSkillAtomProp: React.ComponentProps<typeof AboutSkillAtom>;
};

export function MainAboutComponent({ aboutSkillAtomProp }: Props) {
  return (
    <div
      className='border-b border-solid border-b-[--border2] bg-[--background3] px-4 py-24 lg:px-12'
      data-scroll-index='2'
    >
      <div className='flex flex-wrap gap-20'>
        <AboutHeaderAtom />
        <AboutSkillAtom {...aboutSkillAtomProp} />
      </div>
    </div>
  );
}
