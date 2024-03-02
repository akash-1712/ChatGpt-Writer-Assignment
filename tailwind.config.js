/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ["./**/*.{ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      animation: {
        dotPulse: "dotPulse 1s ease-in-out infinite"
      },
      keyframes: {
        dotPulse: {
          "0%": {
            transform: "translateY(0)"
          },
          "50%": {
            transform: "translateY(-50%)"
          },
          "100%": {
            transform: "translateY(0)"
          }
        }
      }
    }
  }
}
// tailwind.config.js
