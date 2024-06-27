import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function LogoAtom() {
  const pathname = usePathname();

  if (pathname.includes("light")) {
    return (
      <div className='z-[1]'>
        <Link href='#0'>
          <Image
            src='/assets/logo-dark.png'
            alt='Logo'
            width={60}
            height={0}
            style={{ height: "auto" }}
          />
        </Link>
      </div>
    );
  }

  return (
    <div className='z-[1]'>
      <Link href='#0'>
        <Image
          src='/assets/logo-light.png'
          alt='Logo'
          width={60}
          height={0}
          style={{ height: "auto" }}
        />
      </Link>
    </div>
  );
}
