import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "T SOURCED | Garments & Custom Apparel Manufacturing",
  description: "Premium apparel production partner for streetwear brands, shops, and dropshippers.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={interTight.variable}>
      <body className="font-sans antialiased bg-[#fdfdfd] text-navy selection:bg-orange selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}