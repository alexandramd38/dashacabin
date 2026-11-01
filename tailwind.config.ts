import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#242725", // charcoal
          dark: "#101211", // near black
          light: "#3A3D3A",
        },
        cream: {
          DEFAULT: "#F2EEE7", // warm ivory
          dark: "#242725", // charcoal (section alternation)
        },
        sage: "#A8794E",
        gold: "#D5C6AE", // champagne
        wood: "#A8794E",
        ink: "#F2EEE7", // ivory text on dark bg
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};

export default config;
