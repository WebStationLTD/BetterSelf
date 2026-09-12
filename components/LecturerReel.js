export default function LecturerReel({ video, className = "" }) {
  if (!video?.src) return null;

  return (
    <div className={className}>
      <video
        className="w-full max-h-80 rounded-xl bg-black object-contain shadow-lg"
        controls
        preload="metadata"
        playsInline
        title={video.title}
      >
        <source src={video.src} type="video/mp4" />
        Вашият браузър не поддържа видео елемента.
      </video>
    </div>
  );
}
