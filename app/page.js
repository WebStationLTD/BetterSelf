import HeroSection from "../components/hero";
import { WebVitals } from "./web-vitals";
import dynamic from "next/dynamic";

const Schedule = dynamic(() => import("../components/schedule"), {
  ssr: true,
});
const PricingSection = dynamic(() => import("../components/pricingSection"), {
  ssr: true,
});
const Incentives = dynamic(() => import("../components/incentives"), {
  ssr: true,
});
const Team = dynamic(() => import("../components/team"), { ssr: true });
const CTA = dynamic(() => import("../components/cta"), { ssr: true });
const Clients = dynamic(() => import("../components/clients"), { ssr: true });
const Newsletter = dynamic(() => import("../components/newsletter"), {
  ssr: true,
});
const Testimonial = dynamic(() => import("../components/testimonial"), {
  ssr: true,
});
const Lastestposts = dynamic(() => import("../components/latestposts"), {
  ssr: true,
});

// Добавяне на ISR ревалидиране на всеки час
export const revalidate = 3600;

// Добавяне на метаданни за главната страница
export const metadata = {
  title: "BetterSelf - Biohacking & Longevity Conference 2025",
  description:
    "Присъединете се към водещата конференция за биохакинг и дълголетие в България. Научете от експерти как да оптимизирате здравето и живота си.",
  keywords: [
    "биохакинг",
    "дълголетие",
    "конференция",
    "здраве",
    "betterself",
    "longevity",
    "biohacking",
  ],
  openGraph: {
    title: "BetterSelf - Biohacking & Longevity Conference 2025",
    description:
      "Еднодневна конференция за биохакинг и дълголетие на 02.11.2025",
    images: [
      {
        url: "/betterself-hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "BetterSelf Conference 2025",
      },
    ],
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BetterSelf - Biohacking & Longevity Conference 2025",
    description:
      "Еднодневна конференция за биохакинг и дълголетие на 02.11.2025",
    images: ["/betterself-hero-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <WebVitals />
      <HeroSection />

      <Incentives />
      <Schedule />
      <Team />

      <PricingSection />

      {/* <CTA /> */}
      <Clients />
      <Newsletter />
      <Testimonial />
      <Lastestposts />
    </>
  );
}
