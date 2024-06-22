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
};

export function MainNavMenuAtom({ isNavOpen }: Props) {
  const variants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div>
      <motion.nav
        initial='hidden'
        animate={isNavOpen ? "visible" : "hidden"}
        variants={variants}
        transition={{ type: "tween", ease: "easeInOut" }}
        className='absolute right-0 top-0 mt-0 w-full border-b-2 border-solid border-b-[--border] bg-[--background2] pb-10 pt-20'
      >
        <MainNavMenuList />
      </motion.nav>
      <div className='hidden lg:block'>
        <ul className='flex'>
          <li className='mx-0.5 my-0 h-10 w-10 rounded-full border border-solid border-[--border2] text-center text-xs leading-10'>
            <a href='#'>
              <BehanceOutlined />
            </a>
          </li>
          <li className='mx-0.5 my-0 h-10 w-10 rounded-full border border-solid border-[--border2] text-center text-xs leading-10'>
            <a href='#'>
              <GithubOutlined />
            </a>
          </li>
          <li className='mx-0.5 my-0 h-10 w-10 rounded-full border border-solid border-[--border2] text-center text-xs leading-10'>
            <a href='#'>
              <LinkedinFilled />
            </a>
          </li>
          <li className='mx-0.5 my-0 h-10 w-10 rounded-full border border-solid border-[--border2] text-center text-xs leading-10'>
            <a href='#'>
              <DribbbleOutlined />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
