import Image from "next/image";

import { ProjectDetailsPanelComponent } from "~/components/Components/ProjectDetailsPanelComponent/ProjectDetailsPanelComponent";
import { ProjectFeatureHighlightsComponent } from "~/components/Components/ProjectFeatureHighlightsComponent/ProjectFeatureHighlightsComponent";

import styles from "./LightSingleProjectContentModule.module.css";
import Link from "next/link";

type Props = {
  projectFeatureHighlightsComponentProps: React.ComponentProps<
    typeof ProjectFeatureHighlightsComponent
  >;
  projectDetailsPanelComponentProps: React.ComponentProps<
    typeof ProjectDetailsPanelComponent
  >;
};

export const SingleProjectContentModule = (props: Props) => {
  return (
    <div className='grid gap-10 rounded-[1rem] bg-[--background3] px-4 py-24 lg:px-24'>
      <div className={styles.panel}>
        <Image
          src='/assets/project1.png'
          width={1000}
          height={0}
          alt=''
          objectFit='cover'
          className={styles.pic}
          style={{ width: "100%", height: "auto" }}
        />

        <div className={`${styles.text} mt-20 flex flex-col lg:flex-row`}>
          <div className='flex flex-col gap-8'>
            <div className='flow'>
              <h3 className='font-medium'>The First layer.</h3>
              <p>
                We create everything digital, printable and analytical won’t
                seasons, appear days them stars replenish divided. All second
                forth. Him place was seas man and gathering creepeth called fly.
              </p>
              <p>
                Now there is more fashion. There is no so-called trends. Now
                chase after anything not necessary — nor for fashionable color
                nor the shape, nor for style. Think about the content that you
                want to invest in a created object, and only then will form. The
                thing is your spirit.
              </p>
              <div className='flow'>
                <h5 className='text-base leading-7 lg:text-lg'>
                  Here choose yourself like that, without any looking back, do
                  your personal, home, small fashion, and all will be well.
                </h5>
                <p>
                  We create everything digital, printable and analytical won’t
                  seasons, appear days them stars replenish divided. All second
                  forth. Him place was seas man and gathering creepeth called
                  fly.
                </p>
              </div>
            </div>
            <ProjectFeatureHighlightsComponent
              {...props.projectFeatureHighlightsComponentProps}
            />
          </div>
        </div>

        <div className={`${styles.sidebar} mt-20 lg:sticky lg:top-0`}>
          <div className='rounded-md border border-solid border-[--border3] bg-[--background5] p-10 pr-32'>
            <ProjectDetailsPanelComponent
              {...props.projectDetailsPanelComponentProps}
            />
          </div>
        </div>
      </div>

      <div className='grid gap-8 border-b border-b-[--border2] pb-14 lg:auto-cols-[1fr] lg:grid-flow-col'>
        <Image
          src='/assets/project2.png'
          width={5000}
          height={0}
          alt=''
          objectFit='cover'
          style={{ width: "100%", height: "auto" }}
        />

        <Image
          src='/assets/project3.png'
          width={5000}
          height={0}
          alt=''
          objectFit='cover'
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className='flex justify-between'>
        <Link
          href='#'
          className='text-sm uppercase tracking-wide hover:text-[--primary]'
        >
          &larr; Previous
        </Link>
        <Link
          href='#'
          className='text-sm uppercase tracking-wide hover:text-[--primary]'
        >
          Next &rarr;
        </Link>
      </div>
    </div>
  );
};
