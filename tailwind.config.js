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
          '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30%' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'},
        },
        scroll_up: {
          to: {
            transform: 'translateY(calc(-50% - 1vmin))'
          }
        },
        scroll_down: {
          from: {
            transform: 'translateY(calc(-50% - 1vmin))'
          },
          to: {
            transform: 'translateY(0%)'
          }
        },
      },
      animation: {        
        scroll_up: 'scroll_up 60s linear infinite',
        scroll_down: 'scroll_down 60s linear infinite',
        blob: "blob 8s ease-in-out infinite",
      },
      plugins: [],
    }
  }
}