/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7e22ce", // violet-800
          dark: "#a855f7", // purple-500
        },
        background: {
          light: "#ffffff",
          dark: "rgb(17, 24, 39)", // gray-900
        },
        text: {
          light: "rgb(31, 41, 55)", // gray-800
          dark: "#e5e7eb", // gray-200
        },
      },
      
    },
  },
  plugins: [],
};
