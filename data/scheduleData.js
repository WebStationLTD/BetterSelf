// Споделени данни за програмата на събитието
export const scheduleData = [
  {
    id: 1,
    time: "09:00 - 09:30",
    title: "Регистрация и посрещане",
    speaker: "Организаторски екип",
    location: "Бална зала Опера, ет. R",
    description: "Получаване на баджове и работни материали",
    type: "registration",
  },
  {
    id: 2,
    time: "09:30 - 10:00",
    title: "Аутизъм: Вътреутробни сигнали и превенция",
    speaker: "Д-р Иван Сигридов",
    location: "Главна зала",
    description:
      "Какво можем да променим преди зачеване и през бременността за превенция на аутизма",
    type: "keynote",
  },
  {
    id: 3,
    time: "10:00 - 10:30",
    title: "Защо биохакинг?",
    speaker: "Д-р Жасмина Маджид",
    location: "Главна зала",
    description:
      "Въведение в света на биохакинга: комбинирани практики за здраве и благосъстояние, подкрепени от науката",
    type: "presentation",
  },
  {
    id: 4,
    time: "10:30 - 11:00",
    title: "Кафе пауза",
    speaker: "",
    location: "Лоби Опера 1",
    description:
      "Възможност да презаредите и да се запознаете с нови хора със сродни интереси",
    type: "break",
  },
  {
    id: 5,
    time: "11:00 - 11:30",
    title: "Оптимизирани хормони",
    speaker: "Д-р Константин Маламов",
    location: "Главна зала",
    description:
      "Диригенти на поведението и успеха ни – как да балансираме хормоните за максимално добро здраве",
    type: "presentation",
  },
  {
    id: 6,
    time: "11:30 - 12:00",
    title: "Невронаука и психобиология",
    speaker: "Десислава Дамянова",
    location: "Главна зала",
    description:
      "Как да разпознаваме, разбираме и управляваме емоциите за по-хармонични и удовлетворяващи взаимоотношения",
    type: "presentation",
  },
  {
    id: 7,
    time: "12:00 - 13:00",
    title: "Иновации и технологии",
    speaker:
      "Водеща: Лилия Стефанова | Участници: Александър Йорданов (WebStation™), Денис Колев (DexaFit Sofia), Йоан Аспарухов (EcomLabs360), Александър Иванов (wellConnected & CreateX), Мария Варсанова (Biohacking.bg)",
    location: "Главна зала",
    description:
      "Как да използваме изкуствения интелект и иновативни технологии за лично и професионално развитие",
    type: "panel",
  },
  {
    id: 8,
    time: "13:00 - 14:00",
    title: "Обяд",
    speaker: "",
    location: "Ресторант Атриум",
    description: "Кратка почивка преди следващия панел",
    type: "break",
  },
  {
    id: 9,
    time: "14:00 - 14:30",
    title: "Биохакинг за красота",
    speaker: "Д-р Камелия Присадашка",
    location: "Главна зала",
    description:
      "Съвременни научни подходи за развиване и поддържане на красотата отвътре и отвън",
    type: "presentation",
  },
  {
    id: 10,
    time: "14:30 - 15:00",
    title: "Харизма и дизайн на гласа",
    speaker: "Иван Головацкий",
    location: "Главна зала",
    description:
      "Как да говорим красиво и въздействащо, така, че не само да ни слушат, но и да ни чуват",
    type: "presentation",
  },
  {
    id: 11,
    time: "15:00 - 15:30",
    title: "Хранене за дълголетие",
    speaker: "Д-р Енджи Касабие",
    location: "Главна зала",
    description:
      "Холистични хранителни стратегии за здраве, жизненост и дълголетие",
    type: "presentation",
  },
  {
    id: 12,
    time: "15:30 - 16:00",
    title: "Следобедна кафе пауза",
    speaker: "",
    location: "Главно фоайе",
    description: "Кратка почивка преди следващия панел",
    type: "break",
  },
  {
    id: 13,
    time: "16:00 - 16:30",
    title: "Как мислят шампионите?",
    speaker: "Моузес Налока",
    location: "Главна зала",
    description:
      "Психологически стратегии за постигане на върхови резултати и преодоляване на ограниченията",
    type: "presentation",
  },
  {
    id: 14,
    time: "16:30 - 17:30",
    title: "Панел Longevity",
    speaker:
      "Водещ: Мариан Морфис | Участници: Биляна Маринова (Dr. Bastet), Даниел Цанков (NAD.BG), Георги Георгиев (Therma Numera), Габриела Топузова (MOMVY), Деница Киркова (Crystal Spa and Wellness)",
    location: "Главна зала",
    description: "Дискусия за стратегиите за дълголетие и здравословен живот",
    type: "panel",
  },
  {
    id: 15,
    time: "17:30 - 18:00",
    title: "Заключителни думи и нетуъркинг",
    speaker: "Организаторски екип",
    location: "Главна зала & Фоайе",
    description:
      "Финален шанс да размените контакти с останалите гости на конференцията",
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
