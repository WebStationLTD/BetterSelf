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
    title: "Медицината на бъдещето: От лечение на болести към програмиране на здраве",
    speaker: "Магдалена Николова",
    location: "Главна зала",
    description:
      "Как съвременната наука измества фокуса от лечение на болести към програмиране на здраве",
    type: "presentation",
  },
  {
    id: 3,
    time: "10:00 - 10:30",
    title: "Longevity Mindset: дълголетието като начин на мислене",
    speaker: "Д-р Жасмина Маджид",
    location: "Главна зала",
    description:
      "Дълголетието като начин на мислене",
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
    title: "Правиш всичко „правилно“, но защо си изтощен?",
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
    speaker: "",
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
    title: "Асертивност – качеството на уверените хора",
    speaker: "Иван Головацкий",
    location: "Главна зала",
    description:
      "Как да говориш уверено и да отстояваш себе си; практически упражнения за уверена и директна комуникация; как да разпознаваш личните си граници; как да отстояваш позицията си без агресия и без вина; как да заявяваш идеите, нуждите и чувствата си ясно и уважително",
    type: "presentation",
  },
  {
    id: 11,
    time: "15:00 - 15:30",
    title: "Христо Попов",
    speaker: "Христо Попов",
    location: "Главна зала",
    description: "",
    type: "presentation",
  },
  {
    id: 12,
    time: "15:30 - 15:45",
    title: "Сърдечно-съдово здраве и дълголетие",
    speaker: "Проф. д-р Иво Петров, дмн",
    location: "Главна зала",
    description:
      "Кратка лекция за връзката между сърдечно-съдовото здраве и дълголетието",
    type: "presentation",
  },
  {
    id: 13,
    time: "15:45 - 16:15",
    title: "Следобедна кафе пауза",
    speaker: "",
    location: "Главно фоайе",
    description: "Кратка почивка преди следващия панел",
    type: "break",
  },
  {
    id: 14,
    time: "16:15 - 16:45",
    title: "Как мислят шампионите?",
    speaker: "Моузес Налока",
    location: "Главна зала",
    description:
      "Психологически стратегии за постигане на върхови резултати и преодоляване на ограниченията",
    type: "presentation",
  },
  {
    id: 15,
    time: "16:45 - 17:45",
    title: "Панел Longevity",
    speaker: "Д-р Гергана Иванова",
    location: "Главна зала",
    description: "Дискусия за стратегиите за дълголетие и здравословен живот",
    type: "panel",
  },
  {
    id: 16,
    time: "17:45 - 18:15",
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
