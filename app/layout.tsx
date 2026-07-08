import type { Metadata } from "next";
import { Cormorant_Garamond, Caveat, Inter } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  weight: ["400", "500", "600"],
  subsets: ["latin", "latin-ext"], // latin-ext = diacriticele românești ș ț ă â î
});

const hand = Caveat({
  variable: "--font-hand",
  weight: ["400", "600"],
  subsets: ["latin", "latin-ext"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
});

const SITE = "https://friend-webpage.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Un cer, doar pentru tine",
  description: "Fiecare stea e o clipă pe care am trăit-o împreună.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Pentru Petru 🌌",
    description: "Fiecare stea e o clipă pe care am trăit-o împreună.",
    images: ["/og.jpg"],
    type: "website",
    locale: "ro_RO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pentru Petru 🌌",
    description: "Fiecare stea e o clipă pe care am trăit-o împreună.",
    images: ["/og.jpg"],
  },
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
