/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canopy: {
          900: "#0F3D24",
          700: "#186B3D",
          500: "#1E7C46",
          100: "#E6F2EB",
        },
        gold: {
          DEFAULT: "#D9962E",
          600: "#C9862B",
        },
        ink: "#1A1A1A",
      },
    },
  },
  plugins: [],
}
