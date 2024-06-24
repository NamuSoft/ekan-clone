import { useState } from "react";
import { motion } from "framer-motion";

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
  const [isNavOpen, setIsNavOpen] = useState(false);

  const variants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  const handleToggle = () => {
    setIsNavOpen((prev) => !prev);
  };

  const updatedNavMenuListProps = {
    navItems: navMenuListComponentProps.navItems.map((item) => ({
      ...item,
      onClick: handleNavClose,
    })),
  };

  return (
    <div className='flex flex-1 items-center justify-between'>
      <LogoAtom />

      <div>
        <motion.div
          initial='hidden'
          animate={isNavOpen ? "visible" : "hidden"}
          variants={variants}
          transition={{ type: "tween", ease: "easeInOut" }}
          className='absolute right-0 top-0 mt-0 w-full border-b-2 border-solid border-b-[--border] bg-[--background2] pb-10 pt-20'
        >
          <NavMenuListComponent {...updatedNavMenuListProps} />
        </motion.div>

        <div className='hidden lg:block'>
          <SocialsComponent {...socialsComponentProps} />
        </div>
      </div>

      <NavContactToggleComponent onClick={handleToggle} />
    </div>
  );
}
