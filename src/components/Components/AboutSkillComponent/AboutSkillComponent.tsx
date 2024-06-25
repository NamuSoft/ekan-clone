import { SkillAtom } from "../../Atoms/SkillAtom/SkillAtom";

type Prop = {
  skills: Array<React.ComponentProps<typeof SkillAtom>>;
};

export function AboutSkillComponent({ skills }: Prop) {
  return (
    <div className='grid flex-1 gap-4 md:grid-cols-[repeat(2,1fr)]'>
      {skills.map((skill) => (
        <SkillAtom key={skill.title} {...skill} />
      ))}
    </div>
  );
}
