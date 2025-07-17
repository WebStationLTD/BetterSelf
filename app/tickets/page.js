import PricingSection from "@/components/pricingSection";

export const metadata = {
  title: "Билети - BetterSelf",
  description:
    "Закупете своя билет за BetterSelf - водещата конференция за биохакинг и дълголетие в България. Осигурете си място на събитието!",
  openGraph: {
    title: "Билети - BetterSelf",
    description:
      "Не изпускайте възможността да бъдете част от BetterSelf. Вземете своя билет сега.",
    images: [
      {
        url: "/betterself-hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Билети - BetterSelf",
      },
    ],
  },
};

export default function TicketsPage() {
  return <PricingSection />;
}
