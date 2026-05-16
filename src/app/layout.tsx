import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Using Outfit for a premium, modern look
import "./globals.css";
import { FloatingContact } from "@/components/FloatingContact";
import { QueryModal } from "@/components/QueryModal";
import Script from "next/script";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yapoom Solutions - Enterprise Software & Tech Consulting",
  description: "Scalable cloud, software, telecom, and hardware automation solutions tailored for your business growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {children}
        <FloatingContact />
        <QueryModal />




        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-93FE062BM9"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-93FE062BM9');
          `}
        </Script>
      </body>
    </html>
  );
}
