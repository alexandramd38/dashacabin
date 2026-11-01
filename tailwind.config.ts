import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#173B2B",
          dark: "#0F2A1F",
          light: "#2C5240",
        },
        cream: {
          DEFAULT: "#F5F1E8",
          dark: "#EDE6D6",
        },
        sage: "#8FAE94",
        gold: "#C9A96A",
        wood: "#8A6A4A",
        ink: "#1E2A23",
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
