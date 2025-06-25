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
    title: "Защо BioHacking",
    speaker: "Д-р Жасмина Маджид",
    location: "Главна зала",
    description:
      "Въведение в света на биохакинга и как да подобрим здравето си чрез научни подходи.",
    type: "keynote",
  },
  {
    id: 3,
    time: "10:00 - 10:30",
    title: "Longevity Nutrition",
    speaker: "Д-р Енджи Касабие",
    location: "Главна зала",
    description:
      "Хранителни стратегии за дълголетие и оптимално здраве през целия живот.",
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
    title: "Neurology: Млад мозък в здраво тяло",
    speaker: "Проф. д-р Николай Габровски",
    location: "Главна зала",
    description:
      "Стратегии за поддържане на мозъчното здраве и когнитивните функции.",
    type: "presentation",
  },
  {
    id: 6,
    time: "11:30 - 12:00",
    title: "Оптимизирани хормони",
    speaker: "Д-р Константин Маламов",
    location: "Главна зала",
    description:
      "Диригенти на поведението и успеха ни - как да балансираме хормоните за оптимално здраве.",
    type: "presentation",
  },
  {
    id: 7,
    time: "12:00 - 12:30",
    title: "Емоционална интелигентност",
    speaker: "Десислава Дамянова",
    location: "Главна зала",
    description:
      "Как да разпознаваме, разбираме и управляваме емоциите за по-добри взаимоотношения.",
    type: "presentation",
  },
  {
    id: 8,
    time: "12:30 - 13:00",
    title: "Mindset за шампиони",
    speaker: "Моузес Налока",
    location: "Главна зала",
    description:
      "Психологически стратегии за постигане на върхови резултати и преодоляване на ограниченията.",
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
    title: "Beauty Biohacking",
    speaker: "Д-р Присадашка",
    location: "Главна зала",
    description: "Съвременни научни подходи за красота отвътре и отвън.",
    type: "presentation",
  },
  {
    id: 11,
    time: "14:30 - 15:00",
    title: "Voice design и Харизма",
    speaker: "Иван Головацкий",
    location: "Главна зала",
    description:
      "Как да говорим красиво и въздействащо, така че да ни слушат и чуват.",
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
    title: "Betterself & AI",
    speaker:
      "Александър Иванов, Александър Йорданов, Йоан Аспарухов, Димитър Гочев",
    location: "Главна зала",
    description:
      "Как да използваме изкуствения интелект за лично и професионално развитие.",
    type: "presentation",
  },
  {
    id: 14,
    time: "16:00 - 16:30",
    title: "Аутизъм: Вътреутробни сигнали и превенция",
    speaker: "Д-р Иван Сигридов",
    location: "Главна зала",
    description:
      "Какво можем да променим преди зачеване и през бременността за превенция на аутизма.",
    type: "presentation",
  },
  {
    id: 15,
    time: "16:30 - 17:00",
    title: "Lorem ipsum dolor sit amet",
    speaker: "Lorem Ipsum",
    location: "Главна зала",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
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
