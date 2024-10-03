import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#50C850",
        secondary: "#D9D9D9",
        shelfColor: "#eae3d5",
        shelfTextColor: "#06717B",
        "background/white": "#f5f6fb",
        description: "#666666",
        danger: "#eb1616",
      },
      screens: {
        ow: "0px",
        xs: "480px",
        "2xl": "1600px",
      },
      fontSize: {
        "4.5xl": "2.625rem",
        "5.5xl": "3.375rem",
      },
      keyframes: {
        flip: {
          from: {
            transform: "perspective(2000px) rotateY(0deg)",
            "backface-visibility": "hidden",
          },

          to: {
            transform: "perspective(2000px) rotateY(-180deg)",
            // visibility: "hidden",
          },
        },
      },
      fontFamily: {
        BMHANNAAir: ["BMHANNAAir"],
        NanumSquareneo: ["NanumSquareNeo-Variable"],
      },
      animation: {
        flip: "flip 1s ease-in-out forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
};
export default config;
