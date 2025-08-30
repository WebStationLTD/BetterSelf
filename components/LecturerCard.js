"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LecturerCard({ lecturer, panelColor, ringColor }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Функция за съкращаване на текста
  const truncateText = (text, maxLength = 250) => {
    if (text.length <= maxLength) return text;

    // Намираме последния пълен збор преди лимита
    const truncated = text.substring(0, maxLength);
    const lastSpaceIndex = truncated.lastIndexOf(" ");

    return lastSpaceIndex > 0
      ? truncated.substring(0, lastSpaceIndex) + "..."
      : truncated + "...";
  };

  const shouldShowButton = lecturer.description.length > 250;
  const displayText =
    isExpanded || !shouldShowButton
      ? lecturer.description
      : truncateText(lecturer.description);

  return (
    <div
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden ${
        isExpanded ? "h-auto min-h-96 md:min-h-72" : "min-h-96 md:h-72"
      }`}
    >
      <div className="p-6 md:p-8 h-full flex flex-col justify-start md:justify-center">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-center h-full">
          {/* Снимка */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div
              className={`relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ${ringColor} shadow-lg`}
            >
              <Image
                src={lecturer.image}
                alt={lecturer.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 112px, 128px"
              />
            </div>
          </div>

          {/* Информация */}
          <div className="flex-1 text-center md:text-left flex flex-col justify-start md:justify-center min-h-0">
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                {lecturer.name}
              </h3>
              {lecturer.company && (
                <div>
                  {lecturer.companyLink ? (
                    <Link
                      href={lecturer.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${panelColor} text-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                    >
                      {lecturer.company}
                    </Link>
                  ) : (
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${panelColor} text-white shadow-sm`}
                    >
                      {lecturer.company}
                    </span>
                  )}
                </div>
              )}

              {/* Описание с анимация */}
              <div className="relative">
                <div className="text-gray-600 text-sm leading-relaxed">
                  <div
                    className={`transition-all duration-700 ease-in-out overflow-hidden ${
                      isExpanded ? "opacity-100" : "opacity-100"
                    }`}
                    style={{
                      maxHeight: isExpanded ? "1000px" : "auto",
                      transition:
                        "max-height 0.7s ease-in-out, opacity 0.3s ease-in-out",
                    }}
                  >
                    {displayText}
                  </div>

                  {/* Градиент ефект за плавно скриване на текста */}
                  {!isExpanded && shouldShowButton && (
                    <div
                      className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent pointer-events-none"
                      style={{ marginTop: "-1.5rem" }}
                    />
                  )}
                </div>

                {/* Бутон "Вижте повече" */}
                {shouldShowButton && (
                  <div className="mt-4 text-center md:text-left">
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r ${panelColor} rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 active:scale-95`}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
