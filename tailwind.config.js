/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fff",
        primary: "#000",
        secondary: "#305931",
      },

      fontFamily: {
        poppins: "Poppins",
        lexend: "Lexend",
        playfair: "Playfair Display",
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
