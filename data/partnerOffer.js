export const PARTNER_PROMO_CODE = "PARTNER7";

/** 2 Sept 2026 00:00 EEST → 7 Sept 2026 23:59:59 EEST */
export const OFFER_START = "2026-09-02T00:00:00+03:00";
export const OFFER_END = "2026-09-07T23:59:59+03:00";

export function getPartnerOfferStatus(now = new Date()) {
  const start = new Date(OFFER_START);
  const end = new Date(OFFER_END);

  if (now < start) return "upcoming";
  if (now > end) return "expired";
  return "active";
}

export function resolvePartnerOfferStatus(preview) {
  if (preview === "upcoming" || preview === "expired" || preview === "active") {
    return preview;
  }

  if (preview === PARTNER_PROMO_CODE || preview === "PARTNER20") {
    return "active";
  }

  return getPartnerOfferStatus();
}
