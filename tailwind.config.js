/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    transform: (content) => content.replace(/taos:/g, ""),
    files: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./src/**/*.{html,js}",
      "./node_modules/tw-elements/dist/js/**/*.js",
    ],
  },
  theme: {
    extend: {},
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [require("taos/plugin")],
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
};
