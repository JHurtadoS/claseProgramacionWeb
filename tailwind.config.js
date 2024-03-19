/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      marcellus: ["Marcellus", "sans-serif"],
    },
    extend: {
      colors: {
        cyan: "#50d4ec",
        black: "#383434",
        grey: "#b2b3b3",
        neutralBlue: "#337ab7",
        neutralBlue2:"#306ca4",
        rose: "#9c2759",
        greenNeutal: "#157a8a",
        darkBlue:"#103c64"

      },
    },
  },
  plugins: [],
};
