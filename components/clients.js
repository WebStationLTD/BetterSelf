import Image from "next/image";
import Link from "next/link";

export default function Clients() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-0 relative">
          {/* Разделителна линия с градиент - само на десктоп */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent transform -translate-x-1/2"></div>

          {/* Спонсори секция */}
          <div className="mx-auto w-full max-w-xl lg:mx-0 px-10">
            <h2
              id="sponsors"
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2 text-center"
            >
              Спонсори
            </h2>
            {/* Хоризонтална линия с градиент под заглавието */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"></div>
            <div className="mb-6 rounded-3xl border-2 border-[#ff8d00]/30 bg-gradient-to-br from-orange-50 via-white to-yellow-50 px-6 py-8">
              <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#ff8d00]">
                Генерален спонсор
              </p>
              <div className="relative mx-auto h-28 w-full max-w-sm sm:h-28">
                <Image
                  alt="MD Capital"
                  src="/md-capital-logo.png"
                  fill
                  quality={100}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <div className="mb-10 grid grid-cols-2 gap-4">
              <div className="rounded-3xl border-2 border-gray-200 bg-white px-3 py-6 shadow-sm sm:px-6 sm:py-8">
                <div className="relative mx-auto h-24 w-full sm:h-20">
                  <Image
                    alt="HYDE"
                    src="/hyde-logo.jpg"
                    fill
                    quality={100}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
              <div className="rounded-3xl border-2 border-gray-200 bg-white px-3 py-6 shadow-sm sm:px-6 sm:py-8">
                <div className="relative mx-auto h-24 w-full sm:h-20">
                  <Image
                    alt="Simeonovsko 12"
                    src="/simeonovsko12-logo.png"
                    fill
                    quality={100}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 items-center">
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Image
                  alt="Ралица Узунова"
                  src="/ralitsa-uzunova-logo.jpg"
                  fill
                  quality={100}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Image
                  alt="A&G Luxury Boutique"
                  src="/ag-luxury-boutique-logo.jpg"
                  fill
                  quality={80}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Link
                  href="https://www.astoriagrandhotel.bg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-full flex items-center justify-center hover:opacity-75 transition-opacity duration-300"
                >
                  <Image
                    alt="Grand Hotel Astoria"
                    src="/grand-hotel-astoria-logo.png"
                    fill
                    quality={80}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Link
                  href="https://derma-act.bg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-full flex items-center justify-center hover:opacity-75 transition-opacity duration-300"
                >
                  <Image
                    alt="Derma Act"
                    src="/derma-act-logo.png"
                    fill
                    quality={80}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Link
                  href="https://drbastet.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-full flex items-center justify-center hover:opacity-75 transition-opacity duration-300"
                >
                  <Image
                    alt="Dr. Bastet"
                    src="/dr-bastet-logo.jpg"
                    fill
                    quality={80}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Link
                  href="https://www.sofia.dexafit.com/bg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-full flex items-center justify-center hover:opacity-75 transition-opacity duration-300"
                >
                  <Image
                    alt="DexaFit Sofia"
                    src="/dexafit-sofia-logo.png"
                    fill
                    quality={80}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              {/* ВРЕМЕННО СКРИТО
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Link href="https://drbastet.com/" target="_blank" rel="noopener noreferrer" className="relative w-full h-full flex items-center justify-center hover:opacity-75 transition-opacity duration-300">
                  <Image alt="Dr. Bastet" src="/dr-bastet-logo.jpg" fill quality={80} loading="lazy" className="max-h-full max-w-full object-contain" />
                </Link>
              </div>
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Link href="https://thermanumera.com/bg/" target="_blank" rel="noopener noreferrer" className="relative w-full h-full flex items-center justify-center hover:opacity-75 transition-opacity duration-300">
                  <Image alt="Thermanumera" src="/therma-numera-logo.png" fill quality={80} loading="lazy" className="max-h-full max-w-full object-contain" />
                </Link>
              </div>
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Link href="https://www.sofia.dexafit.com/bg" target="_blank" rel="noopener noreferrer" className="relative w-full h-full flex items-center justify-center hover:opacity-75 transition-opacity duration-300">
                  <Image alt="DexaFit Sofia" src="/dexafit-sofia-logo.png" fill quality={80} loading="lazy" className="max-h-full max-w-full object-contain" />
                </Link>
              </div>
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Link href="https://benlianfoods.com/" target="_blank" rel="noopener noreferrer" className="relative w-full h-full flex items-center justify-center hover:opacity-75 transition-opacity duration-300">
                  <Image alt="Benlian Food Philosophy" src="/benlian-logo.jpg" fill quality={100} loading="lazy" className="max-h-full max-w-full object-contain" />
                </Link>
              </div>
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Link href="https://www.insidetracker.com/" target="_blank" rel="noopener noreferrer" className="relative w-full h-full flex items-center justify-center hover:opacity-75 transition-opacity duration-300">
                  <Image alt="InsideTracker" src="/inside-tracker.jpg" fill quality={100} loading="lazy" className="max-h-full max-w-full object-contain" />
                </Link>
              </div>
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Link href="https://revita.bg/double-wood" target="_blank" rel="noopener noreferrer" className="relative w-full h-full flex items-center justify-center hover:opacity-75 transition-opacity duration-300">
                  <Image alt="Double Wood Supplements" src="/double-wood-logo.jpg" fill quality={100} loading="lazy" className="max-h-full max-w-full object-contain" />
                </Link>
              </div>
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Link href="https://momvy.eu/" target="_blank" rel="noopener noreferrer" className="relative w-full h-full flex items-center justify-center hover:opacity-75 transition-opacity duration-300">
                  <Image alt="MOMVY" src="/momvy-logo.png" fill quality={100} loading="lazy" className="max-h-full max-w-full object-contain" />
                </Link>
              </div>
              */}
            </div>
          </div>

          {/* Партньори секция */}
          <div className="mx-auto w-full max-w-xl lg:mx-0 px-10">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-2 text-center">
              Партньори
            </h2>
            {/* Хоризонтална линия с градиент под заглавието */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"></div>
            <div className="grid grid-cols-2 gap-8 items-center">
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Link
                  href="https://fasttrack-growth.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-full flex items-center justify-center hover:opacity-75 transition-opacity duration-300"
                >
                  <Image
                    alt="Fast Track"
                    src="/fast-track-logo.png"
                    fill
                    quality={100}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Link
                  href="https://biohacking.bg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-full flex items-center justify-center hover:opacity-75 transition-opacity duration-300"
                >
                  <Image
                    alt="Biohacking.bg"
                    src="/biohacking-bg-logo.png"
                    fill
                    quality={100}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Link
                  href="https://webstation.bg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-full flex items-center justify-center hover:opacity-75 transition-opacity duration-300"
                >
                  <Image
                    alt="Webstation"
                    src="/webstation-ltd-logo.svg"
                    fill
                    quality={100}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Image
                  alt="Офсет График"
                  src="/офсет-график-Logo.png"
                  fill
                  quality={80}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              {/* ВРЕМЕННО СКРИТО
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Link href="https://createx.bg/" target="_blank" rel="noopener noreferrer" className="relative w-full h-full flex items-center justify-center hover:opacity-75 transition-opacity duration-300">
                  <Image alt="Createx" src="/createx-logo.png" fill quality={100} loading="lazy" className="max-h-full max-w-full object-contain" />
                </Link>
              </div>
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Image alt="Ecom" src="/ecom-logo.png" fill quality={100} loading="lazy" className="max-h-full max-w-full object-contain" />
              </div>
              */}
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Link
                  href="https://maxgroupevents.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-full flex items-center justify-center hover:opacity-75 transition-opacity duration-300"
                >
                  <Image
                    alt="Max Group Events"
                    src="/max-group-events-logo.png"
                    fill
                    quality={100}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Link
                  href="https://www.youtube.com/@jasminnemajid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-full flex items-center justify-center hover:opacity-75 transition-opacity duration-300"
                >
                  <Image
                    alt="Очи в очи"
                    src="/ochi-v-ochi-logo.jpg"
                    fill
                    quality={100}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Link
                  href="https://www.findstaff.bg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-full flex items-center justify-center hover:opacity-75 transition-opacity duration-300"
                >
                  <Image
                    alt="FindStaff"
                    src="/findstaff-logo.jpg"
                    fill
                    quality={100}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Image
                  alt="Даник добро"
                  src="/danyk-dobro-logo.jpg"
                  fill
                  quality={100}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Link
                  href="https://sugabuba.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-full flex items-center justify-center hover:opacity-75 transition-opacity duration-300"
                >
                  <Image
                    alt="Suga Buba"
                    src="/suga-buba-logo.jpg"
                    fill
                    quality={100}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Link
                  href="https://preciva.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-full flex items-center justify-center hover:opacity-75 transition-opacity duration-300"
                >
                  <Image
                    alt="Preciva"
                    src="/preciva-logo.jpg"
                    fill
                    quality={100}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Link
                  href="https://www.eiacademy.bg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-full flex items-center justify-center hover:opacity-75 transition-opacity duration-300"
                >
                  <Image
                    alt="Десислава Дамянова"
                    src="/академия-за-емоционална-интелигентност.jpg"
                    fill
                    quality={100}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="relative flex h-20 items-center justify-center sm:h-16">
                <Link
                  href="https://insurance.bg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-full flex items-center justify-center hover:opacity-75 transition-opacity duration-300"
                >
                  <Image
                    alt="Insurance.bg"
                    src="/insurance-logo.png"
                    fill
                    quality={100}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
