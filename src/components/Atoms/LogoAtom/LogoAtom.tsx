import Link from "next/link";

import { Image } from "antd";

export function LogoAtom() {
  return (
    <div>
      <Link href='#0'>
        <Image
          src='assets/logo-light.png'
          alt='Logo'
          width={60}
          preview={false}
        />
      </Link>
    </div>
  );
}
