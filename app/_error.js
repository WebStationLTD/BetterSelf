import Link from "next/link";

function Error({ statusCode }) {
  return (
    <div className="min-h-screen bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold leading-8 text-[#ff8d00]">
          {statusCode}
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Възникна проблем
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          {statusCode
            ? `Грешка ${statusCode} на сървъра`
            : "Възникна грешка в клиента"}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-[#ff8d00] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0a7a4c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Към началната страница
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-gray-900">
            Свържете се с нас <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
