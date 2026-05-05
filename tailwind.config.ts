import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bark: {
          DEFAULT: "#593219",
          50: "#FBF7F3",
          100: "#F3E9DE",
          200: "#E2CDB6",
          300: "#C9A782",
          400: "#A77B53",
          500: "#7E5630",
          600: "#593219",
          700: "#432513",
          800: "#2E190D",
          900: "#1B0E07",
        },
        cream: "#FBF7F3",
        ink: "#1B0E07",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Palatino", "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
