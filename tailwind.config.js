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
        },
        beamMask: {
          from: { x: "-100%" },
          to: { x: "100%" },
        },
      },
      animation: {
        animatedBeam: "animatedBeam 7s linear infinite",
        beamMask: "beamMask 1s linear infinite",
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
