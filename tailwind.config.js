/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { borderRadius: '56% 44% 49% 51% / 50% 50% 50% 50%' },
          '25%': { borderRadius: '61% 39% 33% 67% / 41% 77% 23% 59%  ' },
          '50%': { borderRadius: '63% 37% 57% 43% / 38% 42% 58% 62%' },
          '75%' : { borderRadius: '34% 66% 33% 67% / 60% 33% 67% 40%'},
          '100%': { borderRadius: '56% 44% 49% 51% / 50% 50% 50% 50%'},
        },
      },
      animation: {
        blob: "blob 7s alternate infinite",
      },
      plugins: [],
    }
  }
}