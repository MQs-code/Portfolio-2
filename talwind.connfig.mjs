/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Aap apni marzi ke naam rakh sakte hain
        sans: ["var(--font-outfit)", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
        bungee: ["var(--font-bungee)", "cursive"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        ubuntu: ["var(--font-ubuntu)", "sans-serif"],
      },
    },
    
  },
  plugins: [],
};

export default config;