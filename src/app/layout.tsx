import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-heading",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["600", "700"],
  variable: "--font-accent",
});

export const metadata: Metadata = {
  title: "T SOURCED | Garments & Custom Apparel Manufacturing",
  description: "Premium apparel production partner for streetwear brands, shops, and dropshippers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jakarta.variable} ${playfair.variable}`}
    >
      <body className="font-sans antialiased bg-[#fdfdfd] text-navy selection:bg-orange selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}