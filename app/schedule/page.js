import Schedule from "../../components/schedule";

// Метаданни за страницата
export const metadata = {
  title: "Програма на събитието - BetterSelf Conference 2025",
  description:
    "Подробна програма на конференцията за биохакинг и дълголетие. Вижте всички лекции, презентации и панелни дискусии на 02 ноември 2025.",
  keywords: [
    "програма",
    "schedule",
    "биохакинг",
    "дълголетие",
    "конференция",
    "betterself",
    "лекции",
    "презентации",
  ],
  openGraph: {
    title: "Програма на събитието - BetterSelf Conference 2025",
    description:
      "Подробна програма на конференцията за биохакинг и дълголетие на 02 ноември 2025",
    images: [
      {
        url: "/betterself-hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "BetterSelf Conference 2025 Schedule",
      },
    ],
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Програма на събитието - BetterSelf Conference 2025",
    description:
      "Подробна програма на конференцията за биохакинг и дълголетие на 02 ноември 2025",
    images: ["/betterself-hero-image.jpg"],
  },
};

export default function SchedulePage() {
  return (
    <>
      {/* Основната програма - използваме същия компонент */}
      <Schedule />
    </>
  );
}
