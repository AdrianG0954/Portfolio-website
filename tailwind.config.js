/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        lightMode: "#E1F2FB",
        navBarLight: "#c7eafc",
        "lightMode-100": "#7dcef8",
        // DAF1FD (MAYBE)
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        // dark gray
        "gray-100": "#212121",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "meme-pattern": "url('/src/assets/thickline.svg')",
      },
    },
  },
  plugins: [],
};
