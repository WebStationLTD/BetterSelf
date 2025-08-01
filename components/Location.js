"use client";

export default function Location() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Локация
          </h2>
          <p className="mt-6 text-lg/8 text-gray-300">
            Присъединете се към нас в сърцето на София, в престижния Гранд хотел
            Астория
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-base font-semibold text-gray-300">
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-[#ff8d00]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z"
                />
              </svg>
              <span>Гранд хотел Астория</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-[#ff8d00]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3l1.5 1.5"
                />
              </svg>
              <span>София, България</span>
            </div>
          </div>
        </div>

        {/* Hotel Information Section */}
        <div className="mt-16">
          <div className="relative rounded-2xl bg-gradient-to-r from-[#ff8d00] to-orange-500 p-8 shadow-2xl">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Astoria Grand Hotel Sofia
              </h3>
              <div className="space-y-4 text-white/95">
                <p className="text-base leading-relaxed">
                  Разположен в сърцето на столицата, Астория Гранд Хотел София е
                  съвършеното съчетание между история, стил и модерен комфорт.
                  Със своите 25 етажа и емблематична височина от 104 метра,
                  хотелът е не просто забележителност, а символ на София още от
                  1984 г.
                </p>
                <p className="text-base leading-relaxed">
                  След мащабна реновация, хотелът предлага изискана атмосфера,
                  персонално отношение и панорамни гледки към града и Витоша.
                  Намира се само на 25 минути от летището и в близост до ключови
                  забележителности и бул. „Витоша".
                </p>
                <div className="pt-4 border-t border-white/20">
                  <p className="text-lg font-semibold text-center italic">
                    "Astoria Grand Hotel Sofia - високо над града, дълбоко в
                    историята."
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 overflow-x-hidden">
          <div className="relative rounded-2xl overflow-hidden bg-gray-800 shadow-2xl">
            {/* Decorative border */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-700 ring-inset"></div>

            {/* Map Container */}
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" /* 16:9 Aspect Ratio */ }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.5627723661023!2d23.306514076759033!3d42.69180317116396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85e41c54fa71%3A0x560136bcc4120611!2sAstoria%20Grand%20Hotel!5e0!3m2!1sen!2sbg!4v1752516695939!5m2!1sen!2sbg"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Локация на събитието - Гранд хотел Астория, София"
              ></iframe>
            </div>
          </div>

          {/* Address Information */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center rounded-full bg-gray-800 px-6 py-3 text-sm font-medium text-gray-300 shadow-lg ring-1 ring-gray-700">
              <svg
                className="mr-2 h-4 w-4 text-[#ff8d00]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z"
                />
              </svg>
              ул. Цар Освободител 19, 1000 София, България
            </div>

            {/* Hotel Reservation CTA */}
            <div className="mt-6">
              <div className="rounded-2xl bg-gradient-to-r from-gray-800 to-gray-700 p-6 shadow-xl ring-1 ring-gray-600">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Искате да останете за събитието?
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  Запазете стая в престижния Astoria Grand Hotel с невероятна
                  гледка към София и Витоша планина. 490 стаи на 21 етажа ви
                  очакват!
                </p>
                <a
                  href="https://www.astoriagrandhotel.bg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md bg-[#ff8d00] hover:bg-orange-600 px-6 py-3 text-sm font-semibold text-black shadow-lg transition-all duration-300 transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1.09M2.25 9l-3-1.09m18 1.09l3-1.09M2.25 9v12"
                    />
                  </svg>
                  Резервирай стая в хотела
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="hidden sm:block absolute -top-24 left-1/2 -z-10 w-[24rem] h-[24rem] sm:w-[32rem] sm:h-[32rem] md:w-[48rem] md:h-[48rem] lg:w-[64rem] lg:h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] opacity-20 overflow-hidden"
        >
          <circle
            r={512}
            cx={512}
            cy={512}
            fill="url(#location-gradient)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="location-gradient">
              <stop stopColor="#ff8d00" />
              <stop offset={1} stopColor="#ff8d00" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
