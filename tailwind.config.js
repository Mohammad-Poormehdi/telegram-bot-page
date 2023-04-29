/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{'md':'900px'},
      colors:{
        'navy':'#0F1682',
        'neon-green':'#07F36B',
        'neon-cyan':'#1FFDD2',
      },
    },
  },
  plugins: [],
};
