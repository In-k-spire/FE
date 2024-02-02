import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    colors: {
      primary: "#50C850",
      secondary: "#D9D9D9",
      "grayscale/10": "#F9F9F9",
      "grayscale/20": "#E9E9E9",
      white: "#fff",
      black: "#000",
      "background/white": "#f5f6fb",
      description: "#666666",
    },
    extend: {
      keyframes : {
        flip : {
          from : {
            transform : "perspective(1000px) rotateY(0deg)",
            
          },
          
          to :  {
            transform : "perspective(1000px) rotateY(-180deg)"  
          }
        }
      },
      animation : {
        flip : "flip 2s"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
