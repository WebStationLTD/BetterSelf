"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ClockIcon,
  MapPinIcon,
  UserIcon,
  NewspaperIcon,
  ExternalLinkIcon,
} from "@heroicons/react/24/outline";
import { scheduleData, getTypeStyles } from "../../data/scheduleData";
import { getMembers } from "../../services/members";
import {
  BeakerIcon,
  UserIcon as UserIconSolid,
  HeartIcon,
  FaceSmileIcon,
  TrophyIcon,
  SparklesIcon,
  MicrophoneIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const incentives2025 = [
  {
    name: "Аутизъм: Вътреутробни сигнали и превенция",
    lecturer: "Д-р Иван Сигридов",
    icon: UserIconSolid,
    description:
      "Какво можем да променим преди зачеване и през бременността за превенция на аутизма",
    video: "/sigridov-v6-short.mov",
  },
  {
    name: "Хранене за дълголетие",
    lecturer: "Д-р Енджи Касабие",
    icon: HeartIcon,
    description:
      "Холистични хранителни стратегии за здраве, жизненост и дълголетие",
  },
  {
    name: "Оптимизирани хормони",
    lecturer: "Д-р Константин Маламов",
    icon: ScaleIcon,
    description:
      "Диригенти на поведението и успеха ни – как да балансираме хормоните за максимално добро здраве",
  },
  {
    name: "Как мислят шампионите?",
    lecturer: "Моузес Налока",
    icon: TrophyIcon,
    description:
      "Психологически стратегии за постигане на върхови резултати и преодоляване на ограниченията",
  },
  {
    name: "Биохакинг за красота",
    lecturer: "Д-р Камелия Присадашка",
    icon: SparklesIcon,
    description:
      "Съвременни научни подходи за развиване и поддържане на красотата отвътре и отвън",
  },
  {
    name: "Харизма и дизайн на гласа",
    lecturer: "Иван Головацкий",
    icon: MicrophoneIcon,
    description:
      "Как да говорим красиво и въздействащо, така, че не само да ни слушат, но и да ни чуват",
  },
  {
    name: "Защо биохакинг?",
    lecturer: "Д-р Жасмина Маджид",
    icon: BeakerIcon,
    description:
      "Въведение в света на биохакинга: комбинирани практики за здраве и благосъстояние, подкрепени от науката",
    youtubeVideo: "lbfGvCXmzSY",
  },
  {
    name: "Емоционална интелигентност",
    lecturer: "Десислава Дамянова",
    icon: FaceSmileIcon,
    description:
      "Как да разпознаваме, разбираме и управляваме емоциите за по-хармонични и удовлетворяващи взаимоотношения",
  },
];

const pressReleases = [
  {
    id: 1,
    title: "Ограничаването на захарта може да забави стареенето",
    url: "https://www.marica.bg/zdrave/ogranichavaneto-na-zaharta-i-reguliraneto-na-insulinovite-pikove-mogat-da-zabavqt-stareeneto",
    source: "Marica.bg",
  },
  {
    id: 2,
    title: "Ограничаването на захарта може да забави стареенето на клетките",
    url: "https://www.dnes.bg/a/5-zdrave/701498-ogranichavaneto-na-zaharta-mozhe-da-zabavi-stareeneto-na-kletkite",
    source: "Dnes.bg",
  },
  {
    id: 3,
    title: "Днешните мъже имат 30 на сто по-ниски нива на тестостерон",
    url: "https://trud.bg/a/articles/%D0%B4%D0%BD%D0%B5%D1%88%D0%BD%D0%B8%D1%82%D0%B5-%D0%BC%D1%8A%D0%B6%D0%B5-%D0%B8%D0%BC%D0%B0%D1%82-30-%D0%BD%D0%B0-%D1%81%D1%82%D0%BE-%D0%BF%D0%BE%D0%BD%D0%B8%D1%81%D0%BA%D0%B8-%D0%BD%D0%B8%D0%B2%D0%B0-%D0%BD%D0%B0-%D1%82%D0%B5%D1%81%D1%82%D0%BE%D1%81%D1%82%D0%B5%D1%80%D0%BE%D0%BD",
    source: "Trud.bg",
  },
  {
    id: 4,
    title: "Емоционалната интелигентност е биохимия на дългол етие",
    url: "https://po-zdravidnes.com/%D0%95%D0%BC%D0%BE%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D0%BD%D0%B0%D1%82%D0%B0+%D0%B8%D0%BD%D1%82%D0%B5%D0%BB%D0%B8%D0%B3%D0%B5%D0%BD%D1%82%D0%BD%D0%BE%D1%81%D1%82+%D0%B5+%D0%B1%D0%B8%D0%BE%D1%85%D0%B8%D0%BC%D0%B8%D1%8F+%D0%BD%D0%B0+%D0%B4%D1%8A%D0%BB%D0%B3%D0%BE%D0%BB%D0%B5/1/YVK7I9KDYROHc9eLclePMBWzIJKDMVKTcBevMdaDIVaHcFK3cJKbMdOfcZOTIlK3IdePIpeH",
    source: "Po-zdravidnes.com",
  },
  {
    id: 5,
    title: "Проведе се първото издание на конференцията за биохакинг и дълголетие BetterSelf",
    url: "https://life.dir.bg/zdrave-i-krasota/provede-se-parvoto-izdanie-na-konferentsiyata-za-biohaking-i-dalgoletie-betterself#",
    source: "Dir.bg",
  },
];

export default function Event2025Page() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const membersData = await getMembers();
      setMembers(membersData || []);
    };

    fetchMembers();
  }, []);

  return (
    <div className="bg-white">
      {/* Hero секция */}
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:px-16">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Събитие BetterSelf 2025
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Първото издание на конференцията за биохакинг и дълголетие - 02 ноември 2025
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-500/20 px-6 py-3 text-base font-semibold text-green-400 ring-2 ring-green-500/50">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Събитието приключи успешно!
          </div>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        >
          <circle
            r={512}
            cx={512}
            cy={512}
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stopColor="#ff8d00" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Press Release секция */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-[#ff8d00] mb-4">
              <NewspaperIcon className="h-5 w-5" />
              Press Release
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Медийни Публикации
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Вижте какво пише медията за нашето събитие
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pressReleases.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 p-6 shadow-lg border-2 border-[#ff8d00]/20 hover:border-[#ff8d00]/50 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#ff8d00] flex items-center justify-center">
                    <NewspaperIcon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[#ff8d00] mb-2">
                      {article.source}
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#ff8d00] transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 group-hover:text-[#ff8d00] transition-colors">
                      <span>Прочети повече</span>
                      <svg
                        className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Програма от 2025 */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Програма на събитието 2025
            </h2>
            <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 text-base font-semibold text-gray-700">
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-[#ff8d00]" />
                <span>02 ноември 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-[#ff8d00]" />
                <span>Гранд Хотел Астория</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {scheduleData.map((item, index) => {
              const styles = getTypeStyles(item.type);

              return (
                <div key={item.id} className="relative group">
                  <div className="hidden md:flex absolute -top-3 -left-3 z-30 items-center justify-center w-10 h-10 rounded-full bg-[#ff8d00] text-white font-bold text-sm shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>

                  <div
                    className={`relative ${styles.cardBg} border-2 ${styles.borderColor} rounded-2xl p-5 ${styles.shadowColor} shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] h-full flex flex-col`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-md border border-gray-200 w-fit">
                        <ClockIcon className="h-4 w-4 text-[#ff8d00]" />
                        {item.time}
                      </div>
                      {item.type === "panel" && (
                        <span
                          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${styles.badge}`}
                        >
                          {styles.label}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-[#ff8d00] transition-colors duration-300">
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

                    <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
                      {item.description}
                    </p>

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

      {/* Теми от 2025 */}
      <div className="bg-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-white">
              Темите 2025
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {incentives2025.slice(0, 6).map((incentive) => (
              <div
                key={incentive.name}
                className="flex flex-col items-center text-center p-6 pb-4 rounded-lg border border-white bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 h-full justify-between"
              >
                <div className="flex flex-col items-center w-full">
                  <div className="shrink-0 mt-6">
                    <div className="h-20 w-20 flex items-center justify-center rounded-full bg-[#ff8d00]">
                      <incentive.icon className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-medium text-white">
                      {incentive.name}
                    </h3>
                    <p className="mt-1 text-base font-medium text-orange-400">
                      {incentive.description}
                    </p>
                  </div>

                  {incentive.video && (
                    <div className="mt-4 w-full">
                      <video
                        className="w-full h-auto rounded-lg shadow-lg"
                        controls
                        preload="metadata"
                        style={{
                          maxHeight: "200px",
                          objectFit: "cover",
                        }}
                      >
                        <source src={incentive.video} type="video/quicktime" />
                        <source src={incentive.video} type="video/mp4" />
                        Вашият браузър не поддържа видео елемента.
                      </video>
                    </div>
                  )}

                  {incentive.youtubeVideo && (
                    <div className="mt-4 w-full">
                      <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px]">
                        <iframe
                          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl border-2 border-orange-200"
                          src={`https://www.youtube-nocookie.com/embed/${incentive.youtubeVideo}?modestbranding=1&rel=0&showinfo=0&controls=1&hd=1&iv_load_policy=3&fs=1&disablekb=0&title=0&byline=0&portrait=0`}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 mb-6">
                  <p className="text-base text-white">{incentive.lecturer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {incentives2025.slice(6, 8).map((incentive) => (
                <div
                  key={incentive.name}
                  className="flex flex-col items-center text-center p-6 pb-4 rounded-lg border border-white bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 h-full justify-between"
                >
                  <div className="flex flex-col items-center w-full">
                    <div className="shrink-0 mt-6">
                      <div className="h-20 w-20 flex items-center justify-center rounded-full bg-[#ff8d00]">
                        <incentive.icon className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-medium text-white">
                        {incentive.name}
                      </h3>
                      <p className="mt-1 text-base font-medium text-orange-400">
                        {incentive.description}
                      </p>
                    </div>

                    {incentive.video && (
                      <div className="mt-4 w-full">
                        <video
                          className="w-full h-auto rounded-lg shadow-lg"
                          controls
                          preload="metadata"
                          style={{
                            maxHeight: "200px",
                            objectFit: "cover",
                          }}
                        >
                          <source
                            src={incentive.video}
                            type="video/quicktime"
                          />
                          <source src={incentive.video} type="video/mp4" />
                          Вашият браузър не поддържа видео елемента.
                        </video>
                      </div>
                    )}

                    {incentive.youtubeVideo && (
                      <div className="mt-4 w-full">
                        <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px]">
                          <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl border-2 border-orange-200"
                            src={`https://www.youtube-nocookie.com/embed/${incentive.youtubeVideo}?modestbranding=1&rel=0&showinfo=0&controls=1&hd=1&iv_load_policy=3&fs=1&disablekb=0&title=0&byline=0&portrait=0`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 mb-6">
                    <p className="text-base text-white">{incentive.lecturer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Лектори от 2025 */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Лектори 2025
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Запознайте се с нашите лектори от първото издание
            </p>
          </div>

          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-12 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {members.map((member, index) => (
              <li
                key={member.id}
                className="flex flex-col items-center text-center"
              >
                {member.slug && (
                  <Link
                    href={`/lecturers/${member.slug}`}
                    prefetch={true}
                    className="group"
                  >
                    <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto overflow-hidden rounded-2xl group-hover:opacity-75 transition-all duration-300">
                      <Image
                        fill
                        sizes="(max-width: 640px) 16rem, (max-width: 768px) 18rem, (max-width: 1024px) 20rem, 24rem"
                        quality={100}
                        priority={index < 3}
                        loading={index < 3 ? "eager" : "lazy"}
                        alt={member.name || "Член на екипа"}
                        src={member.profilepicture || "/placeholder.webp"}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        format="webp"
                      />

                      <div className="absolute bottom-3 right-3 md:hidden">
                        <div className="bg-[#ff8d00] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border-2 border-white">
                          Вижте повече
                        </div>
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="text-white text-sm font-medium flex items-center justify-center gap-2">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                            Вижте повече за лектора
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900 group-hover:text-[#ff8d00] transition-colors duration-300">
                      {member.name || "Член на екипа"}
                    </h3>
                    <p className="text-base/7 text-gray-600">
                      {member.position || ""}
                    </p>
                  </Link>
                )}
                <ul role="list" className="mt-6 flex gap-x-6">
                  {member.linkedin && member.linkedin.url && (
                    <li>
                      <Link
                        href={member.linkedin.url}
                        target={member.linkedin.target || "_blank"}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          className="size-5"
                        >
                          <path
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </li>
                  )}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Навигация обратно */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-[#ff8d00] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Обратно към събитие 2026
          </Link>
        </div>
      </div>
    </div>
  );
}
