import Link from "next/link";

import { FadeInAtom } from "~/components/Atoms/Animation/FadeInAtom/FadeInAtom";
import { ContactUsFormComponent } from "~/components/Components/ContactUsFormComponent/ContactUsFormComponent";
import { SocialTextsComponent } from "~/components/Components/SocialTextsComponent/SocialTextsComponent";

type Props = {
  socialTextsComponentProps: React.ComponentProps<typeof SocialTextsComponent>;
  contactUsFormComponentProps: React.ComponentProps<
    typeof ContactUsFormComponent
  >;
};

export function MainContactModule(props: Props) {
  return (
    <div
      className='grid gap-4 border-b border-solid border-b-[--border2] bg-[--background3] px-4 py-24 lg:grid-cols-[41.67%,1fr] lg:px-12'
      data-scroll-index='5'
    >
      <FadeInAtom className='mb-10 lg:mb-0'>
        <div className='flow'>
          <h6 className='uppercase tracking-wide opacity-70'>Get In Touch</h6>
          <h2 className='text-3xl md:text-5xl'>
            Let us make your brand brilliant!
          </h2>
          <p className='text-base'>
            If you would like to work with us or just want to get in touch, we’d
            love to hear from you!
          </p>
          <div className='text-3xl font-semibold underline '>
            <Link href='#0' className='text-[--text]'>
              +1 840 841 25 69
            </Link>
          </div>
        </div>

        <div className='mt-16'>
          <SocialTextsComponent {...props.socialTextsComponentProps} />
        </div>
      </FadeInAtom>

      <FadeInAtom>
        <ContactUsFormComponent {...props.contactUsFormComponentProps} />
      </FadeInAtom>
    </div>
  );
}
