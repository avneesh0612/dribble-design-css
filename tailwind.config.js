module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary_purple: "#D5B1FC",
      },
      backgroundImage: {
        purpleGradient:
          "url('https://res.cloudinary.com/dssvrf9oz/image/upload/v1622694429/Screenshot_2021-06-03_095652_jiinb2.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
