"use client";

import {
  ClockIcon,
  MapPinIcon,
  UserIcon,
  CalendarIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import { scheduleData, getTypeStyles } from "../data/scheduleData";
import { useEffect, useState } from "react";

// Импортираме add-to-calendar-button компонента
import "add-to-calendar-button";

// Отделен компонент за calendar button който се рендира само на клиента
function AddToCalendarButton() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Добавяме CSS стилове за add-to-calendar-button
    const style = document.createElement("style");
    style.textContent = `
      .atcb-button {
        background: transparent !important;
        border: none !important;
        box-shadow: none !important;
        border-radius: 0 !important;
        padding: 0 !important;
        margin: 0 !important;
        width: 100% !important;
        height: 100% !important;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        z-index: 10 !important;
        cursor: pointer !important;
      }
      
      .atcb-button:hover {
        background: transparent !important;
        transform: none !important;
      }
      
      .atcb-list {
        border-radius: 12px !important;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
        border: 2px solid #ff8d00 !important;
      }
      
      .atcb-list-item {
        padding: 12px 16px !important;
        transition: all 0.2s ease !important;
      }
      
      .atcb-list-item:hover {
        background-color: #ff8d00 !important;
        color: white !important;
      }
      
      .atcb-list-item:first-child {
        border-top-left-radius: 10px !important;
        border-top-right-radius: 10px !important;
      }
      
      .atcb-list-item:last-child {
        border-bottom-left-radius: 10px !important;
        border-bottom-right-radius: 10px !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  // Добавяме скрипт за превод на етикетите
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      window.addeventasync = function(){
          addeventatc.settings({
              appleical  : {show:true, text:"Apple Календар"},
              google     : {show:true, text:"Google Календар"},
              office365  : {show:true, text:"Microsoft 365"},
              outlook    : {show:true, text:"Outlook"},
              outlookcom : {show:true, text:"Outlook.com"},
              yahoo      : {show:true, text:"Yahoo Календар"}
          });
      };
    `;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <add-to-calendar-button
      name="BetterSelf - Биохакинг и дълголетие Конференция 2025"
      description="Направете следващата голяма крачка по пътя към своето ПО-ДОБРО АЗ"
      startDate="2025-11-02"
      endDate="2025-11-02"
      startTime="09:00"
      endTime="18:00"
      location="Grand Hotel Astoria, Sofia"
      options="['Apple','Google','iCal','Microsoft365','Outlook.com','Yahoo']"
      timeZone="Europe/Sofia"
      trigger="click"
      inline
      listStyle="modal"
      iCalFileName="BetterSelf-Conference-2025"
      style={{
        position: "absolute",
        inset: "0",
        opacity: "0",
        cursor: "pointer",
      }}
    />
  );
}

// Данните сега се импортират от data/scheduleData.js

