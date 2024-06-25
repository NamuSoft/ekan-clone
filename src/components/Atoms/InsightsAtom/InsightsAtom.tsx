import Image from "next/image";

import styles from "./InsightsAtom.module.css";

type Props = {
  imageUrl: string;
  title: string;
  description: string;
};

export function InsightsAtom({ imageUrl, title, description }: Props) {
  return (
    <div className={`flow relative mb-7 px-7 py-10 ${styles.services}`}>
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
}
