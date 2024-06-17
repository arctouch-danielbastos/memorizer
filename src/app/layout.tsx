import { Rubik } from "next/font/google";
import localFont from "next/font/local";
import "ui/globals.scss";
import { ReactNode } from "react";
import { Metadata } from "next";
import { Providers } from "Providers";

const font = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
