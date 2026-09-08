export const PARTNER_PROMO_CODE = "QR20";

/** Active from 2 Sept 2026, no end date until we turn it off. */
export const OFFER_START = "2026-09-02T00:00:00+03:00";

export function getPartnerOfferStatus(now = new Date()) {
  const start = new Date(OFFER_START);
  if (now < start) return "upcoming";
  return "active";
}

export function resolvePartnerOfferStatus(preview) {
  if (preview === "upcoming" || preview === "expired" || preview === "active") {
    return preview;
  }

  if (
    preview === PARTNER_PROMO_CODE ||
    preview === "PARTNER7" ||
    preview === "PARTNER20"
  ) {
    return "active";
  }

  return getPartnerOfferStatus();
}
