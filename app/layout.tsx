import type { Metadata } from "next";
import { Cormorant_Garamond, Caveat, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const hand = Caveat({
  variable: "--font-hand",
  weight: ["400", "600"],
  subsets: ["latin"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A little sky, just for you",
  description: "Every star is a moment we shared.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${hand.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
