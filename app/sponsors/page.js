import SponsorsAndPartners from "@/components/SponsorsAndPartners";

export const metadata = {
  title: "Спонсори и Партньори - BetterSelf",
  description:
    "Разгледайте нашите спонсори и партньори, които подкрепят конференцията BetterSelf - водещото събитие за биохакинг и дълголетие в България.",
  openGraph: {
    title: "Спонсори и Партньори - BetterSelf",
    description:
      "Научете повече за компаниите, които правят възможно провеждането на BetterSelf.",
    images: [
      {
        url: "/betterself-hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Спонсори и Партньори - BetterSelf",
      },
    ],
  },
};

export default function SponsorsPage() {
  return <SponsorsAndPartners />;
}
