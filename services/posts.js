import { fetchAPI } from "./api";
import { cache } from "react";
import { getLocalPostBySlug, getLocalPosts } from "../data/localPosts";

function sortPostsByDate(posts) {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

/**
 * Get single post by slug
 * @param {string} slug - Post slug
 * @returns {Promise<Object|null>} - Post data
 */
export const getPostBySlug = cache(async (slug) => {
  const localPost = getLocalPostBySlug(slug);
  if (localPost) {
    return [localPost];
  }

  return await fetchAPI(
    `posts?slug=${slug}&_fields=id,slug,yoast_head_json,date,title,content`
  );
});

/**
 * Get latest posts
 * @returns {Promise<Array>} - List of latest posts
 */
export const getLatestPosts = cache(async () => {
  const wordpressPosts =
    (await fetchAPI(
      "posts?per_page=3&_fields=id,slug,yoast_head_json,date,title,content",
    )) || [];

  return sortPostsByDate([...getLocalPosts(), ...wordpressPosts]).slice(0, 3);
});
