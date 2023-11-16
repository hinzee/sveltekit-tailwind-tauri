/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'white-1': '#f7f7f4',
        'dark-1': '#202020',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}