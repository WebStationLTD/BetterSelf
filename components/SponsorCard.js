"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SponsorCard({ sponsor }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Функция за съкращаване на текста
  const truncateText = (text, maxLength = 200) => {
    if (text.length <= maxLength) return text;

    // Намираме последния пълен збор преди лимита
    const truncated = text.substring(0, maxLength);
    const lastSpaceIndex = truncated.lastIndexOf(" ");

    return lastSpaceIndex > 0
      ? truncated.substring(0, lastSpaceIndex) + "..."
      : truncated + "...";
  };

  const shouldShowButton = sponsor.description.length > 200;
  const displayText =
    isExpanded || !shouldShowButton
      ? sponsor.description
      : truncateText(sponsor.description);

  return (
    <div
      className={`flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl ${
        isExpanded ? "h-auto min-h-fit" : "h-auto"
      }`}
    >
      <div className="relative h-32 w-full mb-6 flex-shrink-0">
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          fill
          quality={100}
          loading="lazy"
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold leading-8 text-gray-900 mb-4 flex-shrink-0">
        {sponsor.name}
      </h3>

      {/* Описание с анимация */}
      <div className="relative flex-1 w-full min-h-0">
        <div
          className={`text-base leading-7 text-gray-600 transition-all duration-700 ease-in-out overflow-hidden ${
            isExpanded ? "opacity-100" : "opacity-100"
          }`}
          style={{
            maxHeight: isExpanded
              ? "none"
              : shouldShowButton
              ? "140px"
              : "auto",
            transition: "max-height 0.7s ease-in-out, opacity 0.3s ease-in-out",
          }}
        >
          <div className={isExpanded ? "" : "line-clamp-none"}>
            {displayText}
          </div>
        </div>

        {/* Градиент ефект за плавно скриване на текста */}
        {!isExpanded && shouldShowButton && (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
        )}
      </div>

      {/* Бутон "Вижте повече" */}
      {shouldShowButton && (
        <div className="mt-6 flex-shrink-0">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 active:scale-95"
          >
            <span>{isExpanded ? "Скрий" : "Вижте повече"}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-500 ease-in-out ${
                isExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Линк към сайта */}
      {sponsor.link && (
        <div className="mt-6 flex-shrink-0">
          <Link
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 text-[#ff8d00] hover:text-orange-500 transition-colors duration-200"
          >
            Научете повече <span aria-hidden="true">→</span>
          </Link>
        </div>
      )}
    </div>
  );
}
