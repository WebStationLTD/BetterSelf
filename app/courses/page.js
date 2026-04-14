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
    title: "Говорене пред публика",
    instructor: "Иван Головацкий",
    instructorTitle: "Тренер по харизма и говорни умения",
    instructorImage: "/placeholder.webp",
    courseImage: "/иван-головацкий-курс.jpg",
    date: "31 Май 2026",
    time: "9:30 – 18:00",
    location: "Хотел Интерконтинентал София",
    locationNote: "Пл. Народно Събрание 4",
    price: "149 euro",
    description:
      "80% от успехът ни – независимо в коя сфера – зависи от начина по който комуникираме. Не от това какво знаем, а от това как го изразяваме. С екипа на Better Self създадохме този интензивен курс с насока не просто върху теория, а върху конкретни техники и начини, чрез които да въздействаш и да постигаш повече успехи. Нашият лектор Иван Головацкий пристига специално от Лондон единствено за този курс.",
    topics: [
      "Как звучиш в очите на другите",
      "Глас и тяло – инструментите на въздействието",
      "Управление на гласа: тембър, тон и скорост",
      "Дикция за ясна и въздействаща реч",
      "Структура и убедително говорене",
      "Практика на живо с лична обратна връзка",
    ],
    program: [
      { time: "09:30 – 10:00", title: "Начало, регистрация и запознаване" },
      { time: "10:00 – 11:00", title: "Интервю с Иван Головацкий", note: "Теоретична част – отговори на предварително зададени въпроси от участниците" },
      { time: "11:00 – 12:00", title: "Как звучиш в очите на другите", note: "Ключовите елементи на силното присъствие" },
      { time: "12:00 – 13:30", title: "Обедна почивка" },
      { time: "13:30 – 15:30", title: "Глас и тяло: инструментите на въздействието", note: "Практически блок – глас, дикция, стойка и жестове" },
      { time: "15:30 – 16:00", title: "Кафе пауза" },
      { time: "16:00 – 17:30", title: "Структура, увереност и практика на живо", note: "Самопрезентация с лична обратна връзка в реално време" },
      { time: "17:30 – 18:00", title: "Заключителни думи", note: "Обобщение на ключовите изводи и насоки" },
    ],
    duration: "Ускорен курс (1 ден)",
    level: "Всички нива",
    badge: "НОВО",
    status: "upcoming",
    color: "from-orange-500 to-amber-600",
  },
];

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
            {courses.map((course) => (
              <div
                key={course.id}
                className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100 hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Top accent bar */}
                <div className={`h-2 w-full bg-gradient-to-r ${course.color}`} />

                <div className="lg:grid lg:grid-cols-5">
                  {/* Left: Course Image + Quick Info */}
                  <div className="lg:col-span-2 flex flex-col">
                    {/* Course Image */}
                    <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:flex-1" style={{ minHeight: "300px" }}>
                      <Image
                        src={course.courseImage}
                        alt={course.title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        priority
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      {/* Price badge */}
                      <div className="absolute top-4 left-4 bg-[#ff8d00] text-white font-bold px-4 py-2 rounded-xl text-lg shadow-lg">
                        {course.price}
                      </div>
                      {/* Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                          {course.badge}
                        </span>
                      </div>
                      {/* Instructor overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/60 flex-shrink-0 shadow-lg">
                          <Image
                            src={course.instructorImage}
                            alt={course.instructor}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-white font-bold text-sm leading-tight">{course.instructor}</p>
                          <p className="text-orange-200 text-xs mt-0.5">{course.instructorTitle}</p>
                        </div>
                      </div>
                    </div>

                    {/* Quick Info Panel */}
                    <div className="p-6 bg-gray-50 border-t border-gray-100 space-y-3">
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-[#ff8d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Дата</p>
                          <p className="font-semibold text-sm">{course.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-[#ff8d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Час</p>
                          <p className="font-semibold text-sm">{course.time}</p>
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
                          <p className="font-semibold text-sm">{course.location}</p>
                          <p className="text-xs text-gray-400">{course.locationNote}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-[#ff8d00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Формат</p>
                          <p className="font-semibold text-sm">{course.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Course Details */}
                  <div className="lg:col-span-3 p-8 sm:p-10 flex flex-col gap-8">
                    {/* Title & Description */}
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

                    {/* Program */}
                    {course.program && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                          Програма на курса
                        </h4>
                        <div className="space-y-2">
                          {course.program.map((item, i) => (
                            <div
                              key={i}
                              className={`flex gap-4 rounded-xl px-4 py-3 ${
                                item.note ? "bg-orange-50 border border-orange-100" : "bg-gray-50"
                              }`}
                            >
                              <span className="text-xs font-mono font-semibold text-[#ff8d00] whitespace-nowrap pt-0.5 min-w-[100px]">
                                {item.time}
                              </span>
                              <div>
                                <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                                {item.note && (
                                  <p className="text-xs text-gray-500 mt-0.5">{item.note}</p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100 mt-auto">
                      <a
                        href="https://buy.stripe.com/bJeaEXezHfwL33sbLV2kw07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center rounded-xl bg-[#ff8d00] hover:bg-orange-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-[1.02]"
                      >
                        Купи билет
                      </a>
                      <Link
                        href="/lecturers"
                        className="flex-1 text-center rounded-xl border-2 border-gray-200 hover:border-[#ff8d00] px-8 py-4 text-base font-semibold text-gray-700 hover:text-[#ff8d00] transition-all duration-300"
                      >
                        Виж лектора
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
