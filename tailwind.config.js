/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        animatedBeam: {
          "100%": { offsetDistance: "100%" },
          "slow-spin": "spin 8s linear infinite",
        },
        heroScroller: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-100%)",
          },
        },
        beamMask: {
          from: { x: "-100%" },
          to: { x: "100%" },
        },
        "brand-scroller": {
          from: {
            transform: "translateX(0%)",
          },
          to: {
            transform: "translateX(-55%)",
          },
        },
        "brand-scroller-vertical": {
          from: {
            transform: "translateY(0%)",
          },
          to: {
            transform: "translateY(-55%)",
          },
        },
        marquee: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        starScale: {
          "from, to": {
            transform: "rotate(0) scale(0)",
            opacity: 0,
          },

          "50%": {
            transform: "rotate(180deg) scale(1)",
            opacity: 1,
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
      animation: {
        heroScroller: "heroScroller 170s linear infinite",
        animatedBeam: "animatedBeam 7s linear infinite",
        beamMask: "beamMask 1s linear infinite",
        brandScroller: "brand-scroller 30s linear infinite",
        brandScrollerVertical: "brand-scroller-vertical 30s linear infinite",
        marquee: "marquee 30s linear infinite",
        starScale: "starScale 800ms ease infinite",
        meteor: "meteor 0.2s linear infinite",
      },
      boxShadow: {
        "glow-white": "0 0 10px rgba(255, 255, 255, 0.5)",
        "glow-blue": "0 0 10px rgba(59, 130, 246, 0.5)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        xsm: "0.6rem",
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
  },
  plugins: [],
};
