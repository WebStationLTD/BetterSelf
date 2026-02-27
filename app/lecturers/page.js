import Image from "next/image";
import Link from "next/link";
import { getMembers } from "../../services/members";

export const metadata = {
  title: "Лектори - BetterSelf",
  description:
    "Запознайте се с водещите експерти в областта на биохакинга, здравето и личното развитие на BetterSelf събитието. Тщательно подбрани лектори с богат опит и научна експертиза.",
};

export default async function Team() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-10/10 py-0 sm:py-0 lg:px-0">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-12 text-center shadow-2xl sm:px-12">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Нашите лектори
              </h1>
              <p className="mt-6  text-lg/8 text-white">
                Запознайте се с водещите експерти в областта на биохакинга,
                здравето и личното развитие, които ще споделят своите знания на
                BetterSelf събитието.
              </p>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute -top-50 left-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
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
                  <stop offset={1} stopColor="#ff8d00" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-5">
          <div className="w-full xl:max-w-2xl xl:col-span-2 order-last xl:order-first">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              За лекторите
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Нашите лектори са подбрани експерти с дълбоки познания в областта
              на биохакинга, медицината, психологията и личното развитие. Всеки
              от тях притежава уникален практически опит и научна експертиза,
              която ще ви помогне да откриете нови начини за оптимизиране на
              здравето и потенциала си.
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              От водещи лекари и професори до признати специалисти в областта на
              храненето, неврологията и емоционалната интелигентност - всеки
              лектор донася ценни практически знания и научно обосновани методи.
              Техните презентации ще ви вдъхновят и ще ви дадат конкретни
              инструменти за подобряване на качеството на живота ви.
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Подготвили сме за вас срещи с истински лидери в своите области!
            </p>
          </div>
          <ul role="list" className="divide-y divide-gray-200 xl:col-span-3">
            {Array.from({ length: 8 }).map((_, index) => (
              <li
                key={index}
                className="flex flex-col gap-10 py-12 first:pt-0 last:pb-0 sm:flex-row"
              >
                <div className="block w-32 sm:w-36 md:w-40 lg:w-44 flex-shrink-0">
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group hover:from-orange-50 hover:to-yellow-50 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff8d00]/10 via-orange-500/5 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative z-10 text-center">
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff8d00] via-orange-400 to-yellow-500 animate-pulse">
                        Coming Soon
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="max-w-xl flex-auto flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-lg text-gray-500">
                      Очаквайте скоро
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
