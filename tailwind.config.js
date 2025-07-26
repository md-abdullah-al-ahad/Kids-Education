module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}

content: ["./index.html", "./src//*.{js,ts,jsx,tsx}"]

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'sans-serif'], // replaces default
      },
    },
  },
  plugins: [],
}