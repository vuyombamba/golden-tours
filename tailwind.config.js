/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#10276F",
          deep: "#0B1C52",
        },
        gold: {
          DEFAULT: "#F7C51B",
          bronze: "#956021",
        },
        steel: "#A9C7E4",
        offwhite: "#F5F6F8",
      },
      fontFamily: {
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
