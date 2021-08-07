module.exports = {
  mode: "",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
      colors: {
        primary: "#06202A",
      },
    },
  },
  variants: {
    extend: {
      animation: ["group-hover"],
      textColor: ["active"],
      fontWeight: ["group-hover"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
