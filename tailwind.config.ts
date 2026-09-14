import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0A0C0F",
          900: "#14171C",
          800: "#1D2128",
          700: "#2A2F38",
        },
        navy: {
          900: "#0D1A2B",
          800: "#13253D",
          700: "#1B3350",
        },
        emerald: {
          500: "#12A76C",
          400: "#22C48A",
          300: "#5FDBA8",
          950: "#062A1C",
        },
        paper: {
          DEFAULT: "#F4F2EC",
          muted: "#A9AEB6",
          faint: "#6E7480",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        container: "1240px",
      },
      borderRadius: {
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        "hero-in": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "hero-in": "hero-in 0.8s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
