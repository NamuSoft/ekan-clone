import styles from "./LoaderComponent.module.css";

export function LoaderComponent() {
  return (
    <div className=' fixed inset-0 z-[9999] my-auto flex h-[100vh] items-center justify-center bg-black'>
      <div className={styles.text}>
        <p className='text-3xl uppercase tracking-[1rem]'>Loading</p>
      </div>
    </div>
  );
}
