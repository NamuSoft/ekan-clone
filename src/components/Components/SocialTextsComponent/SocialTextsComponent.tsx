import { SocialTextAtom } from "~/components/Atoms/SocialTextAtom/SocialTextAtom";

type Props = {
  socials: Array<React.ComponentProps<typeof SocialTextAtom>>;
};

export function SocialTextsComponent(props: Props) {
  return (
    <ul className='flex flex-wrap gap-6'>
      {props.socials.map((social) => (
        <li key={social.name}>
          <SocialTextAtom {...social} />
        </li>
      ))}
    </ul>
  );
}
