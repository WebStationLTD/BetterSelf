// Споделени данни за програмата на събитието
export const scheduleData = [
  {
    id: 1,
    time: "09:00 - 09:30",
    title: "Регистрация и добре дошли",
    speaker: "Организаторски екип",
    location: "Главен фоайе",
    description: "Получаване на бейджове, материали и утринно кафе",
    type: "registration",
  },
  {
    id: 2,
    time: "09:30 - 10:00",
    title: "Биохакинг - Въведение в бъдещето на човешкия потенциал",
    speaker: "Д-р Александър Петров",
    location: "Главна зала",
    description:
      "Основни принципи на биохакинга и как да оптимизираме тялото и ума си за по-дълъг и здравословен живот",
    type: "keynote",
  },
  {
    id: 3,
    time: "10:00 - 10:30",
    title: "Хранене за дълголетие - Науката зад антиейдж диетите",
    speaker: "Проф. д-р Мария Георгиева",
    location: "Главна зала",
    description:
      "Как правилното хранене може да забави стареенето и подобри качеството на живот",
    type: "presentation",
  },
  {
    id: 4,
    time: "10:30 - 11:00",
    title: "Кафе пауза",
    speaker: "",
    location: "Фоайе",
    description: "Мрежиране и обмяна на идеи",
    type: "break",
  },
  {
    id: 5,
    time: "11:00 - 11:30",
    title: "Сън и възстановяване - Оптимизация на регенеративните процеси",
    speaker: "Д-р Иван Стойков",
    location: "Главна зала",
    description: "Важността на качествения сън за здравето и дълголетието",
    type: "presentation",
  },
  {
    id: 6,
    time: "11:30 - 12:00",
    title: "Технологии за мониторинг на здравето",
    speaker: "Инж. Георги Димитров",
    location: "Главна зала",
    description:
      "Носими устройства, анализи и приложения за следене на биомаркерите",
    type: "presentation",
  },
  {
    id: 7,
    time: "12:00 - 12:30",
    title: "Психично здраве и стрес мениджмънт",
    speaker: "Д-р Елена Василева",
    location: "Главна зала",
    description:
      "Техники за управление на стреса и подобряване на психичното здраве",
    type: "presentation",
  },
  {
    id: 8,
    time: "12:30 - 13:00",
    title: "Физическа активност и движение за дълголетие",
    speaker: "Кинезитерапевт Стефан Николов",
    location: "Главна зала",
    description: "Оптимални упражнения и активности за здравословно стареене",
    type: "presentation",
  },
  {
    id: 9,
    time: "13:00 - 14:00",
    title: "Обедна пауза",
    speaker: "",
    location: "Ресторант",
    description:
      "Здравословен обяд в съответствие с принципите на дълголетието",
    type: "break",
  },
  {
    id: 10,
    time: "14:00 - 14:30",
    title: "Хормонален баланс и антиейдж терапии",
    speaker: "Д-р Анна Димитрова",
    location: "Главна зала",
    description:
      "Как хормоните влияят на стареенето и възможностите за оптимизация",
    type: "presentation",
  },
  {
    id: 11,
    time: "14:30 - 15:00",
    title: "Медитация и mindfulness практики",
    speaker: "Йога инструктор Мария Петрова",
    location: "Главна зала",
    description:
      "Практически техники за намаляване на стреса и подобряване на фокуса",
    type: "presentation",
  },
  {
    id: 12,
    time: "15:00 - 15:30",
    title: "Следобедна кафе пауза",
    speaker: "",
    location: "Фоайе",
    description: "Отдих, мрежиране и дискусии",
    type: "break",
  },
  {
    id: 13,
    time: "15:30 - 16:00",
    title: "Генетично тестване и персонализирана медицина",
    speaker: "Д-р Петър Георгиев",
    location: "Главна зала",
    description:
      "Как генетичната информация може да ни помогне за по-добро здраве",
    type: "presentation",
  },
  {
    id: 14,
    time: "16:00 - 16:30",
    title: "Екологична среда и токсини",
    speaker: "Д-р Светлана Иванова",
    location: "Главна зала",
    description:
      "Влиянието на околната среда върху здравето и начини за детоксикация",
    type: "presentation",
  },
  {
    id: 15,
    time: "16:30 - 17:00",
    title: "Социални връзки и общност за дълголетие",
    speaker: "Психолог Димитър Стоянов",
    location: "Главна зала",
    description: "Ролята на социалните връзки за здравословен и дълъг живот",
    type: "presentation",
  },
  {
    id: 16,
    time: "17:00 - 17:30",
    title: "Панелна дискусия - Бъдещето на човешкото дълголетие",
    speaker: "Всички лектори",
    location: "Главна зала",
    description: "Отворена дискусия с въпроси от аудиторията",
    type: "panel",
  },
  {
    id: 17,
    time: "17:30 - 18:00",
    title: "Заключителни думи и мрежиране",
    speaker: "Организаторски екип",
    location: "Главна зала & Фоайе",
    description: "Обобщение на деня и възможности за контакти",
    type: "closing",
  },
];

// Функция за получаване на стиловете според типа събитие
export const getTypeStyles = (type) => {
  switch (type) {
    case "keynote":
      return {
        dotColor: "bg-[#ff8d00]",
        cardBg: "bg-gradient-to-br from-orange-50 to-yellow-50",
        borderColor: "border-[#ff8d00]/30",
        shadowColor: "shadow-orange-100",
        badge: "bg-[#ff8d00] text-white",
        label: "Основен доклад",
      };
    case "presentation":
      return {
        dotColor: "bg-[#ff8d00]",
        cardBg: "bg-gradient-to-br from-orange-50 to-yellow-50",
        borderColor: "border-[#ff8d00]/30",
        shadowColor: "shadow-orange-100",
        badge: "bg-[#ff8d00] text-white",
        label: "Презентация",
      };
    case "panel":
      return {
        dotColor: "bg-[#ff8d00]",
        cardBg: "bg-gradient-to-br from-orange-50 to-yellow-50",
        borderColor: "border-[#ff8d00]/30",
        shadowColor: "shadow-orange-100",
        badge: "bg-[#ff8d00] text-white",
        label: "Панел",
      };
    case "break":
      return {
        dotColor: "bg-green-500",
        cardBg: "bg-gradient-to-br from-green-50 to-emerald-50",
        borderColor: "border-green-200/50",
        shadowColor: "shadow-green-100",
        badge: "bg-green-100 text-green-800",
        label: "Пауза",
      };
    case "registration":
    case "closing":
      return {
        dotColor: "bg-gray-500",
        cardBg: "bg-gradient-to-br from-gray-50 to-slate-50",
        borderColor: "border-gray-200/50",
        shadowColor: "shadow-gray-100",
        badge: "bg-gray-100 text-gray-800",
        label: type === "registration" ? "Регистрация" : "Заключение",
      };
    default:
      return {
        dotColor: "bg-gray-400",
        cardBg: "bg-white",
        borderColor: "border-gray-200",
        shadowColor: "shadow-gray-100",
        badge: "bg-gray-100 text-gray-800",
        label: "Събитие",
      };
  }
};
