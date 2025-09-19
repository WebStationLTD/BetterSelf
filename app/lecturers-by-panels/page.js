import Image from "next/image";
import LecturerCard from "../../components/LecturerCard";

export const metadata = {
  title: "Участници в панели - BetterSelf",
  description:
    "Разгледайте нашите експертни участници, организирани по специализирани панели: Иновации и изкуствен интелект, и Панел Longevity. Всеки панел представя водещи специалисти в съответната област.",
};

// Данни за лекторите - hardcoded в кода
const panelsData = {
  "innovations-ai": {
    title: "Иновации и изкуствен интелект",
    subtitle: "Водещи експерти в областта на технологиите и иновациите",
    color: "from-blue-600 to-purple-600",
    bgPattern: "bg-blue-50",
    lecturers: [
      {
        id: 2,
        name: "Александър Йорданов",
        company: "WebStation™ & Insurance BG",
        companyLink: "https://webstation.bg/",
        description:
          "Експерт в дигиталния маркетинг и технологичните иновации. Александър Йорданов е основател на WebStation™ и Insurance BG, компании, които се специализират в оптимизацията на онлайн процесите. Завършил е Anglia Ruskin University в Cambridge, UK. С дълбоки познания в Google процесите, SEO оптимизация с помощта на изкуствения интелект и над десетилетие опит в дигиталния маркетинг, той трансформира начина, по който компаниите достигат до своите клиенти. Александър интегрира най-новите AI технологии в маркетингови стратегии, постигайки революционни резултати за своите клиенти. Неговият подход съчетава технологичната иновация с дълбоко разбиране на потребителското поведение и критериите на търсещите машини, правейки компанията му WebStation™ водещ фактор в българската технологична SEO екосистема.",
        image: "/александър-йорданов.jpg",
      },
      // Временно скрити участници - чакат снимки и текстове

      // {
      //   id: 4,
      //   name: "Димитър Гочев",
      //   company: "",
      //   description:
      //     "Lorem ipsum dolor sit amet, consectetur adipисcing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      //   image: "/placeholder.webp",
      // },
      // {
      //   id: 5,
      //   name: "Георги",
      //   company: "Терма Нумера",
      //   description:
      //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      //   image: "/placeholder.webp",
      // },
      {
        id: 6,
        name: "Денис Колев",
        company: "DexaFit Sofia",
        companyLink: "https://www.sofia.dexafit.com/bg",
        description:
          "Co-Founder на DexaFit Sofia,компания, която е представител на InsideTracker и Bioniq за България. Медицински център, който се стреми да предоставя персонализирани и технологични подходи към личното здраве на своите пациенти.",
        image: "/денис-колев.jpg",
      },
      {
        id: 3,
        name: "Йоан Аспарухов",
        company: "EcomLabs360",
        // EcomLabs360 няма публичен сайт в sponsors списъка
        description:
          "Йоан Аспарухов е експерт в електронната търговия и дигиталния маркетинг с над десет години опит в изграждането и развитието на онлайн бизнеси в България и чужбина. Той е основател на EcomLabs360 – агенция за performance маркетинг, работеща с утвърдени и скалиращи брандове. В портфолиото на компанията му влизат партньорства с различни международни и локални марки. Йоан има богат опит в управлението на рекламни кампании в глобални платформи, създаването на маркетингови стратегии и оптимизацията на онлайн магазини. Съчетава креативност и данни, за да помага на брандовете да постигат устойчив растеж, като активно интегрира иновативни технологии и изкуствен интелект в процесите на дигиталния маркетинг. На BetterSelf 2025 той ще сподели практически опит за ролята на изкуствения интелект в ускоряването на растежа и развитието на съвременните брандове.",
        image: "/йоан-аспарухов.jpg",
      },
      {
        id: 1,
        name: "Александър Иванов",
        company: "wellConnected & CreateX",
        companyLink: "https://createx.bg/",
        description:
          'Александър Иванов е създател на първата екосистема от комуникационни и дигитални агенции в България - wellConnected, Александър Иванов ръководи утвърдени компании като CreateX, Native Digital и InventAR - първата агенция за добавена реалност в страната, но и постоянно поставя нови стандарти в бранша. С образование по "Финанси" от Стопанска академия "Димитър А. Ценов" и страст към преподаването, той е завършил две годишната програма като учител по програма "Заедно в Час", където вдъхновява много ученици. В периода 2016 - 2020 година е бил образователен директор в SoftUni Digital & SoftUni Creative и главен мениджър за България на Google Digital Garage, където се е доказал като лидер в обучението по дигитални умения. Неговата мисия е да подготви хората за бъдещето на маркетинга и технологиите. И е успял - с над 45 000 курсисти, преминали през курсовете му по Marketing Basics в SoftUni и Основи на дигиталния маркетинг в Националния военен университет "Васил Левски" и Великотърновския университет "Св. св. Кирил и Методий". Освен това Александър е активен социален предприемач и съосновател на Сдружение "Дигитален Търновград" и медийната група "Дигитално Дело", като допринася за дигиталната трансформация на регионите в България. Той също така вдъхновява младите поколения чрез менторство в инициативата Mentor the Young.',
        image: "/александър-иванов.jpg",
      },
    ],
  },
  longevity: {
    title: "Панел Longevity",
    subtitle: "Експерти в областта на дълголетието и здравето",
    color: "from-green-600 to-teal-600",
    bgPattern: "bg-green-50",
    lecturers: [
      {
        id: 6,
        name: "Биляна Маринова",
        company: "Dr. Bastet",
        companyLink: "https://drbastet.com/",
        description:
          'Създател на Dr. Bastet и посланик на глюкозната революция в България. След като тялото ѝ "се отказва" на 39 – без енергия, с подут корем и блокиран метаболизъм – Биляна тръгва по пътя на дълбока лична трансформация. През знания, проучвания и обучения създава GlucoHack – първата българска формула, вдъхновена от биохакинг и нутригеномика, която работи с тялото, а не срещу него. Днес тя иска да вдъхнови със своя пример други жени (и мъже) да си върнат контрола – не чрез диети, а по натурален начин, чрез малки ритуали, фибри, суперхрани и ензими, които трансформират тялото отвътре навън.',
        image: "/биляна-маринова.jpg",
      },
      {
        id: 7,
        name: "Даниел Цанков",
        company: "NAD.BG",
        companyLink: "https://nad.bg/",
        description:
          "Предприемач, инвеститор и визионер в сферата на биохакинга и дълголетието. Собственик на NAD.BG с международен опит в изграждането на компании в Русия, Украйна, САЩ, Франция и Сингапур. В портфолиото му стоят милиардни сделки, управление на над $38 млрд. активи и ръководство на екипи с хиляди служители. Master Franchise Owner на REVIV Bulgaria, COO на VostokFinance Group, консултант в Bain & Company и съосновател на Easy Credit Ukraine. На BetterSelf 2025 ще говори за най-иновативните практики в биохакинга и дълголетието, как да различаваме реално работещите подходи от маркетинговите митове и кои тенденции в науката и технологиите вече променят живота ни.",
        image: "/даниел-цаков.jpg",
      },
      {
        id: 8,
        name: "Анна Петкова",
        company: "MyPureOlive",
        companyLink: "https://mypureolive.com/",
        description:
          'Сертифициран сомелиер на зехтин, посланик на Средиземноморската диета и Интуитивно хранене, автор на "Слънце и зехтин – истории и рецепти за пленителни вкусове и аромати от Средиземноморието". През последните 10 години Анна е посветена на развитие на културата на суперхраната зехтин extra virgin и щастие с храната и себе си, в близост с природата. Образователният проект mypureolive.com насърчава себепознаването и следване на философията на Средиземноморската диета, в хармония с ритъма на сезоните. За жизненост, красота и здраве отвътре навън. Анна е икономист по образование с широк бизнес и управленски опит в мултинационални хранителни компании, в и извън България.',
        image: "/анна-петкова.jpg",
      },
    ],
  },
};

