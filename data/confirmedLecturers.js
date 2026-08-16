export const CONFIRMED_LECTURERS_2026 = [
  "Христо Попов",
  "Иван Сигридов",
  "Десислава Дамянова",
  "Камелия Присадашка",
  "Константин Маламов",
  "Иван Головацкий",
  "Моузес Налока",
];

export const LOCAL_LECTURERS = [
  {
    id: "local-hristo-popov",
    name: "Христо Попов",
    slug: "hristo-popov",
    position: "Основател и CEO на Fast Track",
    profilepicture: "/hristo-popov.jpg",
    phonenumber: null,
    email: null,
    linkedin: {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/chpopov",
      target: "_blank",
    },
    description: `
<p>Христо Попов е основател и изпълнителен директор на Fast Track — глобална консултантска компания с над 500 клиента в 30 държави. Програмата Fast Track се прилага от над 20 000 мениджъри по света. Сред клиентите са Google, Mango, Ray-Ban и Four Seasons.</p>
<p>Основал е над 30 бизнеса в 7 държави, с екипи от над 15 000 души. Зад гърба си има три успешни изхода, два фалита и над 12 сделки по сливания и придобивания с обща стойност около 1 милиард.</p>
<p>Кариерата му включва ръководни позиции в Shell International — сценарийно планиране, оперативен директор за България и CEO за Тайван — както и ролята на CEO в Interbrew България и Intersnack. Учил е в Института по икономика в София, Cambridge, Harvard Business School, London Business School, Babson College и European Leadership Institute.</p>
<p>Прекарал е една година в ашрам в Индия, където е изучавал йога, веданта и източна философия, и три години в българските специални части. Има над 50 публикации в издания като Forbes, Fortune, India Times и Manager. Член е на YPO, където е бил Chapter Chair и Education Chair за Европа.</p>
<p>Баща е на три дъщери. Интересите му включват философия, фитнес и благосъстояние, бойни изкуства, автомобили, бизнес и човешка ефективност, стратегия, учене, природа и човешкия ум.</p>
`.trim(),
  },
];

export function getLocalLecturer(slug) {
  return LOCAL_LECTURERS.find((lecturer) => lecturer.slug === slug) || null;
}

export function getConfirmedMembers(members = []) {
  const merged = [...LOCAL_LECTURERS];

  for (const member of members) {
    const alreadyIncluded = merged.some(
      (item) => item.slug && member.slug && item.slug === member.slug,
    );
    if (!alreadyIncluded) {
      merged.push(member);
    }
  }

  return CONFIRMED_LECTURERS_2026.map((name) =>
    merged.find((member) => member.name?.includes(name)),
  ).filter(Boolean);
}
