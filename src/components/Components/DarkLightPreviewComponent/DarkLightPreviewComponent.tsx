import Link from "next/link";
import Image from "next/image";

import styles from "./DarkLightPreviewComponent.module.css";

type Props = {
  imageUrl: string;
  title: string;
  route: string;
};

export function DarkLightPreviewComponent({ imageUrl, title, route }: Props) {
  return (
    <div className={styles.item}>
      <div className='relative p-[2.5rem]'>
        <div className='h-[150] overflow-hidden rounded-[1rem_1rem_0_0] border border-b-0 border-solid border-[#aaa]'>
          <Link href={route} className='pointer-events-auto' target='blank'>
            <div>
              <Image
                src={imageUrl}
                alt=''
                width={500}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </Link>
        </div>
        <div className='-ml-10 h-[1.875rem] w-[calc(100%_+_5rem)] rounded-[0_0_6.25rem_6.25rem] border border-solid border-[#aaa]' />
      </div>
      <div className='text-center text-white'>
        <h3 className='text-4xl'>{title}</h3>
      </div>
    </div>
  );
}
