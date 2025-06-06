import { CheckIcon } from "@heroicons/react/24/outline";

const hobbyFeatures = [
  "Pariatur quod similique",
  "Sapiente libero doloribus",
  "Vel ipsa esse repudiandae",
];
const scaleFeatures = [
  "Pariatur quod similique",
  "Sapiente libero doloribus",
  "Vel ipsa esse repudiandae",
];
const growthFeatures = [
  "Quia rem est sed impedit magnam",
  "Dolorem vero ratione voluptates",
  "Qui sed ab doloribus voluptatem dolore",
  "Laborum commodi molestiae id et fugiat",
  "Nam ut ipsa nesciunt culpa modi dolor",
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
            <div className="relative lg:grid lg:grid-cols-7">
              <div className="mx-auto max-w-md lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:mx-0 lg:max-w-none">
                <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-l-lg">
                  <div className="flex flex-1 flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <h3
                          id="tier-hobby"
                          className="text-center text-2xl font-medium text-gray-900"
                        >
                          Hobby
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-4xl font-medium tracking-tight">
                              $
                            </span>
                            <span className="font-bold">79</span>
                          </span>
                          <span className="text-xl font-medium text-gray-500">
                            /month
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between border-t-2 border-gray-100 bg-gray-50 p-6 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {hobbyFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="shrink-0">
                              <CheckIcon
                                aria-hidden="true"
                                className="size-6 shrink-0 text-[#ff8d00]"
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <a
                            href="#"
                            aria-describedby="tier-hobby"
                            className="block w-full rounded-lg border border-transparent bg-white px-6 py-3 text-center text-base font-medium text-indigo-600 hover:bg-gray-50"
                          >
                            Start your trial
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-10 max-w-lg lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4 lg:mx-0 lg:mt-0 lg:max-w-none">
                <div className="relative z-10 rounded-lg shadow-xl">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-lg border-2 border-[#ff8d00]"
                  />
                  <div className="absolute inset-x-0 top-0 translate-y-px transform">
                    <div className="flex -translate-y-1/2 transform justify-center">
                      <span className="inline-flex rounded-full bg-[#ff8d00] px-4 py-1 text-base font-semibold text-white">
                        Most popular
                      </span>
                    </div>
                  </div>
                  <div className="rounded-t-lg bg-white px-6 pt-12 pb-10">
                    <div>
                      <h3
                        id="tier-growth"
                        className="text-center text-3xl font-semibold tracking-tight text-gray-900 sm:-mx-6"
                      >
                        Growth
                      </h3>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900 sm:text-6xl">
                          <span className="mt-2 mr-2 text-4xl font-medium tracking-tight">
                            $
                          </span>
                          <span className="font-bold">149</span>
                        </span>
                        <span className="text-2xl font-medium text-gray-500">
                          /month
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-b-lg border-t-2 border-gray-100 bg-gray-50 px-6 pt-10 pb-8 sm:px-10 sm:py-10">
                    <ul role="list" className="space-y-4">
                      {growthFeatures.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="shrink-0">
                            <CheckIcon
                              aria-hidden="true"
                              className="size-6 shrink-0 text-[#ff8d00]"
                            />
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10">
                      <div className="rounded-lg shadow-md">
                        <a
                          href="#"
                          aria-describedby="tier-growth"
                          className="block w-full text-[#000000] bg-[#ff8d00] hover:bg-gray-300 hover:text-[#000000] rounded-lg border border-transparent px-6 py-4 text-center text-xl/6 font-medium text-white"
                        >
                          Start your trial
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-10 max-w-md lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3 lg:m-0 lg:max-w-none">
                <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-r-lg">
                  <div className="flex flex-1 flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <h3
                          id="tier-scale"
                          className="text-center text-2xl font-medium text-gray-900"
                        >
                          Scale
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="flex items-start px-3 text-6xl tracking-tight text-gray-900">
                            <span className="mt-2 mr-2 text-4xl font-medium tracking-tight">
                              $
                            </span>
                            <span className="font-bold">349</span>
                          </span>
                          <span className="text-xl font-medium text-gray-500">
                            /month
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between border-t-2 border-gray-100 bg-gray-50 p-6 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {scaleFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="shrink-0">
                              <CheckIcon
                                aria-hidden="true"
                                className="size-6 shrink-0 text-[#ff8d00]"
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <a
                            href="#"
                            aria-describedby="tier-scale"
                            className="block w-full rounded-lg border border-transparent bg-white px-6 py-3 text-center text-base font-medium text-indigo-600 hover:bg-gray-50"
                          >
                            Start your trial
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
