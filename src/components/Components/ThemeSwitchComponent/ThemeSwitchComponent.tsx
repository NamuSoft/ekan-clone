"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

type Props = {
  preferredTheme: "light" | "dark";
};

export function ThemeSwitchComponent({ preferredTheme }: Props) {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return;

  if (preferredTheme === "dark") setTheme("dark");

  if (preferredTheme === "light") setTheme("light");

  return null;
}
