"use client";

import { useEffect } from "react";
import HeroSection from "./hero";
import dynamic from "next/dynamic";

const EventCountdown = dynamic(() => import("./EventCountdown"), {
  ssr: true,
});
const Schedule = dynamic(() => import("./schedule"), {
  ssr: true,
});
const PricingSection = dynamic(() => import("./pricingSection"), {
  ssr: true,
});
const Incentives = dynamic(() => import("./incentives"), {
  ssr: true,
});
const Team = dynamic(() => import("./team"), { ssr: true });
const CTA = dynamic(() => import("./cta"), { ssr: true });
const Clients = dynamic(() => import("./clients"), { ssr: true });
const Newsletter = dynamic(() => import("./newsletter"), {
  ssr: true,
});
const Testimonial = dynamic(() => import("./testimonial"), {
  ssr: true,
});
const Lastestposts = dynamic(() => import("./latestposts"), {
  ssr: true,
});

export default function HomePageWrapper() {
  useEffect(() => {
    // Проверяваме дали има котва в URL-а при зареждане
    const hash = window.location.hash;
    if (hash) {
      const targetId = hash.substring(1);
      // Малко забавяне за да се заредят всички компоненти
      setTimeout(() => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - 65;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 500);
    }
  }, []);

  return (
    <>
      <HeroSection />
      <EventCountdown />
      <Incentives />
      <Schedule />
      <Team />
      <PricingSection />
      {/* <CTA /> */}
      <Clients />
      <Newsletter />
      <Testimonial />
      <Lastestposts />
    </>
  );
}
