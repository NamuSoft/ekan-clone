import {
  BehanceOutlined,
  DribbbleOutlined,
  GithubOutlined,
  LinkedinFilled,
} from "@ant-design/icons";
import Image from "next/image";

export function HeroProfileAtom() {
  return (
    <div className='mt-0 w-full max-w-full shrink-0 overflow-hidden rounded-[1rem_1rem_0_0] bg-[--background3] px-4 pb-5 pt-20 lg:-mb-20 lg:w-[33.33333333%] lg:flex-[0_0_auto] lg:rounded-[1rem_0_1rem_1rem] lg:px-10 lg:pb-20'>
      <div className='flex min-h-[calc(100%_-_5rem)] items-center rounded-[0.5rem] border border-solid border-[--border2] px-[1rem] py-10'>
        <div className='w-full'>
          <div className='relative'>
            <Image
              src={"/assets/profile.jpg"}
              alt='profile'
              width={500}
              height={0}
              style={{ width: "100%", height: "auto" }}
            />
            <span className='absolute -left-5 top-[2rem] flex h-10 w-10 rotate-[10deg] items-center justify-center rounded-xl backdrop-blur-[5px]'>
              <Image
                src={"/assets/icon1.png"}
                alt='profile'
                width={24}
                height={24}
              />
            </span>
            <span className='absolute -right-5 top-[40%] flex h-10 w-10 rotate-[15deg] items-center justify-center rounded-xl backdrop-blur-[5px]'>
              <Image
                src={"/assets/icon2.png"}
                alt='profile'
                width={24}
                height={24}
              />
            </span>
            <span className='absolute bottom-8 left-5 flex h-10 w-10 rotate-[-10deg] items-center justify-center rounded-xl backdrop-blur-[5px]'>
              <Image
                src={"/assets/icon4.png"}
                alt='profile'
                width={24}
                height={24}
              />
            </span>
          </div>
          <div className='mt-8 text-center'>
            <h5 className='text-lg font-medium leading-[1.3] text-[--text] md:text-2xl'>
              Pablo Gavi
            </h5>
            <p className='text-sm uppercase text-[--text2]'>
              Available For Freelance
            </p>
          </div>
          <div className='mt-5 text-center'>
            <a
              href='#0'
              className='mx-0.5 my-0 inline-block h-11 w-11 rounded-[0.5rem] border border-solid border-[--border] text-center text-xs leading-[2.75rem] transition-all duration-[0.4s]'
            >
              <BehanceOutlined />
            </a>
            <a
              href='#0'
              className='mx-0.5 my-0 inline-block h-11 w-11 rounded-[0.5rem] border border-solid border-[--border] text-center text-xs leading-[2.75rem] transition-all duration-[0.4s]'
            >
              <GithubOutlined />
            </a>
            <a
              href='#0'
              className='mx-0.5 my-0 inline-block h-11 w-11 rounded-[0.5rem] border border-solid border-[--border] text-center text-xs leading-[2.75rem] transition-all duration-[0.4s]'
            >
              <LinkedinFilled />
            </a>
            <a
              href='#0'
              className='mx-0.5 my-0 inline-block h-11 w-11 rounded-[0.5rem] border border-solid border-[--border] text-center text-xs leading-[2.75rem] transition-all duration-[0.4s]'
            >
              <DribbbleOutlined />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
