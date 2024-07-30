/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      lineHeight: {
        40: "40px",
        18: "18px",
        60: "60px",
        16: "16px",
      },
    },
  },
  plugins: [],
};