export default function LecturersByPanels() {
  return (
    <>
      {/* Header със същия ефект като в /lecturers */}
      <div className="bg-white">
        <div className="mx-auto max-w-10/10 py-0 sm:py-0 lg:px-0">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-12 text-center shadow-2xl sm:px-12">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Участници в панели
              </h1>
              <p className="mt-6 text-lg/8 text-white">
                Открийте нашите експертни участници, организирани по
                специализирани панели. Всеки панел представя водещи специалисти
                в съответната област.
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

      {/* Основно съдържание - два панела по 50% */}
      <div className="bg-gray-50 min-h-screen">
        <div className="mx-auto max-w-full">
          <div className="grid lg:grid-cols-2 gap-0 min-h-screen">
            {/* Панел "Иновации и изкуствен интелект" */}
            <div
              className={`relative ${panelsData["innovations-ai"].bgPattern} lg:border-r-2 border-gray-200`}
            >
              {/* Декоративен background ефект */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${panelsData["innovations-ai"].color}`}
                ></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
              </div>

              <div className="relative z-10 p-8 lg:p-12">
                {/* Заглавие на панела */}
                <div className="text-center mb-12">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${panelsData["innovations-ai"].color} mb-6`}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {panelsData["innovations-ai"].title}
                  </h2>
                  <p className="text-lg text-gray-600 max-w-md mx-auto">
                    {panelsData["innovations-ai"].subtitle}
                  </p>
                  <div
                    className={`w-24 h-1 bg-gradient-to-r ${panelsData["innovations-ai"].color} mx-auto mt-4 rounded-full`}
                  ></div>
                </div>

                {/* Лектори */}
                <div className="space-y-8">
                  {panelsData["innovations-ai"].lecturers.map((lecturer) => (
                    <LecturerCard
                      key={lecturer.id}
                      lecturer={lecturer}
                      panelColor={panelsData["innovations-ai"].color}
                      ringColor="ring-blue-100"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Панел "Longevity" */}
            <div className={`relative ${panelsData["longevity"].bgPattern}`}>
              {/* Декоративен background ефект */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${panelsData["longevity"].color}`}
                ></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2310B981%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M30%2030c0-11.046-8.954-20-20-20s-20%208.954-20%2020%208.954%2020%2020%2020%2020-8.954%2020-20zm0%200c0%2011.046%208.954%2020%2020%2020s20-8.954%2020-20-8.954-20-20-20-20%208.954-20%2020z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
              </div>

              <div className="relative z-10 p-8 lg:p-12">
                {/* Заглавие на панела */}
                <div className="text-center mb-12">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${panelsData["longevity"].color} mb-6`}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {panelsData["longevity"].title}
                  </h2>
                  <p className="text-lg text-gray-600 max-w-md mx-auto">
                    {panelsData["longevity"].subtitle}
                  </p>
                  <div
                    className={`w-24 h-1 bg-gradient-to-r ${panelsData["longevity"].color} mx-auto mt-4 rounded-full`}
                  ></div>
                </div>

                {/* Лектори */}
                <div className="space-y-8">
                  {panelsData["longevity"].lecturers.map((lecturer) => (
                    <LecturerCard
                      key={lecturer.id}
                      lecturer={lecturer}
                      panelColor={panelsData["longevity"].color}
                      ringColor="ring-green-100"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
