import {
  BeakerIcon,
  UserIcon,
  HeartIcon,
  FaceSmileIcon,
  TrophyIcon,
  SparklesIcon,
  ComputerDesktopIcon,
  MicrophoneIcon,
  AcademicCapIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

const incentives = [
  {
    name: "Аутизъм: Вътреутробни сигнали и превенция",
    lecturer: "Д-р Иван Сигридов",
    icon: UserIcon,
    description:
      "Какво можем да променим преди зачеване и през бременността за превенция на аутизма.",
  },
  {
    name: "Longevity Nutrition",
    lecturer: "Д-р Енджи Касабие",
    icon: HeartIcon,
    description:
      "Хранителни стратегии за дълголетие и оптимално здраве през целия живот.",
  },
  {
    name: "Оптимизирани хормони",
    lecturer: "Д-р Константин Маламов",
    icon: ScaleIcon,
    description:
      "Диригенти на поведението и успеха ни - как да балансираме хормоните за оптимално здраве.",
  },
  {
    name: "Mindset за шампиони",
    lecturer: "Моузес Налока",
    icon: TrophyIcon,
    description:
      "Психологически стратегии за постигане на върхови резултати и преодоляване на ограниченията.",
  },
  {
    name: "Beauty Biohacking",
    lecturer: "Д-р Присадашка",
    icon: SparklesIcon,
    description: "Съвременни научни подходи за красота отвътре и отвън.",
  },
  {
    name: "Voice design и Харизма",
    lecturer: "Иван Головацкий",
    icon: MicrophoneIcon,
    description:
      "Как да говорим красиво и въздействащо, така че да ни слушат и чуват.",
  },
  {
    name: "Защо BioHacking",
    lecturer: "Д-р Жасмина Маджид",
    icon: BeakerIcon,
    description:
      "Въведение в света на биохакинга и как да подобрим здравето си чрез научни подходи.",
  },
  {
    name: "Емоционална интелигентност",
    lecturer: "Десислава Дамянова",
    icon: FaceSmileIcon,
    description:
      "Как да разпознаваме, разбираме и управляваме емоциите за по-добри взаимоотношения.",
  },
];

export default function Incentives() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl py-24 sm:px-2 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-1">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-tight text-white">
                Темите
              </h2>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {incentives.slice(0, 6).map((incentive) => (
              <div
                key={incentive.name}
                className="flex flex-col items-center text-center p-6 pb-4 rounded-lg border border-white bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 h-full justify-between"
              >
                <div className="flex flex-col items-center w-full">
                  <div className="shrink-0 mt-6">
                    <div className="h-20 w-20 flex items-center justify-center rounded-full bg-[#ff8d00]">
                      <incentive.icon className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-medium text-white">
                      {incentive.name}
                    </h3>
                    <p className="mt-1 text-base font-medium text-orange-400">
                      {incentive.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 mb-6">
                  <p className="text-base text-white">{incentive.lecturer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Последните две лекции, центрирани */}
          <div className="mt-8 flex justify-center">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {incentives.slice(6, 8).map((incentive) => (
                <div
                  key={incentive.name}
                  className="flex flex-col items-center text-center p-6 pb-4 rounded-lg border border-white bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 h-full justify-between"
                >
                  <div className="flex flex-col items-center w-full">
                    <div className="shrink-0 mt-6">
                      <div className="h-20 w-20 flex items-center justify-center rounded-full bg-[#ff8d00]">
                        <incentive.icon className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-medium text-white">
                        {incentive.name}
                      </h3>
                      <p className="mt-1 text-base font-medium text-orange-400">
                        {incentive.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 mb-6">
                    <p className="text-base text-white">{incentive.lecturer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
