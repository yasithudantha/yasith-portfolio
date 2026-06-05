/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a0e27",
        secondary: "#1a1f3a",
        accent: "#00d4ff",
        'accent-pink': "#ff006e",
      },
      backdropBlur: {
        xs: "2px",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}