import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RudraDhara Developers | Luxury Homes & Real Estate in Surat",
  description:
    "Build your dream home with RudraDhara Developers. Premium residential projects in Surat featuring luxury 1, 2 & 3 BHK apartments with world-class amenities.",
  keywords: "real estate, Surat, luxury homes, apartments, RudraDhara, 1BHK, 2BHK, 3BHK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-body), Inter, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
