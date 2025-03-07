/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./routes/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      xxl: { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "474px" },
      // => @media (max-width: 474px) { ... }
    },
    extend: {
      colors: {
        live_green: "#4FDC29",
        faint_bg_gray: "#29292E",
      },
      keyframes: {
        "appear-text-left": {
          "0%": {
            transform: "translateX(-1000px);",
          },
          "100%": {
            transform: "translateX(0px);",
          },
        },
        "appear-text-right": {
          "0%": {
            transform: "translateX(1000px);",
          },
          "100%": {
            transform: "translateX(0px);",
          },
        },
      },
      animation: {
        "appear-text-left": "appear-text-left 3s ease-in-out",
        "appear-text-right": "appear-text-right 3s ease-in-out",
      },
    },
  },
  plugins: [],
};
