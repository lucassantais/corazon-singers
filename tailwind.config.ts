import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "cursive"],
      },
      colors: {
        coral: {
          50: "#fff1f0",
          100: "#ffe4e1",
          200: "#ffccc8",
          300: "#ffa49e",
          400: "#ff6b62",
          500: "#f7372a",
          600: "#e4190c",
          700: "#c00f08",
          800: "#9f120d",
          900: "#841511",
        },
        gold: {
          300: "#fde68a",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
        teal: {
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
        },
        violet: {
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
        },
        stage: {
          dark: "#0a0a1a",
          mid: "#12122a",
          light: "#1e1e40",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "stage-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(247,55,42,0.15), transparent)",
      },
      animation: {
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "float-mid": "floatMid 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marqueeReverse 35s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "bounce-gentle": "bounceGentle 2s ease-in-out infinite",
        "wave-1": "wave 4s ease-in-out infinite",
        "wave-2": "wave 4s ease-in-out infinite 0.5s",
        "wave-3": "wave 4s ease-in-out infinite 1s",
        "wave-4": "wave 4s ease-in-out infinite 1.5s",
        "wave-5": "wave 4s ease-in-out infinite 2s",
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        floatMid: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(247,55,42,0.4)" },
          "50%": {
            boxShadow:
              "0 0 60px rgba(247,55,42,0.8), 0 0 100px rgba(247,55,42,0.4)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        wave: {
          "0%, 100%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(0.3)" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(247, 55, 42, 0.5)",
        "glow-gold": "0 0 40px rgba(251, 191, 36, 0.5)",
        "glow-teal": "0 0 40px rgba(20, 184, 166, 0.5)",
        "glow-violet": "0 0 40px rgba(139, 92, 246, 0.5)",
        stage: "0 25px 80px rgba(0,0,0,0.8)",
      },
    },
  },
  plugins: [],
};

export default config;
