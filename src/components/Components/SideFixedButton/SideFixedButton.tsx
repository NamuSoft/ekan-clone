import { useSmoothScrollNav } from "~/hooks/useSmoothScroll";
import styles from "./SideFixedButton.module.css";

export function SideFixedButton() {
  const { navRef } = useSmoothScrollNav();

  return (
    <div className={styles.contactBtn}>
      <div ref={navRef} className={styles.btnPresv}>
        <a href='#0' className={styles.btn} data-scroll-nav='5'>
          <span className='text-[rgb(33, 37, 41)] text-sm'>Contact Us</span>
        </a>
      </div>
    </div>
  );
}
