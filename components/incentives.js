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
    name: "Медицината на бъдещето: От лечение на болести към програмиране на здраве",
    lecturer: "Магдалена Николова",
    icon: UserIcon,
  },
  {
    name: "Longevity Mindset: дълголетието като начин на мислене",
    lecturer: "Д-р Жасмина Маджид",
    icon: BeakerIcon,
  },
  {
    name: "Оптимизирани хормони",
    lecturer: "Д-р Константин Маламов",
    icon: ScaleIcon,
  },
  {
    name: "Правиш всичко „правилно“, но защо си изтощен?",
    lecturer: "Десислава Дамянова",
    icon: FaceSmileIcon,
  },
  {
    name: "Промените на кожата при жените в перименопауза и менопауза",
    lecturer: "Д-р Камелия Присадашка",
    icon: SparklesIcon,
  },
  {
    name: "Асертивност – качеството на уверените хора",
    lecturer: "Иван Головацкий",
    icon: MicrophoneIcon,
  },
  {
    lecturer: "Христо Попов",
    icon: HeartIcon,
  },
  {
    name: "Сърдечно-съдово здраве и дълголетие",
    lecturer: "Проф. д-р Иво Петров, дмн",
    icon: AcademicCapIcon,
  },
  {
    name: "Как мислят шампионите?",
    lecturer: "Моузес Налока",
    icon: TrophyIcon,
  },
  {
    lecturer: "Gary Andrew Rhodes",
    icon: ComputerDesktopIcon,
  },
];

function TopicCard({ incentive }) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 pb-4 rounded-lg border border-white bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 h-full relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff8d00]/10 via-orange-500/5 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="shrink-0">
          <div className="h-20 w-20 flex items-center justify-center rounded-full bg-[#ff8d00]">
            <incentive.icon className="h-12 w-12 text-white" />
          </div>
        </div>
        <div className="mt-8">
          {incentive.name ? (
            <>
              <h3 className="text-xl font-bold text-white leading-snug">
                {incentive.name}
              </h3>
              <p className="mt-3 text-sm font-medium text-[#ff8d00]">
                {incentive.lecturer}
              </p>
            </>
          ) : (
            <h3 className="text-xl font-bold text-white leading-snug">
              {incentive.lecturer}
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

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
              <TopicCard
                key={incentive.lecturer}
                incentive={incentive}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {incentives.slice(6).map((incentive) => (
                <TopicCard
                  key={incentive.lecturer}
                  incentive={incentive}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
