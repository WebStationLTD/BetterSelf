"use client";

/**
 * TicketIframeController Component
 *
 * Displays the ticket booking iframe without any overlays or masks.
 * Used for testing the raw iframe functionality.
 *
 * @returns {JSX.Element} Clean iframe component
 */
export default function TicketIframeController() {
  return (
    <div className="w-full">
      <div className="relative">
        <iframe
          src="https://bilet.bg/bg/cart/better-self-biohacking-summit-2025-6457?noframe=true"
          title="Ticket booking module - BetterSelf Conference 2025"
          className="w-full h-[200vh] lg:h-[180vh] border-0"
          scrolling="no"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
