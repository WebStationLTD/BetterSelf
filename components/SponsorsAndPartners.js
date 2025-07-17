import Image from "next/image";
import Link from "next/link";

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

export default function SponsorsAndPartners() {
  return (
    <div className="bg-gray-50 py-20 sm:py-28">
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
              href="/Betterself Proposal .pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[#ff8d00] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              Изтегли спонсорски пакети тук
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

        {/* Partners Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Партньори
          </h2>
          <div className="w-48 h-1 mx-auto my-4 bg-gray-300 rounded"></div>
          <div className="mx-auto mt-16 flow-root">
            <div className="-mt-2 -ml-4 flex flex-wrap justify-center gap-x-8 gap-y-12 lg:-ml-8">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex flex-col items-center text-center w-48"
                >
                  {partner.link ? (
                    <Link
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative h-20 w-full hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        quality={100}
                        loading="lazy"
                        className="object-contain"
                      />
                    </Link>
                  ) : (
                    <div className="relative h-20 w-full">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        quality={100}
                        loading="lazy"
                        className="object-contain"
                      />
                    </div>
                  )}
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
