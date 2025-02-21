/** @type {import('tailwindcss').Config} */
export default {
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
        'brand-primary': "#942c2c",
        'brand-primary-dark': "#3d0d0d",
        'brand-secondary': "#000",
        'brand-secondary-light': "#1c1c1c",
        'brand-background': "#f5f5dc"
      },
      fontFamily: {
        'Astronika': ["Astronika", "ui-sans-serif", "system-ui", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
};
