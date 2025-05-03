export default function Loading() {
  return (
    <div className="w-full h-[80vh] flex items-center justify-center">
      <div className="relative flex h-14 w-14">
        <div className="animate-ping absolute h-14 w-14 rounded-full bg-[#129160] opacity-75"></div>
        <div className="relative rounded-full h-14 w-14 bg-[#129160]"></div>
      </div>
    </div>
  );
}
