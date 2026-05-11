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
        {/* <Script title="tawk-to" id="tawk-to" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/69c0bb3cc6e9bd1c38819900/1jkcdmpl4';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `
        }} /> */}
      </body>
    </html>
  );
}
