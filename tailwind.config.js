/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Lemonada', 'Arial', 'sans-serif'],
    }
  },

  vaiants: {
    borderWidth: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}

