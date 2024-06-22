import {
  BehanceOutlined,
  DribbbleOutlined,
  GithubOutlined,
  LinkedinFilled,
  LinkedinOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

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
        className='absolute right-0 top-0 mt-0 w-full border-b-2 border-solid border-b-[--border] bg-[--loader] pb-10 pt-20'
      >
        <div className='flex justify-center'>
          <ul className='py-5 text-center text-base uppercase'>
            <li className='px-[1rem] py-2.5'>
              <a href='#'>Home</a>
            </li>
            <li className='px-[1rem] py-2.5'>
              <a href='#'>Services</a>
            </li>
            <li className='px-[1rem] py-2.5'>
              <a href='#'>About</a>
            </li>
            <li className='px-[1rem] py-2.5'>
              <a href='#'>portfolio</a>
            </li>
            <li className='px-[1rem] py-2.5'>
              <a href='#'>price</a>
            </li>
            <li className='px-[1rem] py-2.5'>
              <a href='#'>contact</a>
            </li>
            <li className='px-[1rem] py-2.5'>
              <a href='#'>blog</a>
            </li>
          </ul>
        </div>
      </motion.nav>
      <div className='hidden lg:block'>
        <ul className='flex'>
          <li className='mx-0.5 my-0 h-10 w-10 rounded-full border border-solid border-[--border2] text-center text-xs leading-10'>
            <a href=''>
              <BehanceOutlined />
            </a>
          </li>
          <li className='mx-0.5 my-0 h-10 w-10 rounded-full border border-solid border-[--border2] text-center text-xs leading-10'>
            <a href=''>
              <GithubOutlined />
            </a>
          </li>
          <li className='mx-0.5 my-0 h-10 w-10 rounded-full border border-solid border-[--border2] text-center text-xs leading-10'>
            <a href=''>
              <LinkedinFilled />
            </a>
          </li>
          <li className='mx-0.5 my-0 h-10 w-10 rounded-full border border-solid border-[--border2] text-center text-xs leading-10'>
            <a href=''>
              <DribbbleOutlined />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
