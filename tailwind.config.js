/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAF7F2",
        blush: "#EBC8D3",
        sage: "#9AA88F",
        gold: "#C8A26D",
        heading: "#54463E",
        muted: "#867B76",
      },
      fontFamily: {
        script: ["'Great Vibes'", "cursive"],
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Lora'", "serif"],
        ui: ["'Inter'", "sans-serif"],
      },
      maxWidth: {
        invite: "760px",
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(84, 70, 62, 0.18)",
        card: "0 4px 20px -6px rgba(84, 70, 62, 0.12)",
      },
      borderRadius: {
        arch: "999px 999px 12px 12px",
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.12)", opacity: "0.85" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(3deg)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "pulse-soft": "pulseSoft 3.5s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
        "float-slow": "floatSlow 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
