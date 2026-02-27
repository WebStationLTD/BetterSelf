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
      "Какво можем да променим преди зачеване и през бременността за превенция на аутизма",
    video: "/sigridov-v6-short.mov",
  },
  {
    name: "Хранене за дълголетие",
    lecturer: "Д-р Енджи Касабие",
    icon: HeartIcon,
    description:
      "Холистични хранителни стратегии за здраве, жизненост и дълголетие",
  },
  {
    name: "Оптимизирани хормони",
    lecturer: "Д-р Константин Маламов",
    icon: ScaleIcon,
    description:
      "Диригенти на поведението и успеха ни – как да балансираме хормоните за максимално добро здраве",
  },
  {
    name: "Как мислят шампионите?",
    lecturer: "Моузес Налока",
    icon: TrophyIcon,
    description:
      "Психологически стратегии за постигане на върхови резултати и преодоляване на ограниченията",
  },
  {
    name: "Биохакинг за красота",
    lecturer: "Д-р Камелия Присадашка",
    icon: SparklesIcon,
    description:
      "Съвременни научни подходи за развиване и поддържане на красотата отвътре и отвън",
  },
  {
    name: "Харизма и дизайн на гласа",
    lecturer: "Иван Головацкий",
    icon: MicrophoneIcon,
    description:
      "Как да говорим красиво и въздействащо, така, че не само да ни слушат, но и да ни чуват",
  },
  {
    name: "Защо биохакинг?",
    lecturer: "Д-р Жасмина Маджид",
    icon: BeakerIcon,
    description:
      "Въведение в света на биохакинга: комбинирани практики за здраве и благосъстояние, подкрепени от науката",
    youtubeVideo: "lbfGvCXmzSY",
  },
  {
    name: "Емоционална интелигентност",
    lecturer: "Десислава Дамянова",
    icon: FaceSmileIcon,
    description:
      "Как да разпознаваме, разбираме и управляваме емоциите за по-хармонични и удовлетворяващи взаимоотношения",
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
                className="flex flex-col items-center justify-center text-center p-6 pb-4 rounded-lg border border-white bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 h-full relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff8d00]/10 via-orange-500/5 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                  <div className="shrink-0">
                    <div className="h-20 w-20 flex items-center justify-center rounded-full bg-[#ff8d00] animate-pulse">
                      <incentive.icon className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff8d00] via-orange-400 to-yellow-500 animate-pulse">
                      Coming Soon
                    </h3>
                    <p className="mt-3 text-sm text-gray-400">
                      Очаквайте скоро
                    </p>
                  </div>
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
                  className="flex flex-col items-center justify-center text-center p-6 pb-4 rounded-lg border border-white bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 h-full relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff8d00]/10 via-orange-500/5 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <div className="shrink-0">
                      <div className="h-20 w-20 flex items-center justify-center rounded-full bg-[#ff8d00] animate-pulse">
                        <incentive.icon className="h-12 w-12 text-white" />
                      </div>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff8d00] via-orange-400 to-yellow-500 animate-pulse">
                        Coming Soon
                      </h3>
                      <p className="mt-3 text-sm text-gray-400">
                        Очаквайте скоро
                      </p>
                    </div>
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
