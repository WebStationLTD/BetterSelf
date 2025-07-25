import Image from "next/image";
import Link from "next/link";
import { getMembers } from "../../services/members";

export const metadata = {
  title: "Лектори - BetterSelf",
  description:
    "Запознайте се с водещите експерти в областта на биохакинга, здравето и личното развитие на BetterSelf събитието. Тщательно подбрани лектори с богат опит и научна експертиза.",
};

export default async function Team() {
  const members = await getMembers();

  if (!members || members.length === 0) {
    throw new Error("Team members not found");
  }

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
            {members.map((member) => (
              <li
                key={member.id}
                className="flex flex-col gap-10 py-12 first:pt-0 last:pb-0 sm:flex-row"
              >
                <Link
                  href={`/team/${member.slug}`}
                  prefetch={true}
                  className="block w-32 sm:w-36 md:w-40 lg:w-44 flex-shrink-0"
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                    <Image
                      fill
                      alt={member.name || "Член на екипа"}
                      src={member.profilepicture || "/placeholder.webp"}
                      className="object-cover"
                      sizes="(max-width: 639px) 8rem, (max-width: 767px) 9rem, (max-width: 1023px) 10rem, 11rem"
                      quality={100}
                    />
                  </div>
                </Link>
                <div className="max-w-xl flex-auto">
                  <Link href={`/team/${member.slug}`} prefetch={true}>
                    <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900">
                      {member.name || "Член на екипа"}
                    </h3>
                    <p className="text-base/7 text-gray-600">
                      {member.position || ""}
                    </p>
                    <div
                      className="mt-2 text-base/7 text-gray-600 prose"
                      dangerouslySetInnerHTML={{
                        __html:
                          member.description && member.description.length > 100
                            ? `${member.description.slice(0, 200)}...`
                            : member.description || "",
                      }}
                    />
                  </Link>
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
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
