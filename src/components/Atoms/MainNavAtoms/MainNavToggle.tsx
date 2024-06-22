import { type Dispatch, type SetStateAction } from "react";

type Props = {
  setNav: Dispatch<SetStateAction<boolean>>;
};

export function MainNavToggle({ setNav }: Props) {
  return (
    <div>
      <div
        className='relative z-[1] cursor-pointer text-[3rem] lg:hidden'
        onClick={() => setNav((prev) => !prev)}
      >
        <span className="inline-block font-[normal] normal-case not-italic leading-none before:content-['\2261']" />
      </div>
      <div className='hidden lg:block'>
        <a href='mailto:abc@example.com'>
          <span className='text-xs uppercase tracking-[2px]'>
            Gavi@website.com
          </span>
        </a>
      </div>
    </div>
  );
}
