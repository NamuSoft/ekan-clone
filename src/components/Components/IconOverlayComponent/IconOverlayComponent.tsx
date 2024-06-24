import { IconAtom } from "~/components/Atoms/IconAtom/IconAtom";

type Props = {
  Icons: Array<React.ComponentProps<typeof IconAtom>>;
};

export function IconOverlayComponent({ Icons }: Props) {
  return Icons.map((icon) => <IconAtom key={icon.imageUrl} {...icon} />);
}
