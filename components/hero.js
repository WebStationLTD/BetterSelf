"use client";

import Link from "next/link";
import LazyImageObserver from "./LazyImageObserver";

export default function Hero() {

  return (
    <>
      <LazyImageObserver />
      <div className="relative w-full min-h-[700px]">
        {/* Hero Background - poster image shows instantly while YouTube loads */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{
            backgroundImage: "url(/betterself-hero-image.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/nzdDwg_bq_Q?autoplay=1&mute=1&loop=1&playlist=nzdDwg_bq_Q&controls=0&showinfo=0&rel=0&playsinline=1&modestbranding=1&enablejsapi=1&vq=hd720"
            allow="autoplay; fullscreen"
            allowFullScreen
            loading="eager"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100vw",
              height: "56.25vw",
              minHeight: "100%",
              minWidth: "177.78vh",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              border: "none",
            }}
          />
        </div>

        {/* Dark Overlay for Better Text Readability */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.55)" }}
        />

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[700px] px-6 py-20 sm:py-28">
          <div className="text-center max-w-6xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white font-display mb-5">
              Биохакинг и дълголетие
            </h1>

            {/* Secondary Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-white font-display mb-6">
              Конференция 2026
            </h2>

            <h3 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#ff8d00] font-display mb-6 sm:mb-10">
              BETTER SELF
            </h3>

            {/* Quote */}
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white font-display mb-6 sm:mb-10">
              "Очи в очи"
            </p>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl font-medium text-white font-display mb-8 sm:mb-14 opacity-90">
              Направете следващата голяма крачка по пътя към своето ПО-ДОБРО АЗ
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 sm:mb-12">
              <Link
                href="/tickets"
                className="rounded-md bg-[#ff8d00] hover:bg-orange-600 px-6 py-3 text-lg font-semibold text-black shadow-lg transition-all duration-300 transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Купи билети
              </Link>
              <a
                href="/sponsors"
                className="text-lg font-semibold text-white hover:text-[#ff8d00] transition-colors duration-300"
              >
                Стани спонсор <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Event Details */}
            <div className="relative rounded-full px-6 py-3 text-lg font-medium text-white ring-2 ring-white ring-opacity-30 hover:ring-opacity-50 transition-all duration-300 inline-block">
              <span className="text-xl font-bold mr-4">
                01.11.2026 - Гранд Хотел Астория
              </span>
              <Link
                href="/tickets"
                className="font-semibold whitespace-nowrap text-[#ff8d00] hover:text-orange-300 transition-colors duration-300"
              >
                <span aria-hidden="true" className="absolute inset-0" />
                Купи билети <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
