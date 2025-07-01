"use client";

import Link from "next/link";
import LazyImageObserver from "./LazyImageObserver";
import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef(null);

  // Добавяме дебъг клас към body
  useEffect(() => {
    document.body.classList.add("debug-indicator");

    // Дебъг за видеото
    const video = videoRef.current;
    if (video) {
      video.addEventListener("loadstart", () =>
        console.log("Video: Started loading")
      );
      video.addEventListener("loadeddata", () =>
        console.log("Video: Data loaded")
      );
      video.addEventListener("canplay", () => console.log("Video: Can play"));
      video.addEventListener("playing", () => console.log("Video: Playing"));
      video.addEventListener("error", (e) => console.error("Video error:", e));
    }

    return () => {
      document.body.classList.remove("debug-indicator");
    };
  }, []);

  return (
    <>
      <LazyImageObserver />
      <div className="relative w-full h-[600px]">
        {/* Hero Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster="/betterself-hero-image.jpg"
            className="w-full h-full object-cover"
            style={{
              objectFit: "cover",
              objectPosition: "center top",
            }}
            onError={(e) => {
              console.error("Video failed to load:", e);
            }}
            onLoadStart={() => console.log("Video load start")}
            onCanPlay={() => console.log("Video can play")}
          >
            {/* MP4 формат за максимална съвместимост */}
            <source src="/betterself-hero-video.mp4" type="video/mp4" />
            {/* Fallback за браузери, които не поддържат видео */}
            Вашият браузър не поддържа видео тагове.
          </video>
        </div>

        {/* Dark Overlay for Better Text Readability */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.55)",
          }}
        ></div>

        {/* Hero Content - Centered */}
        <div className="relative z-10 flex items-center justify-center h-[600px] px-6">
          <div className="text-center max-w-6xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight text-white font-display mb-4">
              Biohacking & Longevity
            </h1>

            {/* Secondary Heading */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white font-display mb-6">
              Conference 2025
            </h2>

            {/* Quote */}
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white font-display mb-8">
              "Очи в очи"
            </p>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl font-medium text-white font-display mb-12 opacity-90">
              Let's start the journey to your BETTERSELF
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
              <Link
                href="/tickets"
                className="rounded-md bg-[#ff8d00] hover:bg-orange-600 px-6 py-3 text-lg font-semibold text-black shadow-lg transition-all duration-300 transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                Купи билети
              </Link>
              <Link
                href="/contact"
                className="text-lg font-semibold text-white hover:text-[#ff8d00] transition-colors duration-300"
              >
                Стани партньор <span aria-hidden="true">→</span>
              </Link>
            </div>

            {/* Event Details */}
            <div className="relative rounded-full px-6 py-3 text-lg font-medium text-white ring-2 ring-white ring-opacity-30 hover:ring-opacity-50 transition-all duration-300 inline-block">
              <span className="text-xl font-bold mr-4">
                02.11.2025 - Гранд Хотел Астория
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
