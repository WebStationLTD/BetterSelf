export const metadata = {
  title: "Екип - BetterSelf",
  description:
    "Запознайте се с целия екип, който стои зад събитието BetterSelf - личности и фирми, които правят това събитие възможно.",
};

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden min-h-[600px]">
        {/* Beautiful gradient background covering full section */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-orange-600/20"></div>

        <div
          className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-orange-400 to-orange-600 opacity-30 blur-3xl rounded-full animate-pulse"
          style={{ animationDuration: "4s" }}
        ></div>

        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-orange-600 to-yellow-500 opacity-25 blur-3xl rounded-full animate-pulse"
          style={{ animationDuration: "6s" }}
        ></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120rem] h-[60rem] bg-gradient-to-r from-orange-400/10 via-orange-500/20 to-orange-600/10 blur-3xl rounded-full opacity-60"></div>

        <div
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-20 blur-2xl rounded-full animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>

        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-orange-500 to-red-500 opacity-15 blur-2xl rounded-full animate-pulse"
          style={{ animationDuration: "7s" }}
        ></div>

        <div className="relative z-10 mx-auto max-w-7xl py-24 sm:py-32 lg:py-40">
          <div className="px-6 text-center sm:px-16">
            <div className="mx-auto max-w-4xl">
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
                Нашият{" "}
                <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Екип
                </span>
              </h1>
              <p className="mt-8 text-xl/8 text-gray-300 sm:text-2xl/9">
                Запознайте се с хората и фирмите, които правят BetterSelf
                събитието възможно
              </p>
              <p className="mt-6 text-lg/8 text-gray-400">
                Зад всяко успешно събитие стоят страстни професионалисти и
                надеждни партньори
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* IT Team Section */}
      <div className="bg-gray-50 py-12 sm:py-6">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          {/* Section Title */}
          <div className="mx-auto max-w-2xl text-center mb-6">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              IT Екип
            </h2>
          </div>

          {/* WebStation Section - Full Width */}
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-emerald-100/50">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-green-50"></div>

            {/* Advanced gradient effects with WebStation color */}
            <div
              className="absolute -bottom-24 -left-24 w-80 h-80 opacity-35 blur-2xl rounded-full animate-pulse"
              style={{
                background: "linear-gradient(135deg, #129160, #059669)",
                animationDuration: "6s",
              }}
            ></div>
            <div
              className="absolute top-80 sm:top-20 left-1/2 -translate-x-1/2 w-64 h-64 opacity-20 blur-xl rounded-full animate-pulse"
              style={{
                background:
                  "conic-gradient(from 0deg, #129160, #10B981, #129160)",
                animationDuration: "12s",
              }}
            ></div>
            <div
              className="absolute bottom-1/3 right-16 w-48 h-48 opacity-25 blur-lg rounded-full animate-pulse"
              style={{
                background: "radial-gradient(ellipse, #129160, transparent)",
                animationDuration: "10s",
              }}
            ></div>

            <div className="relative px-8 py-12 sm:px-16 sm:py-16">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
                {/* Left side - Content */}
                <div className="lg:col-span-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-[#129160] to-emerald-700 rounded-2xl flex items-center justify-center">
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
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          Технологичен партньор
                        </h3>
                        <p className="font-medium" style={{ color: "#129160" }}>
                          Водеща дигитална агенция в България
                        </p>
                      </div>
                    </div>

                    {/* WebStation Logo - right side on desktop, below on mobile */}
                    <div className="flex-shrink-0 self-start sm:self-center">
                      <img
                        src="/webstation-ltd-logo.svg"
                        alt="WebStation Logo"
                        className="h-16 w-auto"
                      />
                    </div>
                  </div>

                  <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
                    WebStation™
                  </h2>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed font-medium">
                    Една от водещите дигитални агенции в България в областта на
                    уеб разработка, SEO оптимизация и цялостен дигитален
                    маркетинг
                  </p>

                  <div className="space-y-4 text-gray-600">
                    <p className="text-lg leading-relaxed">
                      <strong className="text-gray-900">WebStation™</strong> се
                      утвърди като една от водещите дигитални агенции в България
                      с над{" "}
                      <strong style={{ color: "#129160" }}>
                        15 години непрекъснат растеж
                      </strong>{" "}
                      и иновации в областта на уеб технологиите. Нашето
                      превъзходство се потвърждава от впечатляващото портфолио
                      от{" "}
                      <strong style={{ color: "#129160" }}>
                        400+ реализирани уебсайтове
                      </strong>{" "}
                      и{" "}
                      <strong style={{ color: "#129160" }}>
                        300+ успешни SEO и Google Ads кампании
                      </strong>
                      , които трансформираха бизнеса на нашите клиенти.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Нашият{" "}
                      <strong className="text-gray-900">
                        елитен екип от сертифицирани експерти
                      </strong>{" "}
                      включва front-end и back-end специалисти, SEO стратези от
                      световна класа, сертифицирани Google Ads професионалисти и
                      креативни маркетолози за социални мрежи. От нашата база в
                      София доставяме дигитално превъзходство на клиенти в
                      България и международно, превръщайки техните амбиции в
                      дигитални успехи.
                    </p>
                  </div>

                  {/* Services */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Експертни дигитални решения:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Premium SEO Оптимизация",
                        "Иновативен Уеб Дизайн",
                        "React & Next.js Applications",
                        "Vue.js & Nuxt.js Solutions",
                        "Progressive Web Apps (PWA)",
                        "SPA Development",
                        "Headless CMS Интеграции",
                        "Custom JavaScript Frameworks",
                        "Google Ads Стратегии",
                        "360° Дигитален Маркетинг",
                        "E-commerce Решения",
                        "Професионална WordPress Разработка",
                      ].map((service) => (
                        <span
                          key={service}
                          className="px-3 py-1 bg-emerald-100 rounded-full text-sm font-medium"
                          style={{ color: "#129160" }}
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Middle - Visual representation */}
                <div className="relative hidden lg:block">
                  <div className="aspect-square w-full max-w-sm mx-auto">
                    {/* Tech stack visual */}
                    <div className="relative w-full h-full">
                      {/* Center logo */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-white rounded-3xl shadow-lg flex items-center justify-center border-4 border-emerald-100">
                          <img
                            src="/webstation-ltd-logo.svg"
                            alt="WebStation"
                            className="h-12 w-auto"
                          />
                        </div>
                      </div>

                      {/* Orbiting elements */}
                      <div
                        className="absolute inset-0 animate-spin"
                        style={{ animationDuration: "20s" }}
                      >
                        <div className="relative w-full h-full">
                          {[
                            {
                              icon: "🌐",
                              label: "Web Dev",
                              position: "top-0 left-1/2 -translate-x-1/2",
                            },
                            {
                              icon: "📈",
                              label: "SEO",
                              position: "top-1/4 right-0",
                            },
                            {
                              icon: "🎯",
                              label: "Ads",
                              position: "bottom-1/4 right-0",
                            },
                            {
                              icon: "📱",
                              label: "Mobile",
                              position: "bottom-0 left-1/2 -translate-x-1/2",
                            },
                            {
                              icon: "🛒",
                              label: "E-com",
                              position: "bottom-1/4 left-0",
                            },
                            {
                              icon: "💡",
                              label: "Design",
                              position: "top-1/4 left-0",
                            },
                          ].map((item, index) => (
                            <div
                              key={index}
                              className={`absolute w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center border-2 border-emerald-100 ${item.position}`}
                            >
                              <span className="text-lg">{item.icon}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Photo and Stats */}
              <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left - Team Photo */}
                <div className="relative">
                  <div className="relative">
                    {/* Decorative elements behind photo */}
                    <div className="absolute -top-4 -right-4 w-40 h-40 sm:w-56 sm:h-56 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse -z-10"></div>
                    <div
                      className="absolute -bottom-4 -left-4 w-40 h-40 sm:w-56 sm:h-56 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse -z-10"
                      style={{ animationDelay: "1s" }}
                    ></div>

                    <div className="relative aspect-[4/3] w-full max-w-lg mx-auto overflow-hidden rounded-2xl bg-gray-100 shadow-2xl z-10">
                      <img
                        src="/webstation_team.jpeg"
                        alt="WebStation Екип"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Photo label */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border border-emerald-100">
                      <p className="text-sm font-medium text-gray-700">
                        WebStation™ Екип
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right - Company Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-emerald-50 rounded-xl">
                    <div
                      className="text-2xl font-bold"
                      style={{ color: "#129160" }}
                    >
                      15+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Години превъзходство
                    </div>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 rounded-xl">
                    <div
                      className="text-2xl font-bold"
                      style={{ color: "#129160" }}
                    >
                      400+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Реализирани проекта
                    </div>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 rounded-xl">
                    <div
                      className="text-2xl font-bold"
                      style={{ color: "#129160" }}
                    >
                      450+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Доверили се клиенти
                    </div>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 rounded-xl">
                    <div
                      className="text-2xl font-bold"
                      style={{ color: "#129160" }}
                    >
                      300+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Успешни кампании
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Organizational Team Section */}
      <div className="bg-white py-12 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Title */}
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Организаторски екип
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Експертите и визионерите, които създават и развиват BetterSelf
            </p>
          </div>

          {/* Two Column Layout for Team Members */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Jasmina Majid */}
            <div className="relative isolate">
              <div className="flex flex-col items-center text-center">
                {/* Image */}
                <div className="relative mb-8">
                  {/* Decorative elements behind image */}
                  <div className="absolute -top-4 -right-4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse -z-10"></div>
                  <div
                    className="absolute -bottom-8 -left-4 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse -z-10"
                    style={{ animationDelay: "1s" }}
                  ></div>

                  <div className="relative aspect-square w-80 overflow-hidden rounded-3xl bg-gray-100 shadow-2xl z-10">
                    <img
                      src="/жасмина-маджид.webp"
                      alt="Д-р Жасмина Маджид"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
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
                    <div>
                      <p className="text-orange-600 font-medium text-center">
                        Основател & Визионер
                      </p>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                    Д-р Жасмина Маджид
                  </h3>

                  <p className="text-lg text-orange-600 mb-6 font-medium">
                    Основател и визионер на BetterSelf
                  </p>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed font-medium">
                    Създател на концепцията и главен организатор на
                    конференцията BetterSelf 2025
                  </p>

                  <div className="text-base text-gray-600 text-left space-y-5 leading-loose">
                    <p className="font-medium">
                      Д-р Жасмина Маджид е икономист, предприемач и медиен
                      професионалист с дългогодишен опит в създаването на
                      проекти, посветени на здравето, личностното развитие и
                      бъдещето на човешкия потенциал.
                    </p>
                    <p className="font-medium">
                      Тя е двигателят зад визията BetterSelf – не просто като
                      събитие, а като цялостна платформа и общност, която събира
                      най-иновативните специалисти, лекари, биохакери, психолози
                      и новатори с обща мисия: да направим по-доброто себе си
                      възможно – физически, психически и емоционално.
                    </p>
                    <p className="font-medium">
                      Като основен инициатор на конференцията, Жасмина е
                      отговорна за създаването на концепцията, подбора на
                      лекторите, стратегическото партньорство, избора на локация
                      и цялостната организация.
                    </p>
                    <p className="font-medium">
                      Нейната роля е визионерска – тя изгражда екипа, задава
                      посоката и създава мост между науката за дълголетие,
                      практиките на био-хакингa и реалните нужди на съвременния
                      човек.
                    </p>
                    <p className="font-medium">
                      BetterSelf е нейна кауза – платформа, която тепърва ще се
                      развива с годишни конференции, тематични мини-събития и
                      мрежа от професионалисти и компании, обединени от
                      желанието да вдъхновяват, лекуват и трансформират.
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="mt-8 grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-orange-50 rounded-xl">
                      <div className="text-2xl font-bold text-orange-600">
                        10+
                      </div>
                      <div className="text-sm text-gray-600">Години опит</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-xl">
                      <div className="text-2xl font-bold text-orange-600">
                        1000+
                      </div>
                      <div className="text-sm text-gray-600">Проекта</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Totka Naloka */}
            <div className="relative isolate">
              <div className="flex flex-col items-center text-center">
                {/* Image */}
                <div className="relative mb-8">
                  {/* Decorative elements behind image */}
                  <div
                    className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse -z-10"
                    style={{ animationDelay: "2s" }}
                  ></div>
                  <div
                    className="absolute -bottom-8 -left-4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse -z-10"
                    style={{ animationDelay: "3s" }}
                  ></div>

                  <div className="relative aspect-square w-80 overflow-hidden rounded-3xl bg-gray-100 shadow-2xl z-10">
                    <img
                      src="/totka-nalocca.jpg"
                      alt="Тотка Налока"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-blue-600 font-medium text-center">
                        Оперативен директор
                      </p>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
                    Тотка Налока
                  </h3>

                  <p className="text-lg text-blue-600 mb-6 font-medium">
                    Оперативен директор и стратегически консултант за сценично и
                    техническо преживяване
                  </p>

                  <div className="text-base text-gray-600 text-left space-y-5 leading-loose">
                    <p className="font-medium">
                      Тотка Налока е стратегически консултант с фокус върху
                      цялостния успех на събитията – от планирането и
                      изпълнението до рентабилността, печалбата и въздействието
                      върху участниците. Работи в тясно сътрудничество с
                      различни екипи, за да изгражда и прилага ефективни
                      стратегии, които гарантират постигането на конкретни
                      резултати.
                    </p>
                    <p className="font-medium">
                      В Biohacking BetaSelf 2025 Тотка отговаря за
                      стратегическото и оперативното планиране на събитието,
                      включително продажбената стратегия, клиентското
                      преживяване и логистиката на място. Тя координира ключови
                      процеси и обезпечава синхрон между екипите, така че всяка
                      част от събитието да допринася към една обща, въздействаща
                      и печеливша цялост.
                    </p>
                    <p className="font-medium">
                      Преди да се присъедини към BetterSelf, Тотка е ръководила
                      лондонския офис на Success Resources – най-голямата
                      световна компания за организиране на събития, с над 7
                      офиса на различни континенти и годишен оборот от над 100
                      милиона долара. Като Country Manager тя е отговаряла за
                      продажбите и оперативната дейност в Европа и
                      Великобритания, ръководила е екип от 30 души и е била
                      активна част от международния мениджърски екип на
                      компанията, включващ офиси в Сингапур, Китай, Малайзия,
                      Австралия, Южна Африка и Европа. Наред с това, Тотка е
                      менажирала ключови партньорства в цяла Европа, изграждайки
                      стабилни бизнес взаимоотношения и локални мрежи, които
                      допринасят за растежа и въздействието на бранда на
                      континента.
                    </p>
                    <p className="font-medium">
                      Под нейно ръководство са организирани стотици събития с
                      водещи имена в индустрията като Тони Робинс, Робърт
                      Кийосаки, Гари Вайнерчук и други – събития, които
                      вдъхновяват, въздействат и оставят траен резултат.
                    </p>
                    <p className="font-medium">
                      След този период Тотка се посвещава на консултиране на
                      бизнеси и на своята мисия да помага на хората чрез
                      коучинг. Работата ѝ е насочена към стратегическо развитие,
                      менторство и изграждане на устойчиви системи за растеж –
                      както в личен, така и в професионален контекст. Паралелно
                      с това, през последните години тя активно съдейства и за
                      развитието на личния бранд на съпруга ѝ Моузес Налока, с
                      участие в управлението и стратегическото позициониране на
                      неговите инициативи.
                    </p>
                    <p className="font-medium">
                      Нейната мисия е всяко събитие да бъде създадено
                      стратегически – така че да е запомнящо се, рентабилно и да
                      носи реална стойност за участниците и организаторите.
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="mt-8 grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">
                        15+
                      </div>
                      <div className="text-sm text-gray-600">Години опит</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">
                        500+
                      </div>
                      <div className="text-sm text-gray-600">Събития</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Videographers Team Section */}
      <div className="bg-gray-50 py-12 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Title */}
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Видеографи
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              Професионалисти в областта на видеозаснемането и създаването на
              съдържание
            </p>
          </div>

          {/* Creative Collaboration Section */}
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-purple-100/50 mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-violet-50"></div>

            {/* Advanced gradient effects with purple/violet theme */}
            <div
              className="absolute -bottom-24 -left-24 w-80 h-80 opacity-35 blur-2xl rounded-full animate-pulse"
              style={{
                background: "linear-gradient(135deg, #8B5CF6, #A855F7)",
                animationDuration: "8s",
              }}
            ></div>
            <div
              className="absolute top-20 right-16 w-64 h-64 opacity-20 blur-xl rounded-full animate-pulse"
              style={{
                background:
                  "conic-gradient(from 45deg, #8B5CF6, #C084FC, #8B5CF6)",
                animationDuration: "15s",
              }}
            ></div>
            <div
              className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-48 h-48 opacity-25 blur-lg rounded-full animate-pulse"
              style={{
                background: "radial-gradient(ellipse, #A855F7, transparent)",
                animationDuration: "12s",
              }}
            ></div>

            <div className="relative px-8 py-12 sm:px-16 sm:py-16">
              {/* Header with icons */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center">
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
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Креативна колаборация
                    </h3>
                    <p className="font-medium text-purple-600">
                      Видеопродукция и съдържание за социални мрежи
                    </p>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">
                Неделин Радков & Вероника Цветанова
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
                {/* Left side - Main Description */}
                <div className="lg:col-span-2">
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
                    Динамичен дует, който съчетава техническото майсторство с
                    креативната стратегия
                  </p>

                  <div className="space-y-6 text-gray-600">
                    <p className="text-lg leading-relaxed">
                      <strong className="text-gray-900">Неделин Радков</strong>{" "}
                      и{" "}
                      <strong className="text-gray-900">
                        Вероника Цветанова
                      </strong>{" "}
                      са част от екипа на Better Self, но същевременно стоят и
                      зад собствените си компании – той в областта на
                      видеозаснемането и продукцията, а тя в управлението и
                      стратегическото развитие на съдържание за социални мрежи.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Вече повече от{" "}
                      <strong className="text-purple-600">пет години</strong>{" "}
                      двамата развиват дейността си на българския пазар, като
                      чрез тясно сътрудничество между техните фирми предлагат
                      цялостни решения – от изграждането на концепция и
                      сценарий, през професионалното заснемане, до финалното
                      представяне на съдържанието пред аудиторията.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Тази колаборация съчетава{" "}
                      <strong className="text-gray-900">
                        творческия поглед и техническото майсторство
                      </strong>{" "}
                      с умението да се управлява и насочва съдържанието така, че
                      то да достига и въздейства максимално.
                    </p>
                  </div>

                  {/* Services */}
                  <div className="mt-10">
                    <h4 className="text-lg font-semibold text-gray-900 mb-6">
                      Специализации и услуги:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <h5 className="font-semibold text-purple-600">
                          Неделин Радков
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Видеопродукция",
                            "Професионално заснемане",
                            "Пост-продукция",
                            "Корпоративни видеа",
                            "Рекламни клипове",
                          ].map((service) => (
                            <span
                              key={service}
                              className="px-3 py-1 bg-purple-100 rounded-full text-sm font-medium text-purple-700"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h5 className="font-semibold text-violet-600">
                          Вероника Цветанова
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Стратегия за съдържание",
                            "Управление социални мрежи",
                            "Концепция и сценарий",
                            "Дигитален маркетинг",
                            "Брандинг стратегии",
                          ].map((service) => (
                            <span
                              key={service}
                              className="px-3 py-1 bg-violet-100 rounded-full text-sm font-medium text-violet-700"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Visual representation */}
                <div className="relative hidden lg:block">
                  <div className="aspect-square w-full max-w-sm mx-auto">
                    {/* Creative workflow visual */}
                    <div className="relative w-full h-full">
                      {/* Center collaboration icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 bg-white rounded-3xl shadow-lg flex items-center justify-center border-4 border-purple-100">
                          <svg
                            className="w-12 h-12 text-purple-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Orbiting elements */}
                      <div
                        className="absolute inset-0 animate-spin"
                        style={{ animationDuration: "25s" }}
                      >
                        <div className="relative w-full h-full">
                          {[
                            {
                              icon: "🎬",
                              label: "Video",
                              position: "top-0 left-1/2 -translate-x-1/2",
                            },
                            {
                              icon: "📱",
                              label: "Social",
                              position: "top-1/4 right-0",
                            },
                            {
                              icon: "✨",
                              label: "Creative",
                              position: "bottom-1/4 right-0",
                            },
                            {
                              icon: "🎯",
                              label: "Strategy",
                              position: "bottom-0 left-1/2 -translate-x-1/2",
                            },
                            {
                              icon: "📈",
                              label: "Growth",
                              position: "bottom-1/4 left-0",
                            },
                            {
                              icon: "🎨",
                              label: "Design",
                              position: "top-1/4 left-0",
                            },
                          ].map((item, index) => (
                            <div
                              key={index}
                              className={`absolute w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center border-2 border-purple-100 ${item.position}`}
                            >
                              <span className="text-lg">{item.icon}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Photos and Stats */}
              <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">
                {/* Left - Nedelin Photo */}
                <div className="relative">
                  <div className="relative">
                    {/* Decorative elements behind photo */}
                    <div className="absolute -top-4 -right-4 w-40 h-40 sm:w-48 sm:h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse -z-10"></div>
                    <div
                      className="absolute -bottom-4 -left-4 w-40 h-40 sm:w-48 sm:h-48 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse -z-10"
                      style={{ animationDelay: "1s" }}
                    ></div>

                    <div className="relative aspect-[3/4] w-full max-w-xs mx-auto overflow-hidden rounded-2xl bg-gray-100 shadow-2xl z-10">
                      <img
                        src="/placeholder.webp"
                        alt="Неделин Радков"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Photo label */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border border-purple-100">
                      <p className="text-sm font-medium text-gray-700">
                        Неделин Радков
                      </p>
                    </div>
                  </div>
                </div>

                {/* Middle - Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600">5+</div>
                    <div className="text-sm text-gray-600 font-medium">
                      Години сътрудничество
                    </div>
                  </div>
                  <div className="text-center p-4 bg-violet-50 rounded-xl">
                    <div className="text-2xl font-bold text-violet-600">
                      100+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Реализирани проекта
                    </div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600">∞</div>
                    <div className="text-sm text-gray-600 font-medium">
                      Креативни идеи
                    </div>
                  </div>
                  <div className="text-center p-4 bg-violet-50 rounded-xl">
                    <div className="text-2xl font-bold text-violet-600">
                      360°
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Цялостни решения
                    </div>
                  </div>
                </div>

                {/* Right - Veronika Photo */}
                <div className="relative">
                  <div className="relative">
                    {/* Decorative elements behind photo */}
                    <div
                      className="absolute -top-4 -right-4 w-40 h-40 sm:w-48 sm:h-48 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse -z-10"
                      style={{ animationDelay: "2s" }}
                    ></div>
                    <div
                      className="absolute -bottom-4 -left-4 w-40 h-40 sm:w-48 sm:h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse -z-10"
                      style={{ animationDelay: "3s" }}
                    ></div>

                    <div className="relative aspect-[3/4] w-full max-w-xs mx-auto overflow-hidden rounded-2xl bg-gray-100 shadow-2xl z-10">
                      <img
                        src="/placeholder.webp"
                        alt="Вероника Цветанова"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Photo label */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border border-violet-100">
                      <p className="text-sm font-medium text-gray-700">
                        Вероника Цветанова
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Искате да се присъедините към нашия екип?
            </h2>
            <p className="mt-4 text-lg text-orange-100">
              Търсим страстни професионалисти и надеждни партньори
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-xl text-white bg-transparent hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                Свържете се с нас
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
