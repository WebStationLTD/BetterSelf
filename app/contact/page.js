import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { getContactInfo } from "../../services/contacts";
import ContactForm from "../../components/contactForm"; // Вкарваме клиентската форма
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "Контакти - Betterself",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  };
}

export default async function ContactPage() {
  const contactInfo = await getContactInfo();

  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Дясна колона - заглавие, контакти и форма (първа на мобилни) */}
        <div className="px-6 pt-24 pb-20 sm:pt-24 lg:static lg:px-8 lg:py-24 lg:order-2">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl mb-8">
              Свържете се с нас
            </h2>

            <dl className="mb-10 space-y-4 text-base text-gray-600">
              {contactInfo && (
                <>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <BuildingOffice2Icon className="h-7 w-6 text-gray-400" />
                    </dt>
                    <dd>{contactInfo.address}</dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <PhoneIcon className="h-7 w-6 text-gray-400" />
                    </dt>
                    <dd>
                      <Link
                        href={`tel:${contactInfo.phone_number}`}
                        className="hover:text-gray-900"
                      >
                        {contactInfo.phone_number}
                      </Link>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <EnvelopeIcon className="h-7 w-6 text-gray-400" />
                    </dt>
                    <dd>
                      <Link
                        href={`mailto:${contactInfo.email}`}
                        className="hover:text-gray-900"
                      >
                        {contactInfo.email}
                      </Link>
                    </dd>
                  </div>
                </>
              )}
            </dl>
          </div>
          <ContactForm />
        </div>

        {/* Лява колона - текст за партньорство (втора на мобилни) */}
        <div className="px-6 pt-24 pb-20 sm:pt-24 lg:static lg:px-8 lg:py-24 lg:order-1">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect fill="white" width="100%" height="100%" strokeWidth={0} />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                />
              </svg>
            </div>

            <div className="text-lg leading-8 text-gray-700">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Станете партньор на Better Self - Biohacking & Longevity
                Conference 2025
              </h2>
              <p className="mb-4">
                Вярвате в силата на превенцията, оптималното здраве и
                съзнателния живот? Ако вашата мисия, продукт или услуга помага
                на хората да се превърнат в по-добра версия на себе си чрез
                биохакинг, дълголетие, спорт, нутриционистика, медицина или
                холистичен подход – мястото ви е с нас!
              </p>
              <p>
                Better Self - Biohacking & Longevity Conference 2025 събира на
                едно място водещите имена, брандове и иноватори в сектора.
                Свържете се с нас, за да обсъдим персонализирана форма на
                партньорство, която да отрази най-силно стойността на вашия
                бранд. Бъдете част от промяната, която вдъхновява.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
