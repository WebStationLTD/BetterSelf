"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

// CSS override за react-cookie-consent
const cookieStyles = `
  .CookieConsent {
    min-height: auto !important;
    height: auto !important;
    flex: none !important;
    margin: 0 !important;
    max-height: none !important;
  }
  
  /* Targeted селектор за wrapper div */
  div[style*="flex: 1 0 300px"], 
  div[style*="margin: 15px"] {
    flex: none !important;
    height: auto !important;
    min-height: auto !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  
  /* Допълнителен селектор за всички wrapper divs в cookie consent */
  .CookieConsent > div {
    flex: none !important;
    height: auto !important;
    min-height: auto !important;
  }
`;

const CookieConsent = dynamic(() => import("react-cookie-consent"), {
  ssr: false,
});

const CookieConsentBanner = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: cookieStyles }} />
      <CookieConsent
        location="bottom"
        cookieName="brdLawCookieConsent"
        expires={365}
        buttonText="Приемам"
        declineButtonText="Отказвам"
        enableDeclineButton
        style={{
          background: "#2B373B",
          color: "#FFF",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 30,
          maxWidth: "100vw",
          boxSizing: "border-box",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 -4px 6px -1px rgba(0, 0, 0, 0.1)",
        }}
        buttonWrapperClasses="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto"
        buttonStyle={{
          backgroundColor: "#4CAF50",
          color: "#000000",
          fontSize: "14px",
          padding: "12px 20px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          fontWeight: "500",
          minHeight: "44px",
          flex: "1",
        }}
        declineButtonStyle={{
          backgroundColor: "#f44336",
          color: "#000000",
          fontSize: "14px",
          padding: "12px 20px",
          borderRadius: "6px",
          border: "none",
          cursor: "pointer",
          fontWeight: "500",
          minHeight: "44px",
          flex: "1",
        }}
        onAccept={() => {
          console.log("Потребителят е приел бисквитките");
        }}
        onDecline={() => {
          console.log("Потребителят е отказал бисквитките");
        }}
      >
        <div className="w-full">
          <p className="text-sm md:text-base leading-relaxed mb-0">
            Използваме бисквитки за подобряване на услугите.{" "}
            <Link
              href="/privacy-policy"
              className="underline hover:no-underline"
            >
              Научете повече
            </Link>
            .
          </p>
        </div>
      </CookieConsent>
    </>
  );
};

export default CookieConsentBanner;
