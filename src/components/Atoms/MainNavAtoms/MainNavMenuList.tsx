import { useSmoothScrollNav } from "~/hooks/useSmoothScroll";

type Prop = {
  closeNav?: () => void;
};

export function MainNavMenuList({ closeNav }: Prop) {
  const { navRef } = useSmoothScrollNav();

  return (
    <div className='flex justify-center lg:justify-end'>
      <nav ref={navRef}>
        <ul className='py-5 text-center text-base uppercase lg:relative lg:ml-20 lg:flex lg:w-[calc(100%_-_5rem)] lg:flex-row lg:rounded-[1rem_1rem_0_0] lg:bg-[--background3] lg:pl-[0.25rem] lg:pr-10 lg:text-xs lg:after:absolute lg:after:bottom-0 lg:after:left-[-4.375rem] lg:after:h-0 lg:after:w-0 lg:after:border-b-[4.5rem] lg:after:border-l-[4.5rem] lg:after:border-solid lg:after:border-b-[--background3] lg:after:border-l-transparent lg:after:content-[""]'>
          <li className='px-[1rem] py-2.5'>
            <a href='0#' onClick={closeNav}>
              Home
            </a>
          </li>
          <li className='px-[1rem] py-2.5'>
            <a href='#0' onClick={closeNav} data-scroll-nav='1'>
              Services
            </a>
          </li>
          <li className='px-[1rem] py-2.5'>
            <a href='#0' onClick={closeNav} data-scroll-nav='2'>
              About
            </a>
          </li>
          <li className='px-[1rem] py-2.5'>
            <a href='#0' onClick={closeNav} data-scroll-nav='3'>
              portfolio
            </a>
          </li>
          <li className='px-[1rem] py-2.5'>
            <a href='#0' onClick={closeNav} data-scroll-nav='4'>
              price
            </a>
          </li>
          <li className='px-[1rem] py-2.5'>
            <a href='#0' onClick={closeNav} data-scroll-nav='5'>
              contact
            </a>
          </li>
          <li className='px-[1rem] py-2.5'>
            <a href='#0' onClick={closeNav} data-scroll-nav='6'>
              blog
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
