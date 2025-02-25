import type {Config} from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBrown: "#732900",
        textColor: "#0E0E0C",
        textTertiaryColor: "#5A3B00",
        secondary:"#8B8271",
        inputColor:"#F6F3F1",
        successful:"#009D15",
        industryColor:"#EBDFD6",
        error:"#C20202",
        buttonDisabledColor:"#EABCA2",
        buttonHoverColor:"#5B2100",



      },
      fontFamily: {
        custom: [
          'Suisse Intl', 'sans-serif',
        ],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
