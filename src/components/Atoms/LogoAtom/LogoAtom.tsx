"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Image } from "antd";

export function LogoAtom() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div />;

  if (theme === "dark") {
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
