/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#F1F5F9",
          100: "#E2E8F0",
          700: "#1E293B",
          800: "#152033",
          900: "#0F172A",
          950: "#090E1A",
        },
        brand: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
        },
      },
    },
  },
  plugins: [],
};
