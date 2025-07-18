export default function AboutSection() {
  return (
    <div className="relative bg-gray-900 py-24 sm:py-32">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path d="M-200 0h201v201h-201Z" strokeWidth={0} />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Какво е Биохакинг?
        </h2>
        <div className="mt-6 space-y-6 text-lg leading-8 text-gray-300">
          <p>
            Колкото по-добре разбираме нещо, толкова повече сила имаме да го
            променим. Ето защо колкото по-добре познаваме себе си като
            биологична единица, като психо-емоционална личност и като социално
            същество, толкова по-лесно можем да окажем значимо влияние върху
            качеството и посоката на живота си.
          </p>
          <p>
            И тук идва ролята на биохакинга, който ни предоставя фундаментална
            информация за това как функционират тялото и ума и ни учи как да
            боравим с нея, за да постигнем максимално благосъстояние.
          </p>
          <p>
            Биохакингът представлява комплексен подход за оптимизация на
            здравето и представянето, като терминът включва под шапката си
            редица разнообразни практики: от промени в ежедневната рутина и
            начина на живот до интегрирането на иновативни технологии.
          </p>
          <p>
            В предстоящата конференция ще се запознаете с някои от най-ключовите
            механизми на нашата физиология и нашия ум, ще се сдобиете с
            приложими инструменти за въздействие над тях и ще се изненадате
            докъде се простират човешките възможности.
          </p>
        </div>
      </div>
    </div>
  );
}
