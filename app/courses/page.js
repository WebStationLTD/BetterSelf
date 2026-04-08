import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Курсове - BetterSelf",
  description:
    "Открийте курсовете на водещите лектори от BetterSelf. Практически обучения по биохакинг, харизма, дълголетие и личностно развитие.",
};

const courses = [
  {
    id: 1,
    title: "Харизма и Дизайн на Гласа",
    instructor: "Иван Головацкий",
    instructorTitle: "Тренер по харизма и говорни умения",
    instructorImage: "/placeholder.webp",
    date: "31 Май 2026",
    location: "София",
    locationNote: "(точната локация ще бъде публикувана скоро)",
    description:
      "Открийте силата на гласа си! Практически интензив, в който ще научите как да говорите красиво и въздействащо — така, че не само да ви слушат, но и да ви чуват. Иван Головацкий ще ви преведе през техниките за изграждане на харизма, дикция, интонация и въздействаща комуникация.",
    topics: [
      "Техники за гласова харизма",
      "Дикция, ритъм и интонация",
      "Невербална комуникация",
      "Публично говорене без страх",
      "Изграждане на личен стил на общуване",
      "Практически упражнения на живо",
    ],
    duration: "1 ден (интензив)",
    level: "Всички нива",
    badge: "НОВО",
    status: "upcoming",
    color: "from-orange-500 to-amber-600",
  },
];

const comingSoonCount = 5;

export default function CoursesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-orange-600/10" />
        <div
          className="absolute -top-40 -right-32 w-[500px] h-[500px] bg-orange-500 opacity-10 blur-3xl rounded-full"
        />
        <div
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-orange-600 opacity-10 blur-3xl rounded-full"
        />
        <svg
          viewBox="0 0 1024 1024"
          aria-hidden="true"
          className="absolute -top-50 left-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        >
          <circle
            r={512}
            cx={512}
            cy={512}
            fill="url(#courses-gradient)"
            fillOpacity="0.4"
          />
          <defs>
            <radialGradient id="courses-gradient">
              <stop stopColor="#ff8d00" />
              <stop offset={1} stopColor="#ff8d00" />
            </radialGradient>
          </defs>
        </svg>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-4 py-2 text-sm font-medium text-orange-300 ring-1 ring-orange-500/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Курсове от нашите лектори
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Курсове &{" "}
            <span className="bg-gradient-to-r from-[#ff8d00] to-amber-400 bg-clip-text text-transparent">
              Обучения
            </span>
          </h1>
          <p className="mt-8 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
            Водещите лектори от BetterSelf вече предлагат и практически курсове.
            Задълбочете знанията си с интензивни обучения на живо.
          </p>

          <div className="mt-10 flex flex-wrap gap-6 justify-center">
            <div className="flex items-center gap-2 text-gray-300">
              <svg className="w-5 h-5 text-[#ff8d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Обучения на живо
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <svg className="w-5 h-5 text-[#ff8d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Практически интензиви
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <svg className="w-5 h-5 text-[#ff8d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Ограничени места
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Предстоящи курсове
            </h2>
            <div className="w-24 h-1 mx-auto mt-4 bg-[#ff8d00] rounded" />
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Записвайте се рано — местата са ограничени за всяко обучение.
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12">
            {/* Active courses */}
            {courses.map((course) => (
              <div
                key={course.id}
                className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100 hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Top accent bar */}
                <div className={`h-2 w-full bg-gradient-to-r ${course.color}`} />

                <div className="p-8 sm:p-10 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
                    {/* Left: Instructor + info */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-6">
                      {/* Badge */}
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-700">
                        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                        {course.badge}
                      </span>

                      {/* Instructor photo */}
                      <div className="relative w-32 h-32 rounded-2xl overflow-hidden ring-4 ring-orange-100 shadow-lg flex-shrink-0">
                        <Image
                          src={course.instructorImage}
                          alt={course.instructor}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                          Лектор
                        </p>
                        <h3 className="text-xl font-bold text-gray-900">
                          {course.instructor}
                        </h3>
                        <p className="text-sm text-[#ff8d00] font-medium mt-1">
                          {course.instructorTitle}
                        </p>
                      </div>

                      {/* Quick info */}
                      <div className="w-full space-y-3 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-3 text-gray-700">
                          <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-[#ff8d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Дата</p>
                            <p className="font-semibold">{course.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                          <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-[#ff8d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Локация</p>
                            <p className="font-semibold">{course.location}</p>
                            <p className="text-xs text-gray-400">{course.locationNote}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                          <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-[#ff8d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Формат</p>
                            <p className="font-semibold">{course.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700">
                          <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-[#ff8d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Ниво</p>
                            <p className="font-semibold">{course.level}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Course details */}
                    <div className="lg:col-span-2 flex flex-col justify-between gap-8">
                      <div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                          {course.title}
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {course.description}
                        </p>
                      </div>

                      {/* Topics */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                          Какво ще научите
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {course.topics.map((topic, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                <svg className="w-3 h-3 text-[#ff8d00]" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="text-gray-700 text-sm">{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
                        <Link
                          href="/contact"
                          className="flex-1 text-center rounded-xl bg-[#ff8d00] hover:bg-orange-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-[1.02]"
                        >
                          Регистрирай интерес
                        </Link>
                        <Link
                          href={`/lecturers`}
                          className="flex-1 text-center rounded-xl border-2 border-gray-200 hover:border-[#ff8d00] px-8 py-4 text-base font-semibold text-gray-700 hover:text-[#ff8d00] transition-all duration-300"
                        >
                          Виж лектора
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Coming Soon placeholders */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-700 text-center mb-10">
                Очаквайте скоро още курсове
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: comingSoonCount }).map((_, i) => (
                  <div
                    key={i}
                    className="relative bg-white rounded-2xl border-2 border-dashed border-gray-200 overflow-hidden hover:border-orange-300 transition-colors duration-300 group"
                  >
                    <div className="h-1.5 w-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200" />
                    <div className="p-8 flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-orange-50 group-hover:to-amber-50 flex items-center justify-center transition-colors duration-300">
                        <svg className="w-8 h-8 text-gray-300 group-hover:text-orange-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 group-hover:from-[#ff8d00] group-hover:via-amber-400 group-hover:to-[#ff8d00] animate-pulse transition-all duration-500">
                          Coming Soon
                        </p>
                        <p className="text-sm text-gray-400 mt-1">Очаквайте скоро</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-orange-500/10 via-orange-400/5 to-amber-500/10 border border-orange-500/20 p-12 text-center overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-orange-500 opacity-5 blur-3xl rounded-full" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-amber-500 opacity-5 blur-3xl rounded-full" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Искате да предложите курс?
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                Ако сте лектор или експерт и искате да се включите с ваш курс в
                платформата на BetterSelf, свържете се с нас.
              </p>
              <Link
                href="/contact"
                className="inline-block rounded-xl bg-[#ff8d00] hover:bg-orange-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Свържете се с нас
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
