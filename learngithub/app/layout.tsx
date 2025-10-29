import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const NunitoSansFont = Nunito_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Let's Learn Github",
  description: "A Project about learning GitHub for absolute beginners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={NunitoSansFont.className}
      >
        {children}
      </body>
    </html>
  );
}
