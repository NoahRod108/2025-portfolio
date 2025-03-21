/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "32rem",
        sm: "541px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondaryText: "#adadad",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
