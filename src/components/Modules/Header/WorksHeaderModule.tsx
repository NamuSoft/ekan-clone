import { useSnapshot } from "valtio";
import { motion } from "framer-motion";

import { NavMenuListComponent } from "~/components/Components/NavMenuListComponent/NavMenuListComponent";
import { LogoAtom } from "~/components/Atoms/LogoAtom/LogoAtom";
import { ToggleAtom } from "~/components/Atoms/ToggleAtom/ToggleAtom";

import NavbarStore from "~/store/NavbarStore";

type Props = {
  navMenuListComponentProps: React.ComponentProps<typeof NavMenuListComponent>;
};

export function WorksHeaderModule(props: Props) {
  const { open } = useSnapshot(NavbarStore.state);

  const variants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className='flex flex-1 items-center justify-between'>
      <LogoAtom />

      <div>
        <motion.div
          initial='hidden'
          animate={open ? "visible" : "hidden"}
          variants={variants}
          transition={{ type: "tween", ease: "easeInOut" }}
          className='absolute right-0 top-0 mt-0 w-full border-b-2 border-solid border-b-[--border] bg-[--background2] pb-10 pt-20 lg:hidden'
        >
          <NavMenuListComponent {...props.navMenuListComponentProps} />
        </motion.div>

        <div className='hidden lg:block'>
          <NavMenuListComponent
            {...props.navMenuListComponentProps}
            className='lg:relative lg:flex lg:flex-row lg:pl-[0.25rem] lg:pr-10 lg:text-xs'
          />
        </div>
      </div>

      <div className='lg:hidden'>
        <ToggleAtom onClick={() => NavbarStore.toggle()} />
      </div>
    </div>
  );
}
