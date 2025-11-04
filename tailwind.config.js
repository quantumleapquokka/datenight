/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
        colors: {
            'sky-magenta': '#e574bcff',
            'persian-pink': '#ea84c9ff',
            'plum-web': '#ef94d5ff',
            'plum-web-2': '#f9b4edff',
            'mauve': '#eabaf6ff',
            'mauve-2': '#dabfffff',
            'periwinkle': '#c4c7ffff',
            'jordy-blue': '#adcfffff',
            'light-sky-blue': '#96d7ffff',
            'pale-azure': '#7fdeffff',
        },
    },
  },
  plugins: [],
}

