import { Button } from "antd";
import { motion } from "framer-motion";

import styles from "./PricingOptionAtom.module.css";

type Props = {
  options: Array<{
    title: string;
    price: number;
    features: Array<string>;
  }>;
};

export function PricingOptionAtom({ options }: Props) {
  return (
    <div className='grid gap-12 lg:auto-cols-[1fr] lg:grid-flow-col'>
      {options.map((option, index) => {
        const { price, title, features } = option;
        return (
          <motion.div
            key={`${title}-${index}`}
            className='relative'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "linear", duration: 1.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.option}>
              <div className='mt-[30%] flex flex-1 flex-col gap-12 lg:mt-[40%]'>
                <div className='flex items-end border-b border-[--border] pb-12'>
                  <h1 className='text-[--primary]'>${price}</h1>
                  <p className='ml-3 text-xl'>/ hour</p>
                </div>
                <div>
                  <ul className='flow'>
                    {features.map((feature, index2) => (
                      <li key={`${feature}-${index2}`} className='flex gap-1'>
                        <span className='text-[--primary]'>&#10003;</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Button
                    type='default'
                    className='w-full border-[--text] py-6 uppercase'
                  >
                    Get started
                  </Button>
                </div>
              </div>
            </div>
            <h5 className='absolute inset-0 mx-auto flex h-8 w-1/2 items-center justify-center rounded-full bg-[--primary] text-center uppercase'>
              {title}
            </h5>
          </motion.div>
        );
      })}
    </div>
  );
}
