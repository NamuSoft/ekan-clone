import { Button } from "antd";

import styles from "./PricingOptionAtom.module.css";

type Props = {
  title: string;
  price: number;
  features: string[];
};

export function PricingOptionAtom(props: Props) {
  return (
    <div className='relative'>
      <div className={styles.option}>
        <div className='mt-[30%] flex flex-1 flex-col gap-12 lg:mt-[40%]'>
          <div className='flex items-end border-b border-[--border] pb-12'>
            <h1 className='text-[--primary]'>${props.price}</h1>
            <p className='ml-3 text-xl'>/ hour</p>
          </div>
          <div>
            <ul className='flow'>
              {props.features.map((feature, index2) => (
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
              className='w-full border-[--text] bg-transparent py-6 uppercase text-[--text]'
            >
              Get started
            </Button>
          </div>
        </div>
      </div>
      <h5 className='absolute inset-0 mx-auto flex h-8 w-1/2 items-center justify-center rounded-full bg-[--primary] text-center uppercase'>
        {props.title}
      </h5>
    </div>
  );
}
