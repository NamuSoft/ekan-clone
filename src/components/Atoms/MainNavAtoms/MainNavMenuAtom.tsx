import {
  BehanceOutlined,
  DribbbleOutlined,
  GithubOutlined,
  LinkedinFilled,
} from "@ant-design/icons";
import { motion } from "framer-motion";

import { MainNavMenuList } from "./MainNavMenuList";

type Props = {
  isNavOpen: boolean;
  closeNav: () => void;
};

export function MainNavMenuAtom({ isNavOpen, closeNav }: Props) {
  const variants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div>
      <motion.div
        initial='hidden'
        animate={isNavOpen ? "visible" : "hidden"}
        variants={variants}
        transition={{ type: "tween", ease: "easeInOut" }}
        className='absolute right-0 top-0 mt-0 w-full border-b-2 border-solid border-b-[--border] bg-[--background2] pb-10 pt-20'
      >
        <MainNavMenuList closeNav={closeNav} />
      </motion.div>
      <div className='hidden lg:block'>
        <ul className='flex'>
          <li className='mx-0.5 my-0 h-10 w-10 rounded-full border border-solid border-[--border2] text-center text-xs leading-10'>
            <a href='#0'>
              <BehanceOutlined />
            </a>
          </li>
          <li className='mx-0.5 my-0 h-10 w-10 rounded-full border border-solid border-[--border2] text-center text-xs leading-10'>
            <a href='#0'>
              <GithubOutlined />
            </a>
          </li>
          <li className='mx-0.5 my-0 h-10 w-10 rounded-full border border-solid border-[--border2] text-center text-xs leading-10'>
            <a href='#0'>
              <LinkedinFilled />
            </a>
          </li>
          <li className='mx-0.5 my-0 h-10 w-10 rounded-full border border-solid border-[--border2] text-center text-xs leading-10'>
            <a href='#0'>
              <DribbbleOutlined />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
