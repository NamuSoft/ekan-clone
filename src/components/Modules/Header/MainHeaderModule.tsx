import { useSnapshot } from "valtio";
import { motion } from "framer-motion";

import NavbarStore from "~/store/NavbarStore";

import { SocialsComponent } from "~/components/Components/SocialsComponent/SocialsComponent";
import { NavMenuListComponent } from "~/components/Components/NavMenuListComponent/NavMenuListComponent";
import { NavContactToggleComponent } from "~/components/Components/NavContactToggleComponent/NavContactToggleComponent";
import { LogoAtom } from "~/components/Atoms/LogoAtom/LogoAtom";

type Props = {
  socialsComponentProps: React.ComponentProps<typeof SocialsComponent>;
  navMenuListComponentProps: React.ComponentProps<typeof NavMenuListComponent>;
};

export function MainHeaderModule({
  socialsComponentProps,
  navMenuListComponentProps,
}: Props) {
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
          <NavMenuListComponent {...navMenuListComponentProps} />
        </motion.div>

        <div className='hidden lg:block'>
          <SocialsComponent {...socialsComponentProps} />
        </div>
      </div>

      <NavContactToggleComponent onClick={() => NavbarStore.toggle()} />
    </div>
  );
}
