"use client";

import { useEffect } from "react";
import Link from "next/link";
import "../styles/globals.css";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html lang="bg" className="h-full">
      <body className="h-full">
        <div className="min-h-screen bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base font-semibold leading-8 text-[#ff8d00]">
              Критична грешка
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Нещо се обърка
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Възникна критична грешка в приложението. Моля, опитайте да
              презаредите страницата.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={() => reset()}
                className="rounded-md bg-[#ff8d00] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0a7a4c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Опитайте отново
              </button>
              <Link href="/" className="text-sm font-semibold text-gray-900">
                Към началната страница <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
