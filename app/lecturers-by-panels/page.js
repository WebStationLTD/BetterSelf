import LecturerCard from "../../components/LecturerCard";

export const metadata = {
  title: "Участници в панели - BetterSelf",
  description:
    "Разгледайте нашите експертни участници, организирани по специализирани панели: Иновации и технологии и Панел Longevity. Всеки панел представя водещи специалисти в съответната област.",
};

// Данни за лекторите - hardcoded в кода
const panelsData = {
  "innovations-ai": {
    title: "Иновации и технологии",
    subtitle: "Водещи експерти в областта на технологиите и иновациите",
    color: "from-blue-600 to-purple-600",
    bgPattern: "bg-blue-50",
    lecturers: [
      {
        id: 101,
        name: "Gary Andrew Rhodes",
        company: "Screen My Bones®",
        companyLink: "https://www.screenmybones.com",
        description:
          "Gary Andrew Rhodes е отдаден защитник на напредъка в мускулно-скелетното здраве и на справянето с глобалните предизвикателства, свързани със здравето на костите и мускулите. Като основател на Screen My Bones® той води движение, което прави съвременните проактивни решения за скелетно здраве достъпни за лекари, терапевти и техните пациенти. Чрез интегриране на технологии като Echolight REMS и Biodensity в клиничната практика той помага да се запълнят критични празнини в превенцията, откриването и управлението на скелетното здраве.",
        image: "/gary-andrew-rhodes.jpg",
      },
      {
        id: 102,
        name: "Биляна Маринова",
        company: "Dr. Bastet",
        companyLink: "https://drbastet.com/",
        description:
          'Създател на Dr. Bastet и посланик на глюкозната революция в България. След като тялото ѝ "се отказва" на 39 – без енергия, с подут корем и блокиран метаболизъм – Биляна тръгва по пътя на дълбока лична трансформация. През знания, проучвания и обучения създава GlucoHack – първата българска формула, вдъхновена от биохакинг и нутригеномика, която работи с тялото, а не срещу него. Днес тя иска да вдъхнови със своя пример други жени (и мъже) да си върнат контрола – не чрез диети, а по натурален начин, чрез малки ритуали, фибри, суперхрани и ензими, които трансформират тялото отвътре навън.',
        image: "/биляна-маринова.jpg",
      },
      {
        id: 103,
        name: "Биорезонанс",
        company: "",
        description: "",
        image: "/placeholder.webp",
      },
      {
        id: 104,
        name: "Грег Диаманти",
        company: "",
        description: "",
        image: "/placeholder.webp",
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
        id: 201,
        name: "Мариана Атанасова",
        company: "",
        description: "",
        image: "/placeholder.webp",
      },
      {
        id: 202,
        name: "Мария Варсанова",
        company: "Biohacking.bg",
        companyLink: "https://biohacking.bg/",
        description:
          "Биохакинг коуч, нутриционист и треньор с мисия да преведе хората отвъд стандартните подходи към здравето, храненето и енергията. Създател на Biohacking.bg – платформата, която обединява наука, технологии и практики за оптимизиране на тялото и ума. Мария е сертифициран PN Level 1 Nutrition Coach и експерт в изграждането на хранителни и тренировъчни протоколи, базирани на данни от лабораторни изследвания и устройства като CGM и тракери за сън и перформънс. В своята работа тя показва как устройствата за проследяване – от глюкозни сензори до wearables за сън и HRV – могат да се превърнат в инструмент за по-добро самопознание, по-висока продуктивност и превенция на хронични състояния.",
        image: "/мария-варсанова.jpg",
      },
      {
        id: 203,
        name: "Джули",
        company: "Biohacking.bg",
        companyLink: "https://biohacking.bg/",
        description: "",
        image: "/placeholder.webp",
      },
      {
        id: 204,
        name: "Д-р Гергана Иванова",
        company: "Екип на проф. Иво Петров",
        description:
          "Д-р Гергана Иванова е анестезиолог, реаниматор и преподавател в Медицински университет-София. Като инструктор към European Resuscitation Council обучава медицински специалисти и граждани в оказване на кардиопулмонална ресусцитация и работи по международни проекти, свързани с изграждането на ефективни системи за реакция при сърдечен арест. Вярва, че най-мощният инструмент в медицината не е технологията, а добре подготвеният човек – защото понякога няколко правилни действия в първите минути могат да променят съдбата на един живот. Работата ѝ обединява науката, обучението и практиката с убеждението, че най-добрият „биохак“ е разбирането как функционира човешкото тяло. Тема: Последният биохак: как да рестартираш човешкия живот. Подтема: Как науката за сърдечния арест показва докъде се простират възможностите на човешкия организъм.",
        image: "/gergana-ivanova.jpg",
      },
      {
        id: 205,
        name: "Ванко Пъмпкин",
        company: "",
        description: "",
        image: "/placeholder.webp",
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
            {/* Панел "Иновации и технологии" */}
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
