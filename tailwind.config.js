module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1024px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        bluegray_50: "#eaecf0",
        red_600: "#e7332b",
        gray_900: "#0f1728",
        light_blue_A200: "#36c5f0",
        bluegray_100: "#cfd4dc",
        teal_400: "#2eb67d",
        gray_900_0c: "#1018280c",
        yellow_800: "#ecb22e",
        black_900: "#000000",
        bluegray_500: "#667084",
        bluegray_300: "#98a1b2",
        pink_600: "#e01e5a",
        white_A700: "#ffffff",
      },
      borderRadius: { radius8: "8px", radius10: "10px", radius50: "50%" },
      fontFamily: { inter: "Inter" },
      boxShadow: { bs: "0px 1px  2px 0px #1018280c" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
