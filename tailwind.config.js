/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Важно: safelist гарантира, че тези класове ще бъдат включени дори да не ги открием в HTML
  safelist: [
    "custom-2xl-right-30",
    "custom-3xl-right-46",
    "debug-2xl",
    "debug-3xl",
  ],
  theme: {
    extend: {
      spacing: {
        30: "7.5rem", // 120px
        46: "11.5rem", // 184px
      },
      screens: {
        xs: "480px", // extra-small screens
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1680px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
