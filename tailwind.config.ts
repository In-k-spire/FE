import type { Config } from "tailwindcss";
export const colors = [
  "bg-[#F75C4F]",
  "bg-[#EC80AF]",
  "bg-[#82C0D0]",
  "bg-[#81C1F2]",
  "bg-[#A1D461]",
  "bg-[#F2693E]",
  "bg-[#5783C8]",
  "bg-[#FFB244]",
  "bg-[#80BFD2]",
  "bg-[#EFA047]",
  "bg-[#B8A2FE]",
  "bg-[#6DCC7A]",
  "bg-[#EB4D55]",
  "bg-[#F1D01B]",
  "bg-[#2467D2]",
];
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    { pattern: /border-/ },
    { pattern: /bg-/, variants: ["hover"] },
    { pattern: /h-/ },
    ...colors.map((color) => color),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#50C850",
        secondary: "#D9D9D9",
        "grayscale/10": "#F9F9F9",
        "grayscale/20": "#E9E9E9",
        "grayscale/30": " #CCCCCC",
        "grayscale/40": "#808080",
        shelfColor: "#eae3d5",
        shelfTextColor: "#06717B",
        "background/white": "#f5f6fb",
        description: "#666666",
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
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
