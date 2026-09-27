import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Sampled directly from the Hotel De' Papi logo
        ink: {
          DEFAULT: "#1A3234", // deep bottle green from the logo badge
          soft: "#23403F",
        },
        sand: {
          DEFAULT: "#F5F1E8", // warm ivory background
          dim: "#EAE3D2",
        },
        gold: {
          DEFAULT: "#B97A4E", // deeper copper gold, for borders/badges
          bright: "#DD9970", // the exact peach-gold from the logo wordmark
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1320px",
      },
    },
  },
  plugins: [],
};

export default config;
