import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { getContactInfo } from "../services/contacts";

export default async function ContactInfo() {
  const contactInfo = await getContactInfo();

  return (
    <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
      {contactInfo && (
        <>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
            </dt>
            <dd>
              <a
                className="hover:text-white"
                href={`tel:${contactInfo.phone_number}`}
              >
                {contactInfo.phone_number}
              </a>
            </dd>
          </div>
          <div className="flex gap-x-4">
            <dt className="flex-none">
              <EnvelopeIcon
                className="h-7 w-6 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd>
              <a
                className="hover:text-white"
                href={`mailto:${contactInfo.email}`}
              >
                {contactInfo.email}
              </a>
            </dd>
          </div>
        </>
      )}
    </dl>
  );
}
