import { heroui } from "@heroui/theme";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(button|link|navbar|spinner|ripple).js"
  ],
  theme: {
    extend: {},
  },
  plugins: [heroui()],
};
