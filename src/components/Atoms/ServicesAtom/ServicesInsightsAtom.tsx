import Image from "next/image";

import styles from "./ServicesInsightsAtom.module.css";

type Props = {
  insights: Array<{
    imageUrl: string;
    title: string;
    description: string;
  }>;
};

export function ServicesInsightsAtom({ insights }: Props) {
  return (
    <div className='grid gap-4 md:grid-cols-[repeat(2,1fr)]'>
      {insights.map((service) => {
        const { imageUrl, description, title } = service;
        return (
          <div
            key={title}
            className={`flow flex-row-item services relative mb-7 px-7 py-10 ${styles.services}`}
          >
            <span className='relative z-[1] inline-block w-16 opacity-70'>
              <Image
                src={imageUrl}
                alt=''
                width={70}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
            </span>
            <h6 className='relative z-[1] uppercase tracking-wide'>{title}</h6>
            <p className='relative z-[1]'>{description}</p>
            <div className={styles.bord} />
          </div>
        );
      })}
    </div>
  );
}
