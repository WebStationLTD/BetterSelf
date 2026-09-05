import Link from "next/link";
import PricingSection from "@/components/pricingSection";
import {
  PARTNER_PROMO_CODE,
  resolvePartnerOfferStatus,
} from "@/data/partnerOffer";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Специална оферта",
  description: "Ограничена QR оферта за BetterSelf.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

function OfferMessage({ title, body }) {
  return (
    <div className="bg-gray-900 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 inline-flex rounded-full bg-[#ff8d00] px-4 py-1 text-sm font-semibold text-white">
          QR оферта
        </p>
        <h1 className="text-4xl font-semibold text-gray-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-lg text-gray-400">{body}</p>
        <Link
          href="/tickets"
          className="mt-10 inline-block rounded-lg bg-[#ff8d00] px-6 py-3 text-base font-medium text-white hover:bg-orange-600"
        >
          Билети на редовна цена
        </Link>
      </div>
    </div>
  );
}

export default async function PartnerPage({ searchParams }) {
  const params = await searchParams;
  const status = resolvePartnerOfferStatus(params?.preview);

  if (status === "upcoming") {
    return (
      <OfferMessage
        title="Офертата още не е активна"
        body="Специалната QR отстъпка от 20% важи от 2 до 7 септември 2026. Дотогава билетите са на редовна цена."
      />
    );
  }

  if (status === "expired") {
    return (
      <OfferMessage
        title="Офертата приключи"
        body="QR отстъпката от 20% беше валидна до 7 септември 2026. Билети на редовна цена са налични на страницата за билети."
      />
    );
  }

  return (
    <PricingSection
      promoCode={PARTNER_PROMO_CODE}
      heading="Специална QR оферта"
      subheading="Същите билети за основното събитие, с 20% отстъпка. Валидна от 2 до 7 септември 2026."
      hideAlternativePayment
    />
  );
}
