import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        background: "#e6eaee",
        backgroundDark: "#1c1c1c",
        main: "#55e6a5",
        mainDark: "#c8f31d",
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
