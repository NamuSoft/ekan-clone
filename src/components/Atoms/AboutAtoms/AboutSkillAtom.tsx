import Image from "next/image";
import { motion } from "framer-motion";

type Prop = {
  skills: Array<{
    imageUrl: string;
    title: string;
    progress: number;
  }>;
};

export function AboutSkillAtom({ skills }: Prop) {
  return (
    <div className='grid flex-1 gap-4 md:grid-cols-[repeat(2,1fr)]'>
      {skills.map((skill) => {
        const { imageUrl, title, progress } = skill;

        return (
          <div
            key={title}
            className='flow relative rounded-xl border border-[--border] px-8 pt-8'
          >
            <div className='flex items-center justify-between'>
              <div className='img icon-img-40'>
                <Image
                  src={imageUrl}
                  alt=''
                  width={40}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div>
                <h6 className='uppercase'>{title}</h6>
              </div>
            </div>
            <div className='relative h-[0.25rem] bg-[--border2]'>
              <motion.span
                className='absolute left-0 top-0 inline-block h-full bg-[--text] transition-all duration-[1.5s]'
                initial={{ width: 0 }}
                whileInView={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 2, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </div>
            <span className='absolute right-2.5 top-2.5 inline-block rounded-[2rem] border border-solid border-[--border3] px-2.5 py-[0.25rem] text-xs'>
              {progress}%
            </span>
          </div>
        );
      })}
    </div>
  );
}
