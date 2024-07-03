import { ImageIconAtom } from "~/components/Atoms/ImageIconAtom/ImageIconAtom";

type Props = {
  Icons: React.ComponentProps<typeof ImageIconAtom>[];
};

export function IconOverlayComponent(props: Props) {
  return props.Icons.map((icon) => (
    <ImageIconAtom key={icon.imageUrl} {...icon} />
  ));
}
