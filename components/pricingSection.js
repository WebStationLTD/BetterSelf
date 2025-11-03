import { CheckIcon } from "@heroicons/react/24/outline";

const onlineFeatures = [
  "Онлайн достъп до конференцията в реално време",
  "Достъп до записа от събитието",
];
const vipFeatures = [
  "Присъствие на живо на конференцията",
  "Достъп до записа от събитието",
  "Пропуск за кафе паузата",
  "ВИП място на първите редове в залата",
  "ВИП вечеря в ресторанта на хотела с част от лекторите",
];
const businessFeatures = [
  "Присъствие на живо на конференцията",
  "Достъп до записа от събитието",
  "Пропуск за кафе паузата",
];

export default function Example() {
  return (
    <div className="bg-gray-900 pb-14">
      <div className="px-6 pt-10 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl font-semibold text-gray-300">Цени</h2>
        </div>
      </div>

      <div className="mt-16 bg-white lg:mt-20">
        <div className="relative z-0">
          <div className="absolute inset-0 bg-gray-900" />
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="isolate grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-8">
              <div className="mx-auto flex w-full max-w-md flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex flex-1 flex-col">
                  <div className="bg-white px-6 py-10">
                    <div>
                      <h3
                        id="tier-online"
                        className="text-center text-2xl font-medium text-gray-900"
                      >
                        Виртуален билет
                      </h3>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900">
                          <span className="font-bold">49 лв.</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between border-t-2 border-gray-700 bg-gray-800 p-6 sm:p-10 lg:p-6 xl:p-10">
                    <ul role="list" className="space-y-4">
                      {onlineFeatures.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="shrink-0">
                            <CheckIcon
                              aria-hidden="true"
                              className="size-6 shrink-0 text-[#ff8d00]"
                            />
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-300">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <div className="rounded-lg shadow-md">
                        <a
                          href="https://buy.stripe.com/14A14najr84j0Vk9DN2kw00"
                          aria-describedby="tier-online"
                          className="block w-full rounded-lg border border-transparent bg-white px-6 py-3 text-center text-base font-medium text-indigo-600 hover:bg-gray-50"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Купи
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-10 mx-auto flex w-full max-w-lg flex-col rounded-lg shadow-xl lg:-my-8 opacity-60 grayscale">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-lg border-2 border-gray-400"
                />
                {/* Overlay badge - ИЗЧЕРПАН */}
                <div className="absolute inset-x-0 top-0 translate-y-px transform z-20">
                  <div className="flex -translate-y-1/2 transform justify-center">
                    <span className="inline-flex rounded-full bg-gray-500 px-4 py-1 text-base font-semibold text-white shadow-lg">
                      🔒 ПРОДАЖБИТЕ ПРИКЛЮЧИХА
                    </span>
                  </div>
                </div>
                <div className="rounded-t-lg bg-gray-100 px-6 pt-12 pb-10">
                  <div>
                    <h3
                      id="tier-business"
                      className="text-center text-3xl font-semibold tracking-tight text-gray-600 sm:-mx-6"
                    >
                      Бизнес билет
                    </h3>
                    <div className="mt-4 flex items-center justify-center">
                      <span className="flex items-start px-3 text-6xl tracking-tight text-gray-600 sm:text-6xl">
                        <span className="font-bold line-through">99 лв.</span>
                      </span>
                    </div>
                    <div className="mt-2 text-center">
                      <span className="inline-block bg-gray-200 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full border border-gray-300 shadow-sm">
                        ИЗЧЕРПАНИ
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-grow flex-col justify-between rounded-b-lg border-t-2 border-gray-400 bg-gray-700 px-6 pt-10 pb-8 sm:px-10 sm:py-10">
                  <ul role="list" className="space-y-4">
                    {businessFeatures.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div className="shrink-0">
                          <CheckIcon
                            aria-hidden="true"
                            className="size-6 shrink-0 text-gray-500"
                          />
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-400">
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <div className="rounded-lg shadow-md">
                      <button
                        disabled
                        className="block w-full rounded-lg border border-gray-400 bg-gray-400 px-6 py-4 text-center text-xl/6 font-medium text-gray-200 cursor-not-allowed"
                      >
                        Изчерпани
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto flex w-full max-w-md flex-col overflow-hidden rounded-lg shadow-lg opacity-60 grayscale">
                {/* Overlay badge - ИЗЧЕРПАН */}
                <div className="absolute inset-x-0 top-6 z-20 flex justify-center">
                  <span className="inline-flex rounded-full bg-gray-500 px-4 py-1 text-sm font-semibold text-white shadow-lg">
                    🔒 ПРОДАЖБИТЕ ПРИКЛЮЧИХА
                  </span>
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="bg-gray-100 px-6 py-10">
                    <div>
                      <h3
                        id="tier-vip"
                        className="text-center text-2xl font-medium text-gray-600"
                      >
                        ВИП билет
                      </h3>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="flex items-start px-3 text-6xl tracking-tight text-gray-600">
                          <span className="font-bold line-through">
                            249 лв.
                          </span>
                        </span>
                      </div>
                      <div className="mt-2 text-center">
                        <span className="inline-block bg-gray-200 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full border border-gray-300 shadow-sm">
                          ИЗЧЕРПАНИ
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-between border-t-2 border-gray-400 bg-gray-700 p-6 sm:p-10 lg:p-6 xl:p-10">
                    <ul role="list" className="space-y-4">
                      {vipFeatures.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="shrink-0">
                            <CheckIcon
                              aria-hidden="true"
                              className="size-6 shrink-0 text-gray-500"
                            />
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-400">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <div className="rounded-lg shadow-md">
                        <button
                          disabled
                          className="block w-full rounded-lg border border-gray-400 bg-gray-400 px-6 py-3 text-center text-base font-medium text-gray-200 cursor-not-allowed"
                        >
                          Изчерпани
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Алтернативен метод за плащане */}
      <div className="bg-gray-900 px-6 pt-8 pb-10 lg:px-8 mt-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-lg text-gray-300">
            Искате да купите билети с различен метод на плащане?{" "}
            <a
              href="https://bilet.bg/bg/cart/better-self-biohacking-summit-2025-6457"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#ff8d00] hover:text-orange-300 transition-colors duration-300 mr-2"
            >
              Следвайте този линк
            </a>
            и платете с:
          </p>

          {/* Методи за плащане */}
          <div className="mt-8">
            {/* <h3 className="text-xl font-semibold text-gray-300 mb-6">
              Плати тук с:
            </h3> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {/* PayPal */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-[#ff8d00] transition-colors duration-300">
                <div className="flex items-center justify-center h-12">
                  <span className="text-base font-medium text-gray-300">
                    PayPal
                  </span>
                </div>
              </div>

              {/* ePay.bg, EasyPay, ATM */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-[#ff8d00] transition-colors duration-300">
                <div className="flex items-center justify-center h-12">
                  <span className="text-base font-medium text-gray-300 text-center">
                    ePay.bg, EasyPay, ATM
                  </span>
                </div>
              </div>

              {/* Банков превод */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-[#ff8d00] transition-colors duration-300">
                <div className="flex items-center justify-center h-12">
                  <span className="text-base font-medium text-gray-300">
                    Банков превод
                  </span>
                </div>
              </div>

              {/* Наложен платеж */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-[#ff8d00] transition-colors duration-300">
                <div className="flex items-center justify-center h-12">
                  <span className="text-base font-medium text-gray-300 text-center">
                    Наложен платеж (SPEEDY)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
