/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors:{
        "san-juan": "#375075",
        "mirage-opaque":" #151922",
        "mirage-transparent": "#15192281",
        "pink-swan": "#c5b7bc",
        "lynch": "#6b7ca3",
        "cloud-burst": "#21365582",
        "bali-hai": "#859cb1",
        "kabul": "#604a44",
        "cape-cod": "#393c3b",
        "goblin": "#39792f",
      }
    },
  },
  plugins: [],
};
