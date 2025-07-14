import { fetchAPI } from "./api";
import { cache } from "react";
import he from "he";

// Helper функция за правилно декодиране на HTML entities
const cleanDecodeText = (text) => {
  if (!text) return "";

  // Декодираме HTML entities няколко пъти за случаи с двойно кодиране
  let decoded = text;
  for (let i = 0; i < 3; i++) {
    const newDecoded = he.decode(decoded);
    if (newDecoded === decoded) break; // Спираме ако няма повече промени
    decoded = newDecoded;
  }

  // Почистваме възможни останали HTML entity фрагменти
  decoded = decoded
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"');

  // Премахваме излишни & символи в края и множествени & & последователности
  decoded = decoded
    .replace(/\s*&\s*&\s*$/, "") // Премахваме " & &" в края
    .replace(/\s*&\s*$/, "") // Премахваме " &" в края
    .replace(/&\s*&/g, "&") // Заменяме "& &" с "&"
    .trim(); // Премахваме излишни интервали

  return decoded;
};

/**
 * Search content across different types
 */
export const searchContent = cache(async (query) => {
  if (!query || query.length < 3) return [];

  try {
    // Търсене в API с актуалния search query
    const [services, blogPosts, members] = await Promise.all([
      fetchAPI(
        `services?search=${encodeURIComponent(
          query
        )}&_fields=id,slug,title&per_page=5`
      ),
      fetchAPI(
        `posts?search=${encodeURIComponent(
          query
        )}&_fields=id,slug,title,excerpt&per_page=3`
      ),
      fetchAPI(
        `members?search=${encodeURIComponent(
          query
        )}&_fields=id,slug,title&per_page=3`
      ),
    ]);

    // Филтрираме и форматираме резултатите
    const results = [
      ...(blogPosts || []).map((post) => ({
        id: post.id,
        title: cleanDecodeText(post.title.rendered),
        slug: post.slug,
        excerpt: cleanDecodeText(post.excerpt?.rendered || ""),
        type: "blog",
      })),
      ...(members || []).map((member) => ({
        id: member.id,
        title: cleanDecodeText(member.title.rendered),
        slug: member.slug,
        type: "team",
      })),
      ...(services || []).map((service) => ({
        id: service.id,
        title: cleanDecodeText(service.title.rendered),
        slug: service.slug,
        type: "services",
      })),
    ];

    return results;
  } catch (error) {
    console.error("Search API Error:", error);
    return [];
  }
});
