import { Roboto } from "next/font/google";
import "ui/globals.scss";
import "ui/config/index.scss";
import { ReactNode } from "react";
import { Metadata } from "next";

const font = Roboto({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Memorizer",
};

type Props = { children: ReactNode };
export default function RootLayout({ children }: Props) {
  return (
    <html className={font.variable}>
      <body>{children}</body>
    </html>
  );
}
