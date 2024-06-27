import { Button } from "antd";

import styles from "./ProfileInfoComponent.module.css";

export function ProfileInfoComponent() {
  return (
    <div className='relative rounded-[0_0_1rem_1rem] bg-[--background3] px-4 py-20 lg:w-[66.66666667%] lg:flex-[0_0_auto] lg:rounded-[0_1rem_1rem_0] lg:px-10'>
      <h1>
        Hello, I’m <span className='text-[--primary]'>Pablo Gavi</span>,
        Front-end Developer and{" "}
        <span className={styles.ball}>
          UX / UI Designer
          <i />
        </span>{" "}
        Based in California.
      </h1>
      <div className='mt-20 lg:after:absolute lg:after:bottom-[-4.75rem] lg:after:left-[-0.5rem] lg:after:h-0 lg:after:w-0 lg:after:border-r-[5rem] lg:after:border-t-[4.75rem] lg:after:border-solid lg:after:border-r-transparent lg:after:border-t-[--background3] lg:after:content-[""]'>
        <div className='block lg:flex lg:items-center'>
          <div className='mb-8 mr-5 lg:mb-0 lg:mr-10'>
            <div className='flex items-center'>
              <h2 className='text-5xl lg:text-7xl'>14</h2>
              <p className='pl-5'>
                Years <br /> of Experance
              </p>
            </div>
          </div>
          <div className='mb-8 mr-5 lg:mb-0 lg:mr-10'>
            <div className='flex items-center'>
              <h2 className='text-5xl lg:text-7xl'>6k</h2>
              <p className='pl-5'>
                Clients <br /> Worldwide
              </p>
            </div>
          </div>
          <div>
            <Button
              type='default'
              className='transform-none border-[--text] bg-transparent px-9 py-6 text-[--text]'
            >
              Download C.V
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
