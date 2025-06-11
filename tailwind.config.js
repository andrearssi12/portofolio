import { heroui } from "@heroui/theme";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(button|card|image|link|navbar|spinner|tabs|ripple).js"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: 'var(--navy-900)',
          800: 'var(--navy-800)',
          700: 'var(--navy-700)',
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              50: '#eef4ff',
              100: '#d9e7ff',
              200: '#bcd4ff',
              300: '#8eb8ff',
              400: '#5b93ff',
              500: '#3674ff',
              600: '#1b4dff',
              700: '#1339ff',
              800: '#1730d1',
              900: '#1b2fa6',
              DEFAULT: '#3674ff',
            },
          },
        },
        dark: {
          colors: {
            primary: {
              50: '#eef4ff',
              100: '#d9e7ff',
              200: '#bcd4ff',
              300: '#8eb8ff',
              400: '#5b93ff',
              500: '#3674ff',
              600: '#1b4dff',
              700: '#1339ff',
              800: '#1730d1',
              900: '#1b2fa6',
              DEFAULT: '#3674ff',
            },
          },
        },
      },
    }),
  ],
};
