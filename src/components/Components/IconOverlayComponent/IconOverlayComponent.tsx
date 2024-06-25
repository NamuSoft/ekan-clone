import { ImageIconAtom } from "~/components/Atoms/ImageIconAtom/ImageIconAtom";

type Props = {
  icons: Array<React.ComponentProps<typeof ImageIconAtom>>;
};

export function IconOverlayComponent(props: Props) {
  return props.icons.map((icon) => (
    <ImageIconAtom key={icon.imageUrl} {...icon} />
  ));
}
