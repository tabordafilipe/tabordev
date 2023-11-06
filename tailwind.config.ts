import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: ["class"],
  theme: {
    colors: {
      white: {
        DEFAULT: "#ffffff",
        25: "#d6dbdc",
        50: "#fafaf7",
      },
      black: {
        DEFAULT: "#000000",
        25: "#282828",
      },
      blue: {
        DEFAULT: "#2b3a57",
        25: "#2b3a57",
        50: "#0066a4",
      },
      green: {
        DEFAULT: "#aeb6b0",
        10: "#aeb9b0",
        25: "#aeb9b0",
        50: "#6b756c",
      },
      orange: {
        DEFAULT: "#fac898",
        25: "#fac898",
      },
    },
    extend: {
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
