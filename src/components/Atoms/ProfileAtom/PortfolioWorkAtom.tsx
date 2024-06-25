import Image from "next/image";
import Link from "next/link";

import styles from "./PortfolioWorkAtom.module.css";

type Props = {
  imageUrl: string;
  title: string;
};

export function PortfolioWorkAtom({ imageUrl, title }: Props) {
  return (
    <div className={styles.portfolio}>
      <div className={styles.img}>
        <Link href='#'>
          <Image
            src={imageUrl}
            alt=''
            width={500}
            height={0}
            style={{ width: "100%", height: "100%" }}
            className='h-full w-full rounded-[0.75rem] object-cover object-[center_center]'
          />
        </Link>
      </div>

      <div className='mt-8 flex items-center px-4'>
        <div>
          <span
            className={`mb-[1rem] inline-block rounded-[2rem] border border-solid px-[1rem] py-1 text-xs transition-all duration-[0.4s] ${styles.brand}`}
          >
            Branding
          </span>
          <h5 className='text-lg font-medium leading-[1]'>
            <Link href='#'>{title}</Link>
          </h5>
        </div>
      </div>
    </div>
  );
}