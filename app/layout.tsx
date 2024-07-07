import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const OpenSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Blog",
  description: "My Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={OpenSans.className}>{children}</body>
    </html>
  );
}
