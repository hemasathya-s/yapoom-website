import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Using Outfit for a premium, modern look
import "./globals.css";
import { FloatingContact } from "@/components/FloatingContact";
import { QueryModal } from "@/components/QueryModal";
import { CookieBanner } from "@/components/CookieBanner";
import Script from "next/script";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.yapoomsolutions.com'),
  title: {
    default: "Yapoom Solutions - Enterprise Software & Tech Consulting",
    template: "%s | Yapoom Solutions"
  },
  description: "Scalable cloud, software, telecom, and hardware automation solutions tailored for your business growth.",
  openGraph: {
    title: "Yapoom Solutions",
    description: "Scalable cloud, software, telecom, and hardware automation solutions tailored for your business growth.",
    url: "https://www.yapoomsolutions.com",
    siteName: "Yapoom Solutions",
    images: [{ url: "/logo/yapoom-logo-horizontal.webp" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yapoom Solutions",
    description: "Scalable cloud, software, telecom, and hardware automation solutions tailored for your business growth.",
    images: ["/logo/yapoom-logo-horizontal.webp"],
  },
  alternates: {
    canonical: "https://www.yapoomsolutions.com",
    languages: {
      'en-US': 'https://www.yapoomsolutions.com',
      'x-default': 'https://www.yapoomsolutions.com'
    },
  },
  other: {
    'opensearch': "https://www.yapoomsolutions.com/opensearch.xml"
  }
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
        <CookieBanner />




        <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="Yapoom Search" />

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

          // Meta Pixel Stub
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'PIXEL_ID_HERE');
          fbq('track', 'PageView');
          `}
        </Script>

        {/* Schema Markup for LocalBusiness / Organization */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://www.yapoomsolutions.com/#organization",
                "name": "Yapoom Solutions",
                "url": "https://www.yapoomsolutions.com",
                "logo": "https://www.yapoomsolutions.com/logo/yapoom-logo-horizontal.webp",
                "sameAs": [
                  "https://www.linkedin.com/company/yapoomsolutions",
                  "https://twitter.com/YapoomSolutions",
                  "https://www.facebook.com/yapoomsolutions"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://www.yapoomsolutions.com/#localbusiness",
                "parentOrganization": { "@id": "https://www.yapoomsolutions.com/#organization" },
                "name": "Yapoom Solutions",
                "url": "https://www.yapoomsolutions.com",
                "logo": "https://www.yapoomsolutions.com/logo/yapoom-logo-horizontal.webp",
                "image": "https://www.yapoomsolutions.com/hero-modern-team.png",
                "description": "Scalable cloud, software, telecom, and hardware automation solutions tailored for your business growth.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "123 Digital Ave",
                  "addressLocality": "T.Nagar",
                  "addressRegion": "Chennai",
                  "addressCountry": "IN"
                },
                "telephone": "+91-92086-60866",
                "priceRange": "$$$",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-92086-60866",
                  "contactType": "technical support",
                  "areaServed": "IN",
                  "availableLanguage": "en"
                }
              }
            ])
          }}
        />
      </body>
    </html>
  );
}
