import Link from "next/link";
import { usePathname } from "next/navigation";
import { Image } from "antd";

export function LogoAtom() {
  const pathname = usePathname();

  if (pathname === "/light") {
    return (
      <div>
        <Link href='#0'>
          <Image
            src='assets/logo-dark.png'
            alt='Logo'
            width={60}
            preview={false}
          />
        </Link>
      </div>
    );
  }

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
