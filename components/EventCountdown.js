"use client";

import { useState, useEffect } from "react";

export default function EventCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const targetDate = new Date("2025-11-02T09:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  // Показваме placeholder докато не се mount-не компонента (hydration issue)
  if (!mounted) {
    return (
      <div className="w-full bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 font-display">
              До събитието остават
            </h2>
            <div className="flex justify-center items-center gap-2 max-[420px]:gap-1 md:gap-8">
              {[0, 0, 0, 0].map((_, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative rounded-xl bg-white px-2 py-3 max-[420px]:px-1 max-[420px]:py-2 md:px-6 md:py-8 shadow-lg ring-2 ring-[#ff8d00] ring-opacity-20 hover:ring-opacity-40 transition-all duration-300 max-md:w-14 max-md:h-14 max-md:flex max-md:items-center max-md:justify-center">
                    <div className="text-xl max-[420px]:text-lg md:text-5xl lg:text-6xl font-bold text-[#ff8d00] font-display">
                      00
                    </div>
                  </div>
                  <div className="text-xs max-[420px]:text-xs md:text-base font-medium text-gray-600 mt-2 font-display">
                    {["дни", "часа", "минути", "секунди"][index]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 font-display">
            До събитието остават
          </h2>
          <div className="flex justify-center items-center gap-2 max-[420px]:gap-1 md:gap-8">
            <div className="flex flex-col items-center">
              <div className="relative rounded-xl bg-white px-2 py-3 max-[420px]:px-1 max-[420px]:py-2 md:px-6 md:py-8 shadow-lg ring-2 ring-[#ff8d00] ring-opacity-20 hover:ring-opacity-40 transition-all duration-300 transform hover:scale-105 max-md:w-14 max-md:h-14 max-md:flex max-md:items-center max-md:justify-center">
                <div className="text-xl max-[420px]:text-lg md:text-5xl lg:text-6xl font-bold text-[#ff8d00] font-display">
                  {String(timeLeft.days).padStart(2, "0")}
                </div>
              </div>
              <div className="text-xs max-[420px]:text-xs md:text-base font-medium text-gray-600 mt-2 font-display">
                дни
              </div>
            </div>

            <div className="text-lg max-[420px]:text-base md:text-4xl font-bold text-[#ff8d00] opacity-60 max-md:-mt-4">
              :
            </div>

            <div className="flex flex-col items-center">
              <div className="relative rounded-xl bg-white px-2 py-3 max-[420px]:px-1 max-[420px]:py-2 md:px-6 md:py-8 shadow-lg ring-2 ring-[#ff8d00] ring-opacity-20 hover:ring-opacity-40 transition-all duration-300 transform hover:scale-105 max-md:w-14 max-md:h-14 max-md:flex max-md:items-center max-md:justify-center">
                <div className="text-xl max-[420px]:text-lg md:text-5xl lg:text-6xl font-bold text-[#ff8d00] font-display">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
              </div>
              <div className="text-xs max-[420px]:text-xs md:text-base font-medium text-gray-600 mt-2 font-display">
                часа
              </div>
            </div>

            <div className="text-lg max-[420px]:text-base md:text-4xl font-bold text-[#ff8d00] opacity-60 max-md:-mt-4">
              :
            </div>

            <div className="flex flex-col items-center">
              <div className="relative rounded-xl bg-white px-2 py-3 max-[420px]:px-1 max-[420px]:py-2 md:px-6 md:py-8 shadow-lg ring-2 ring-[#ff8d00] ring-opacity-20 hover:ring-opacity-40 transition-all duration-300 transform hover:scale-105 max-md:w-14 max-md:h-14 max-md:flex max-md:items-center max-md:justify-center">
                <div className="text-xl max-[420px]:text-lg md:text-5xl lg:text-6xl font-bold text-[#ff8d00] font-display">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
              </div>
              <div className="text-xs max-[420px]:text-xs md:text-base font-medium text-gray-600 mt-2 font-display">
                минути
              </div>
            </div>

            <div className="text-lg max-[420px]:text-base md:text-4xl font-bold text-[#ff8d00] opacity-60 max-md:-mt-4">
              :
            </div>

            <div className="flex flex-col items-center">
              <div className="relative rounded-xl bg-white px-2 py-3 max-[420px]:px-1 max-[420px]:py-2 md:px-6 md:py-8 shadow-lg ring-2 ring-[#ff8d00] ring-opacity-20 hover:ring-opacity-40 transition-all duration-300 transform hover:scale-105 max-md:w-14 max-md:h-14 max-md:flex max-md:items-center max-md:justify-center">
                <div className="text-xl max-[420px]:text-lg md:text-5xl lg:text-6xl font-bold text-[#ff8d00] font-display">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
              </div>
              <div className="text-xs max-[420px]:text-xs md:text-base font-medium text-gray-600 mt-2 font-display">
                секунди
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
