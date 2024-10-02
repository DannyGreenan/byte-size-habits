/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        byteDarkBlue: "#86aac2",
        byteLightBlue: "#b9d2ce",
        byteOrange: "#fdebd5",
        byteDark: "#001b2b",
        byteBackground: "#9badf7",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      fontWeight: {
        extrabold: 800,
      },
    },
  },
  plugins: [require("daisyui")],
};
