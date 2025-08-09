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
            <div className="grid grid-cols-2 gap-8 items-center">
              <div className="h-16 flex items-center justify-center relative">
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
              <div className="h-16 flex items-center justify-center relative">
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
              <div className="h-16 flex items-center justify-center relative">
                <Link
                  href="https://nad.bg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-full flex items-center justify-center hover:opacity-75 transition-opacity duration-300"
                >
                  <Image
                    alt="Nad Clinic"
                    src="/nad-clinic-logo.jpg"
                    fill
                    quality={80}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="h-16 flex items-center justify-center relative">
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
              <div className="h-16 flex items-center justify-center relative">
                <Link
                  href="https://thermanumera.com/bg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-full flex items-center justify-center hover:opacity-75 transition-opacity duration-300"
                >
                  <Image
                    alt="Thermanumera"
                    src="/therma-numera-logo.png"
                    fill
                    quality={80}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="h-16 flex items-center justify-center relative">
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
              <div className="h-16 flex items-center justify-center relative">
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
              <div className="h-16 flex items-center justify-center relative">
                <Image
                  alt="Офсет График"
                  src="/офсет-график-Logo.png"
                  fill
                  quality={80}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="h-16 flex items-center justify-center relative">
                <Link
                  href="https://createx.bg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-full flex items-center justify-center hover:opacity-75 transition-opacity duration-300"
                >
                  <Image
                    alt="Createx"
                    src="/createx-logo.png"
                    fill
                    quality={100}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                </Link>
              </div>
              <div className="h-16 flex items-center justify-center relative">
                <Image
                  alt="Ecom"
                  src="/ecom-logo.png"
                  fill
                  quality={100}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="h-16 flex items-center justify-center relative">
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
              <div className="h-16 flex items-center justify-center relative">
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
              <div className="h-16 flex items-center justify-center relative">
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
              <div className="h-16 flex items-center justify-center relative">
                <Image
                  alt="Даник добро"
                  src="/danyk-dobro-logo.jpg"
                  fill
                  quality={100}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="h-16 flex items-center justify-center relative">
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
              <div className="h-16 flex items-center justify-center relative">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
