import { AboutSkillComponent } from "~/components/Components/AboutSkillComponent/AboutSkillComponent";
import { FadeInAtom } from "~/components/Atoms/Animation/FadeInAtom/FadeInAtom";

import { AwardsComponent } from "../../Components/AwardsComponent/AwardsComponent";

type Props = {
  aboutSkillComponentProps: React.ComponentProps<typeof AboutSkillComponent>;
  awardsComponentProps: React.ComponentProps<typeof AwardsComponent>;
};

export function MainAboutModule(props: Props) {
  return (
    <div
      className='border-b border-solid border-b-[--border2] bg-[--background3] px-4 py-24 lg:px-12'
      data-scroll-index='2'
    >
      <div className='flex flex-wrap gap-20'>
        <FadeInAtom className='flow self-center' delay={0.2}>
          <h6 className='uppercase tracking-wide opacity-70'>Our Skills</h6>
          <h3>
            <span className='text-[--primary]'>Awards</span> &amp; Recognitions
          </h3>
        </FadeInAtom>
        <AboutSkillComponent {...props.aboutSkillComponentProps} />
      </div>
      <AwardsComponent {...props.awardsComponentProps} />
    </div>
  );
}
