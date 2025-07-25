"use client";

import Image from "next/image";
import Link from "next/link";
import ContactForm from "./contactForm";

const sponsors = [
  {
    name: "Grand Hotel Astoria",
    logo: "/grand-hotel-astoria-logo.png",
    link: "https://www.astoriagrandhotel.bg/",
    description:
      "Луксозен хотел в сърцето на града, предлагащ комфорт и безупречно обслужване.",
  },
  {
    name: "Derma Act",
    logo: "/derma-act-logo.png",
    link: "https://derma-act.bg/",
    description:
      "Водеща клиника по дерматология и естетична медицина с най-съвременна апаратура.",
  },
  {
    name: "Nad Clinic",
    logo: "/nad-clinic-logo.jpg",
    link: "https://nad.bg/",
    description: "Иновативен център за клетъчна регенерация и подмладяване.",
  },
];

const partners = [
  {
    name: "Webstation",
    logo: "/webstation-ltd-logo.svg",
    link: "https://webstation.bg/",
    description:
      "Дигитална агенция, специализирана в изработката на уебсайтове и онлайн маркетинг.",
  },
  {
    name: "Офсет График",
    logo: "/офсет-график-Logo.png",
    description:
      "Печатница, предлагаща висококачествени печатни материали и рекламни продукти.",
  },
  {
    name: "Createx",
    logo: "/createx-logo.png",
    link: "https://createx.bg/",
    description:
      "Софтуерна компания, фокусирана върху създаването на уеб и мобилни приложения.",
  },
  {
    name: "Ecom",
    logo: "/ecom-logo.png",
    description:
      "Компания, предоставяща решения за електронна търговия и дигитален маркетинг.",
  },
  {
    name: "Max Group Events",
    logo: "/max-group-events-logo.png",
    link: "https://maxgroupevents.com/",
    description:
      "Агенция за организиране на събития, предлагаща цялостни решения за корпоративни и частни партита.",
  },
  {
    name: "Очи в очи",
    logo: "/ochi-v-ochi-logo.jpg",
    link: "https://www.youtube.com/@jasminnemajid",
    description: "Популярно YouTube шоу за интервюта с интересни личности.",
  },
  {
    name: "FindStaff",
    logo: "/findstaff-logo.jpg",
    link: "https://www.findstaff.bg/",
    description: "Платформа за намиране на работа и кариерно развитие.",
  },
  {
    name: "Даник добро",
    logo: "/danyk-dobro-logo.jpg",
    description:
      "Благотворителна организация, подкрепяща различни социални каузи.",
  },
  {
    name: "Suga Buba",
    logo: "/suga-buba-logo.jpg",
    link: "https://sugabuba.com/",
    description: "Онлайн магазин за ръчно изработени бижута и аксесоари.",
  },
  {
    name: "Preciva",
    logo: "/preciva-logo.jpg",
    link: "https://preciva.eu/",
    description:
      "Компания за производство и дистрибуция на висококачествени хранителни добавки.",
  },
];

export default function SponsorsAndPartners({ children }) {
  return (
    <>
      {/* Contact Section - Dark */}
      <div className="relative isolate bg-gray-900">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pt-16 pb-16 sm:pt-20 lg:static lg:px-8 lg:py-24">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
                <svg
                  className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                      width={200}
                      height={200}
                      x="100%"
                      y={-1}
                      patternUnits="userSpaceOnUse"
                    >
                      <path d="M130 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                  </defs>
                  <svg
                    x="50%"
                    y={-1}
                    className="overflow-visible fill-gray-800/20"
                  >
                    <path d="M-200 0h201v201h-201Z" strokeWidth={0} />
                  </svg>
                  <rect
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                    fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Станете спонсор
              </h2>
              {children}
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Вярвате в силата на превенцията, оптималното здраве и
                съзнателния живот? Ако вашата мисия, продукт или услуга помага
                на хората да се превърнат в по-добра версия на себе си чрез
                биохакинг, дълголетие, спорт, нутриционистика, медицина или
                холистичен подход – мястото ви е с нас!
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Better Self - Biohacking & Longevity Conference 2025 събира на
                едно място водещите имена, брандове и иноватори в сектора.
                Свържете се с нас, за да обсъдим персонализирана форма на
                партньорство, която да отрази най-силно стойността на вашия
                бранд. Бъдете част от промяната, която вдъхновява.
              </p>
              <div className="mt-10 text-center">
                <Link
                  href="/Betterself-Proposal.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-md bg-[#ff8d00] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:whitespace-nowrap"
                >
                  Изтеглете PDF за повече информация
                </Link>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>

      {/* Intro Section - Light */}
      <div className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Нашите Спонсори и Партньори
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Изключително сме благодарни на нашите спонсори и партньори, които
              правят възможно провеждането на BetterSelf. Тяхната подкрепа ни
              позволява да съберем на едно място водещи експерти и ентусиасти в
              областта на биохакинга и дълголетието.
            </p>
            <div className="mt-10">
              <Link
                href="/Betterself-Proposal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-md bg-[#ff8d00] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 sm:whitespace-nowrap"
              >
                Изтеглете PDF за повече информация
              </Link>
            </div>
          </div>

          {/* Sponsors Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
              Спонсори
            </h2>
            <div className="w-48 h-1 mx-auto my-4 bg-[#ff8d00] rounded"></div>
            <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {sponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-lg transition hover:shadow-2xl"
                >
                  <div className="relative h-32 w-full mb-6">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      quality={100}
                      loading="lazy"
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold leading-8 text-gray-900">
                    {sponsor.name}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600 flex-grow">
                    {sponsor.description}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={sponsor.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold leading-6 text-[#ff8d00] hover:text-orange-500"
                    >
                      Научете повече <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section - Dark */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">
            Партньори
          </h2>
          <div className="w-48 h-1 mx-auto my-4 bg-gray-700 rounded"></div>
          <div className="mx-auto mt-16 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:gap-x-10">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center text-center"
              >
                {partner.link ? (
                  <Link
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-32 w-full items-center justify-center rounded-2xl bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105"
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        quality={100}
                        loading="lazy"
                        className="object-contain"
                      />
                    </div>
                  </Link>
                ) : (
                  <div className="flex h-32 w-full items-center justify-center rounded-2xl bg-white p-6 shadow-lg">
                    <div className="relative h-full w-full">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        quality={100}
                        loading="lazy"
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}
                <p className="mt-6 text-sm leading-6 text-gray-400">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
