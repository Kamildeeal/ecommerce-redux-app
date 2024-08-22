import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "climate-crisis": ['"Climate Crisis"', "cursive"],
        basker: ["Baskervville SC", "serif"],
        roboto: ["Roboto", "sans-serif"],
        moderustic: ["Moderustic", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "860px",
        lg: "1024px",
        xl: "1440px",
      },
    },
    boxShadow: {
      "bottom-only": "0 2px 4px -1px rgba(0, 0, 0, 0.4)",
    },
    maxHeight: {
      "0": "0",
      "250": "250px",
      screen: "1000px", // Możesz dostosować tę wartość
    },
    transitionProperty: {
      "max-height": "max-height",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
