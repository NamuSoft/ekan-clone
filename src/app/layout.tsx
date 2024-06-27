import { type Metadata } from "next";

import "~/styles/globals.css";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Gavi",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='font-sora'>
      <body>{children}</body>
    </html>
  );
}
