/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7ee',
          100: '#fdecd3',
          200: '#fbd5a5',
          300: '#f8b66d',
          400: '#f58c33',
          500: '#f26e0c',
          600: '#e35307',
          700: '#bc3c09',
          800: '#962f0e',
          900: '#79280f',
          950: '#411105',
        },
      },
    },
  },
  plugins: [],
}

