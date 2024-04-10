import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "ui/globals.scss";
import "ui/config/index.scss";
import { ReactNode } from "react";
import { Metadata } from "next";

const font = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const icons = localFont({
  src: "./material-icons-outlined.woff2",
  variable: "--font-material-icons",
});

export const metadata: Metadata = {
  title: "Memorizer",
};

type Props = { children: ReactNode };
export default function RootLayout({ children }: Props) {
  return (
    <html className={`${font.variable} ${icons.variable}`}>
      <body>{children}</body>
    </html>
  );
}