export default function Schedule() {
  return (
    <div className="bg-white py-24 sm:py-32">
      {/* Контейнер с 80% широчина на големи екрани, 95% на малки */}
      <div
        className="mx-auto px-2 sm:px-6 lg:px-8"
        style={{ width: "95%", maxWidth: "95%" }}
      >
        <div className="lg:w-4/5 lg:mx-auto">
          {/* Header */}
          <div className="mx-auto max-w-8xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Програма на събитието
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-base font-semibold text-gray-700">
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-[#ff8d00]" />
                <span>02 ноември 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-[#ff8d00]" />
                <span>Гранд Хотел Астория</span>
              </div>
            </div>

            {/* Add to Calendar Button */}
            <div className="mt-8 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff8d00] to-orange-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white border-2 border-[#ff8d00] rounded-xl px-6 py-4 hover:bg-gradient-to-r hover:from-[#ff8d00] hover:to-orange-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="h-6 w-6 text-[#ff8d00] group-hover:text-white transition-colors duration-300" />
                    <div className="text-left">
                      <div className="font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                        Отбележете си тази дата,
                      </div>
                      <div className="text-sm text-gray-600 group-hover:text-white transition-colors duration-300">
                        за да не пропуснете събитието!
                      </div>
                    </div>
                  </div>
                  <AddToCalendarButton />
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-16">
            {/* Responsive Grid Layout */}
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                {scheduleData.map((item, index) => {
                  const styles = getTypeStyles(item.type);

                  return (
                    <div key={item.id} className="relative group">
                      {/* Connecting Lines - Only on desktop */}
                      {index < scheduleData.length - 1 && (
                        <>
                          {/* Horizontal connection - md and xl screens */}
                          <div className="hidden md:block xl:hidden">
                            {/* 2 columns layout */}
                            {index % 2 === 0 &&
                              index + 1 < scheduleData.length && (
                                <div className="absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#ff8d00] to-blue-500 z-10 transform -translate-y-1/2">
                                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
                                </div>
                              )}
                            {/* Curved connection to next row for 2 columns */}
                            {index % 2 === 1 &&
                              index + 1 < scheduleData.length && (
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 z-10">
                                  <svg
                                    className="w-12 h-8"
                                    viewBox="0 0 48 32"
                                    preserveAspectRatio="none"
                                  >
                                    <path
                                      d="M 24 0 Q 24 16 0 32"
                                      stroke="#ff8d00"
                                      strokeWidth="2"
                                      fill="none"
                                      strokeDasharray="4,2"
                                      className="animate-pulse"
                                    />
                                    <circle
                                      cx="0"
                                      cy="32"
                                      r="2"
                                      fill="#3b82f6"
                                    />
                                  </svg>
                                </div>
                              )}
                          </div>

                          {/* 3 columns layout - xl screens */}
                          <div className="hidden xl:block">
                            {/* Horizontal connection within row */}
                            {index % 3 < 2 &&
                              index + 1 < scheduleData.length && (
                                <div className="absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#ff8d00] to-blue-500 z-10 transform -translate-y-1/2">
                                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
                                </div>
                              )}
                            {/* Curved connection to next row for 3 columns */}
                            {index % 3 === 2 &&
                              index + 1 < scheduleData.length && (
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 z-10">
                                  <svg
                                    className="w-16 h-12"
                                    viewBox="0 0 64 48"
                                    preserveAspectRatio="none"
                                  >
                                    <path
                                      d="M 32 0 Q 32 24 0 48"
                                      stroke="#ff8d00"
                                      strokeWidth="2"
                                      fill="none"
                                      strokeDasharray="4,2"
                                      className="animate-pulse"
                                    />
                                    <circle
                                      cx="0"
                                      cy="48"
                                      r="2"
                                      fill="#3b82f6"
                                    />
                                  </svg>
                                </div>
                              )}
                          </div>

                          {/* Mobile vertical line */}
                          <div className="md:hidden">
                            <div className="absolute left-6 top-20 w-0.5 h-12 bg-gradient-to-b from-[#ff8d00] to-gray-300 z-0"></div>
                          </div>
                        </>
                      )}

                      {/* Event Number Badge - Hidden on mobile */}
                      <div className="hidden md:flex absolute -top-3 -left-3 z-30 items-center justify-center w-10 h-10 rounded-full bg-[#ff8d00] text-white font-bold text-sm shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300">
                        {index + 1}
                      </div>

                      {/* Mobile Timeline Layout */}
                      <div className="md:hidden flex items-start gap-4">
                        {/* Timeline Dot with Number - Mobile Only */}
                        <div className="relative flex-shrink-0">
                          <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#ff8d00] text-white font-bold shadow-lg border-4 border-white">
                            {index + 1}
                          </div>
                        </div>

                        {/* Content Card - Mobile */}
                        <div
                          className={`flex-1 ${styles.cardBg} border-2 ${styles.borderColor} rounded-xl p-5 ${styles.shadowColor} shadow-lg hover:shadow-xl transition-all duration-300`}
                        >
                          {/* Time Badge and Type Badge for Panels - Mobile */}
                          <div className="flex items-center justify-between mb-3">
                            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-sm border border-gray-200">
                              <ClockIcon className="h-4 w-4 text-[#ff8d00]" />
                              {item.time}
                            </div>
                            {/* Type Badge - Only for panels on the same row */}
                            {item.type === "panel" && (
                              <span
                                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${styles.badge}`}
                              >
                                {styles.label}
                              </span>
                            )}
                          </div>

                          <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                            {item.title}
                          </h3>

                          {item.speaker && (
                            <div className="flex items-center gap-2 mb-2">
                              <UserIcon className="h-4 w-4 text-[#ff8d00] flex-shrink-0" />
                              <span className="text-sm font-semibold text-gray-700">
                                {item.speaker}
                              </span>
                            </div>
                          )}

                          <div className="flex items-center gap-2 mb-3">
                            <MapPinIcon className="h-4 w-4 text-gray-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">
                              {item.location}
                            </span>
                          </div>

                          <p className="text-sm text-gray-600 leading-relaxed mb-3">
                            {item.description}
                          </p>

                          {/* Type Badge - Only for non-panels at bottom */}
                          {item.type !== "panel" && (
                            <span
                              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${styles.badge}`}
                            >
                              {styles.label}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Desktop/Tablet Grid Card */}
                      <div
                        className={`hidden md:block relative ${styles.cardBg} border-2 ${styles.borderColor} rounded-2xl p-5 ${styles.shadowColor} shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group-hover:z-20 h-full flex flex-col`}
                      >
                        {/* Time Badge and Type Badge for Panels */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-md border border-gray-200 w-fit">
                            <ClockIcon className="h-4 w-4 text-[#ff8d00]" />
                            {item.time}
                          </div>
                          {/* Type Badge - Only for panels on the same row */}
                          {item.type === "panel" && (
                            <span
                              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${styles.badge}`}
                            >
                              {styles.label}
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#ff8d00] transition-colors duration-300 flex-grow-0">
                          {item.title}
                        </h3>

                        {/* Speaker */}
                        {item.speaker && (
                          <div className="flex items-center gap-2 mb-2">
                            <UserIcon className="h-4 w-4 text-[#ff8d00] flex-shrink-0" />
                            <span
                              className={`text-sm font-semibold text-gray-700 ${
                                item.type === "panel" ? "" : "line-clamp-1"
                              }`}
                            >
                              {item.speaker}
                            </span>
                          </div>
                        )}

                        {/* Location */}
                        <div className="flex items-center gap-2 mb-3">
                          <MapPinIcon className="h-4 w-4 text-gray-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            {item.location}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
                          {item.description}
                        </p>

                        {/* Type Badge - Only for non-panels at bottom */}
                        {item.type !== "panel" && (
                          <div className="mt-auto">
                            <span
                              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${styles.badge}`}
                            >
                              {styles.label}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mx-auto mt-20 max-w-2xl text-center">
            <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 p-8 border-2 border-[#ff8d00]/20 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Готови ли сте за трансформация?
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Присъединете се към нас за един ден, който може да промени
                живота ви завинаги.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/tickets"
                  className="inline-flex items-center justify-center rounded-xl bg-[#ff8d00] px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                >
                  Купи билети
                </a>
                <a
                  href="/sponsors"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3 text-base font-semibold text-gray-900 border-2 border-gray-300 hover:border-[#ff8d00] hover:text-[#ff8d00] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Стани спонсор
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
