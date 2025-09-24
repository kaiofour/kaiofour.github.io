/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",          // if HTML is in root
    "./public/**/*.html",    // HTML in public folder
    "./src/**/*.{js,ts,jsx,tsx,html}" // all JS/TS/TSX/HTML in src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
