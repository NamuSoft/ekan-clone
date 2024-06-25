import Image from "next/image";

import { IconOverlayComponent } from "~/components/Components/IconOverlayComponent/IconOverlayComponent";
import { SocialIconsComponent } from "../SocialIconsComponent/SocialIconsComponent";

type Props = {
  iconOverlayComponentProps: React.ComponentProps<typeof IconOverlayComponent>;
  SocialIconsComponentProps: React.ComponentProps<typeof SocialIconsComponent>;
};

export function HeroProfileComponent(props: Props) {
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
            <IconOverlayComponent {...props.iconOverlayComponentProps} />
          </div>

          <div className='mt-8 text-center'>
            <h5 className='text-lg font-medium leading-[1.3] text-[--text] md:text-2xl'>
              Pablo Gavi
            </h5>
            <p className='text-sm uppercase text-[--text2]'>
              Available For Freelance
            </p>
          </div>

          <div className='mt-5 flex justify-center'>
            <SocialIconsComponent
              {...props.SocialIconsComponentProps}
              className='rounded-lg'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
