import type { Metadata } from "next";
import { Bangers, Comic_Neue } from "next/font/google";
import HalftoneOverlay from "@/components/HalftoneOverlay";
import "./globals.css";

const bangers = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bangers",
  display: "swap",
});

const comicNeue = Comic_Neue({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-comic-neue",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shivam Singh | Comic Portfolio",
  description: "A scrollable comic book portfolio — full-stack developer, creative coder, builder.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bangers.variable} ${comicNeue.variable}`}>
      <body className="font-comic antialiased">
        <HalftoneOverlay />
        {children}
      </body>
    </html>
  );
}
