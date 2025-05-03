"use client";

import Link from "next/link";
import LazyImageObserver from "./LazyImageObserver";
import { useEffect } from "react";

export default function Hero() {
  // Добавяме дебъг клас към body
  useEffect(() => {
    document.body.classList.add("debug-indicator");

    return () => {
      document.body.classList.remove("debug-indicator");
    };
  }, []);

  return (
    <>
      <LazyImageObserver />
      <div className="bg-white">
        {/* Мобилен Hero с изображение най-отгоре - ще бъде LCP елемент за мобилни */}
        <div className="lg:hidden relative">
          <div className="w-full overflow-hidden">
            {/* Директно използване на HTML img за максимална производителност на LCP */}
            <img
              src="/hero-image-mobile.jpg"
              width={640}
              height={400}
              alt="Hero image"
              className="w-full h-[150px] xs:h-[180px] sm:h-[200px] md:h-[240px] object-cover"
              loading="eager"
              decoding="sync"
              fetchPriority="high"
              style={{
                objectFit: "cover",
                objectPosition: "center 30%",
                contentVisibility: "auto",
                containIntrinsicSize: "640px 400px",
              }}
              id="hero-mobile-lcp"
            />
          </div>

          <div className="px-6 py-10">
            <h1 className="font-semibold tracking-tight text-pretty text-gray-900 font-display sm:text-5xl xl:text-7xl text-left xl:text-center">
              Biohacking & Longevity
            </h1>
            <h2 className="text-3xl font-semibold mt-8 tracking-tight text-pretty text-gray-900 sm:text-4xl xl:text-5xl font-display text-left xl:text-center">
              Conference 2025
            </h2>
            <p className="mt-4 text-2xl font-medium font-display text-left xl:text-center">
              "Очи в очи"
            </p>
            <p className="mt-6 text-sm font-medium text-pretty text-gray-500 font-display text-left xl:text-center">
              Let's start the journey to you BETTERSELF
            </p>
            <div className="mt-8 flex items-center gap-x-4">
              <Link
                href="/services"
                className="rounded-md bg-[#129160] hover:bg-gray-300 hover:text-[#000000] px-3 py-2 text-sm font-semibold text-black shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Услуги
              </Link>
              <Link
                href="/contact"
                className="text-sm font-semibold text-gray-900"
              >
                Контакти <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Десктоп Hero с текст вляво и изображение вдясно */}
        <div className="hidden lg:block relative">
          <div className="mx-auto max-w-full">
            {/* <div className="relative z-10 pt-0 lg:w-full lg:max-w-3xl 2xl:max-w-4xl"> */}
            {/* <div className="relative z-10 pt-0 lg:w-full lg:max-w-3xl 2xl:max-w-8xl"> */}
            <div className="relative z-10 pt-0 lg:w-full lg:max-w-3xl 2xl:max-w-8xl">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="absolute inset-y-0 right-0 custom-2xl-right-30 custom-3xl-right-46 h-full w-80 translate-x-1/2 transform fill-white"
                style={{
                  // Добавяме inline стил като резервен метод
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                }}
              >
                <polygon points="0,0 90,0 50,100 0,100" />
              </svg>
              <div className="relative px-6 py-12 lg:px-8 lg:py-14 lg:pr-0">
                {/* <div className="ml-0 mr-auto max-w-2xl lg:mx-0 lg:max-w-xl"> */}
                <div className="ml-0 mr-auto lg:mx-0 w-full">
                  <h1 className="font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl xl:text-7xl font-display text-left xl:text-center">
                    Biohacking & Longevity
                  </h1>
                  <h2 className="text-3xl font-semibold mt-8 tracking-tight text-pretty text-gray-900 sm:text-4xl xl:text-5xl font-display text-left xl:text-center">
                    Conference 2025
                  </h2>
                  <p className="mt-8 text-4xl text-left xl:text-center font-medium font-display">
                    "Очи в очи"
                  </p>
                  <p className="mt-8 text-lg text-left xl:text-center font-medium text-pretty text-gray-500 sm:text-xl/8 font-display">
                    Let's start the journey to you BETTERSELF
                  </p>
                  <div className="mt-10 flex justify-start xl:justify-center items-center gap-x-6">
                    <Link
                      href="/services"
                      className="rounded-md text-[#000000] bg-[#129160] hover:bg-gray-300 hover:text-[#000000] px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Услуги
                    </Link>
                    <Link
                      href="/contact"
                      className="text-sm/6 font-semibold text-gray-900"
                    >
                      Контакти <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                  <div className="mt-2 mb-10 flex justify-start xl:justify-center">
                    <div className="relative rounded-full mt-8 px-3 py-1 text-lg font-medium text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                      <span className="text-xl font-bold">02.11.2025</span>{" "}
                      <Link
                        href="/blog"
                        className="font-semibold whitespace-nowrap text-[#129160]"
                      >
                        <span aria-hidden="true" className="absolute inset-0" />
                        Купете билети <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 absolute inset-y-0 right-0 w-1/2">
            {/* Директно използване на HTML img за десктоп версията */}
            <img
              src="/hero-image-desktop.jpg"
              width={955}
              height={776}
              alt="Hero image"
              className="h-full w-full object-cover"
              loading="eager"
              decoding="sync"
              fetchPriority="high"
              style={{
                objectFit: "cover",
                contentVisibility: "auto",
                containIntrinsicSize: "955px 776px",
              }}
              id="hero-desktop-lcp"
            />
          </div>
        </div>
      </div>
    </>
  );
}
