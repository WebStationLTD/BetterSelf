import { redirect } from "next/navigation";

export const metadata = {
  title: "Рагдол — Интерактивен гид за нов собственик",
  description:
    "Пълен интерактивен canvas за нов собственик на Ragdoll в София: развъдници, храна, витамини, фонтани, катерушки, бюджет и съвети за компания.",
  robots: { index: false, follow: false },
};

export default function RagdollOwnerGuidePage() {
  redirect("/ragdoll-owner-canvas.html");
}
