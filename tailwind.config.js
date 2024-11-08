/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme'

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add custom font variables for Tailwind usage
        'geist-mono': ['var(--font-geist-mono)', ...fontFamily.mono],
        'geist-sans': ['var(--font-geist-sans)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
