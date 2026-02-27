"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getMembers } from "../services/members";

export default function Team() {
  const [members, setMembers] = useState([]);

  // Fetch members from WordPress API on component mount
  useEffect(() => {
    const fetchMembers = async () => {
      const membersData = await getMembers();
      setMembers(membersData || []);
    };

    fetchMembers();
  }, []);

  return (
    <div className="bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-8xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center">
            Лектори
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600 text-center">
            Запознайте се с нашите лектори, които ще ви помогнат да постигнете
            успеха си.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-12 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <li
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group hover:from-orange-50 hover:to-yellow-50 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff8d00]/10 via-orange-500/5 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center">
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff8d00] via-orange-400 to-yellow-500 animate-pulse">
                    Coming Soon
                  </h3>
                  <p className="mt-3 text-sm text-gray-500">
                    Очаквайте скоро
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
