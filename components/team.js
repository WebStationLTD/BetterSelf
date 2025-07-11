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
          {members.map((member, index) => (
            <li
              key={member.id}
              className="flex flex-col items-center text-center"
            >
              {member.slug && (
                <Link
                  href={`/team/${member.slug}`}
                  prefetch={true}
                  className="group"
                >
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto overflow-hidden rounded-2xl group-hover:opacity-75 transition-all duration-300">
                    <Image
                      fill
                      sizes="(max-width: 640px) 16rem, (max-width: 768px) 18rem, (max-width: 1024px) 20rem, 24rem"
                      quality={100}
                      priority={index < 3} // Приоритетно зареждане на първите 3 члена
                      loading={index < 3 ? "eager" : "lazy"}
                      alt={member.name || "Член на екипа"}
                      src={member.profilepicture || "/placeholder.webp"}
                      className="object-cover transition-transform duration-300 group-hover:scale-105" // Запазваме object-cover, за да запълни div-a
                      format="webp"
                    />
                    
                    {/* Mobile-only clickable indicator */}
                    <div className="absolute bottom-3 right-3 md:hidden">
                      <div className="bg-[#ff8d00] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border-2 border-white">
                        Вижте повече
                      </div>
                    </div>
                    
                    {/* Desktop-only hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-white text-sm font-medium flex items-center justify-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Вижте повече за лектора
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900 group-hover:text-[#ff8d00] transition-colors duration-300">
                    {member.name || "Член на екипа"}
                  </h3>
                  <p className="text-base/7 text-gray-600">
                    {member.position || ""}
                  </p>
                </Link>
              )}
              <ul role="list" className="mt-6 flex gap-x-6">
                {member.linkedin && member.linkedin.url && (
                  <li>
                    <Link
                      href={member.linkedin.url}
                      target={member.linkedin.target || "_blank"}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="size-5"
                      >
                        <path
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </li>
                )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
