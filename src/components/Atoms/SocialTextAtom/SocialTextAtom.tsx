import Link from "next/link";

import { useHoverTranslate } from "~/hooks/useHoverTranslate";

type Props = {
  name: string;
};

export function SocialTextAtom(props: Props) {
  const { ref: spanRef } = useHoverTranslate();

  return (
    <Link href='#'>
      <span
        ref={spanRef}
        className='pointer-events-none inline-block transition-transform duration-[0.2s] ease-linear'
      >
        {props.name}
      </span>
    </Link>
  );
}
