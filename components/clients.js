import Image from "next/image";

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
                <Image
                  alt="Grand Hotel Astoria"
                  src="/grand-hotel-astoria-logo.png"
                  fill
                  quality={80}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="h-16 flex items-center justify-center relative">
                <Image
                  alt="Derma Act"
                  src="/derma-act-logo.png"
                  fill
                  quality={80}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="h-16 flex items-center justify-center relative">
                <Image
                  alt="Nad Clinic"
                  src="/nad-clinic-logo.jpg"
                  fill
                  quality={80}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* <div className="h-16 flex items-center justify-center relative">
                <Image
                  alt="SavvyCal"
                  src="https://tailwindui.com/plus-assets/img/logos/savvycal-logo-gray-900.svg"
                  fill
                  quality={80}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="h-16 flex items-center justify-center relative">
                <Image
                  alt="Laravel"
                  src="https://tailwindui.com/plus-assets/img/logos/laravel-logo-gray-900.svg"
                  fill
                  quality={80}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="h-16 flex items-center justify-center relative">
                <Image
                  alt="Transistor"
                  src="https://tailwindui.com/plus-assets/img/logos/transistor-logo-gray-900.svg"
                  fill
                  quality={80}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="h-16 flex items-center justify-center relative">
                <Image
                  alt="Statamic"
                  src="https://tailwindui.com/plus-assets/img/logos/statamic-logo-gray-900.svg"
                  fill
                  quality={80}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="h-16 flex items-center justify-center relative">
                <Image
                  alt="Tuple"
                  src="https://tailwindui.com/plus-assets/img/logos/tuple-logo-gray-900.svg"
                  fill
                  quality={80}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div> */}
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
                <Image
                  alt="Webstation"
                  src="/webstation-ltd-logo.svg"
                  fill
                  quality={100}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
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
                <Image
                  alt="Createx"
                  src="/createx-logo.png"
                  fill
                  quality={100}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
