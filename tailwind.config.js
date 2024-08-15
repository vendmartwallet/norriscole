/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-pink": "0 1px 8px 0 #FF3F8E",
      },
    },
  },
  plugins: [],
};
