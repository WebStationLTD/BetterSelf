import { WebVitals } from "./web-vitals";
import HomePageWrapper from "../components/HomePageWrapper";

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
      <HomePageWrapper />
    </>
  );
}
