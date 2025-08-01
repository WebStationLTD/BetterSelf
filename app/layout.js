import { headers } from "next/headers";
import Navigation from "../components/nav";
import CookieConsentBanner from "../components/cookieConsentBanner";
import Footer from "../components/footer";
import Script from "next/script";
import ImagePreloader from "../components/ImagePreloader";
import { CriticalCSS } from "./critical-css";

import "../styles/globals.css";
import {
  Roboto,
  Open_Sans,
  Raleway,
  Montserrat,
  Nunito,
  Ubuntu,
  Inter,
  Noto_Sans,
  Rubik,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
});
const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  style: ["normal"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: true,
});

export async function generateMetadata() {
  const host = (await headers()).get("host"); // Get the current domain
  const protocol = host?.includes("localhost") ? "http" : "https"; // Adjust for local dev

  return {
    metadataBase: new URL(`${protocol}://${host}`),
    title: {
      template: "%s | BetterSelf",
      default: "BetterSelf | Конференция за здраве и личностно развитие",
    },
    description:
      "BetterSelf 2025 - Водещата конференция в България за здраве, дълголетие, биохакинг и личностно развитие. Присъединете се към най-иновативните специалисти и открийте пътя към по-доброто себе си.",
    openGraph: {
      title: "BetterSelf | Конференция за здраве и личностно развитие",
      description:
        "BetterSelf 2025 - Водещата конференция в България за здраве, дълголетие, биохакинг и личностно развитие. Присъединете се към най-иновативните специалисти и открийте пътя към по-доброто себе си.",
      images: "/betterself-hero-image.jpg",
      type: "website",
      locale: "bg_BG",
      siteName: "BetterSelf",
    },
    twitter: {
      card: "summary_large_image",
      title: "BetterSelf - Конференция за здраве и личностно развитие",
      description: "Открийте пътя към по-доброто себе си с BetterSelf 2025",
      images: ["/betterself-hero-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: "/",
      languages: {
        bg: "/",
      },
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <head>
        <CriticalCSS />
        <link
          rel="preconnect"
          href="https://betterself.admin-panels.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://betterself.admin-panels.com" />

        {/* Директно използване на preload тагове с правилния синтаксис */}
        <link
          rel="preload"
          as="image"
          href="/hero-image-mobile.jpg"
          type="image/jpg"
          media="(max-width: 640px)"
        />

        <link
          rel="preload"
          as="image"
          href="/hero-image-desktop.jpg"
          type="image/jpg"
          media="(min-width: 641px)"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={montserrat.className}>
        <ImagePreloader />
        <Navigation />
        <main>{children}</main>
        <CookieConsentBanner />
        <Footer />
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "BetterSelf 2025 - Конференция за здраве и личностно развитие",
              description:
                "Водещата конференция в България за здраве, дълголетие, биохакинг и личностно развитие. Присъединете се към най-иновативните специалисти и открийте пътя към по-доброто себе си.",
              url: "https://www.betterself.bg",
              image: "/betterself-hero-image.jpg",
              startDate: "2025-05-17",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
              location: {
                "@type": "Place",
                name: "София, България",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "София",
                  addressCountry: "BG",
                },
              },
              organizer: {
                "@type": "Organization",
                name: "BetterSelf",
                url: "https://www.betterself.bg",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
