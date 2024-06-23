import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import styles from "./PortfolioWorkAtom.module.css";

type Props = {
  portfolios: Array<{
    imageUrl: string;
    title: string;
  }>;
};

export function PortfolioWorkAtom({ portfolios }: Props) {
  return (
    <div className='grid gap-4 md:grid-cols-[repeat(2,1fr)]'>
      {portfolios.map((portfolio, index) => {
        const { imageUrl, title } = portfolio;
        return (
          <motion.div
            key={`${title}-${index}`}
            className={`mt-12 ${styles.portfolio}`}
            initial={{ opacity: 0, transform: "translate3d(0, 100%, 0)" }}
            whileInView={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
            transition={{ ease: "linear", duration: 1.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.img}>
              <Link href=''>
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
                  <Link href=''>{title}</Link>
                </h5>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
