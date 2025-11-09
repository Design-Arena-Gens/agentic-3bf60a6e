import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0b1021",
        pool: "#2a9d8f",
        sand: "#f4f1de",
        coral: "#e76f51"
      },
      fontFamily: {
        display: ["'Inter'", "system-ui", "sans-serif"],
        reading: ["'Source Serif Pro'", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
