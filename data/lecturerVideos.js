export const LECTURER_VIDEOS = [
  {
    names: ["Магдалена Николова"],
    src: "/videos/magdalena-nikolova-reel.mp4",
    title: "Кратко видео: Магдалена Николова",
  },
  {
    names: ["Десислава Дамянова"],
    src: "/videos/desislava-damyanova-reel.mp4",
    title: "Кратко видео: Десислава Дамянова",
  },
  {
    names: ["Иван Головацкий"],
    src: "/videos/ivan-golovatskiy-reel.mp4",
    title: "Кратко видео: Иван Головацкий",
  },
  {
    names: ["Иво Петров"],
    src: "/videos/ivo-petrov-reel.mp4",
    title: "Кратко видео: Проф. д-р Иво Петров",
  },
  {
    names: ["Христо Попов"],
    src: "/videos/hristo-popov-reel.mp4",
    title: "Кратко видео: Христо Попов",
  },
  {
    names: ["Моузес Налока"],
    src: "/videos/moses-naloka-reel.mp4",
    title: "Кратко видео: Моузес Налока",
  },
];

export function getLecturerVideo(name = "") {
  if (!name) return null;
  return (
    LECTURER_VIDEOS.find((item) =>
      item.names.some((part) => name.includes(part)),
    ) || null
  );
}
