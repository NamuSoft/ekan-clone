import { SocialIconAtom } from "~/components/Atoms/SocialIconAtom/SocialIconAtom";

type Props = {
  socialLinks: React.ComponentProps<typeof SocialIconAtom>[];
  className?: string;
};

export function SocialIconsComponent(props: Props) {
  return (
    <ul className='flex'>
      {props.socialLinks.map((social, index) => {
        return (
          <SocialIconAtom key={index} {...social} className={props.className} />
        );
      })}
    </ul>
  );
}
