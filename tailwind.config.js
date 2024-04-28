/** @type {import('tailwindcss').Config} */

/** There are a few colours that I would question the design team on for example
 * #000000 and #111111 being used randomly for certain areas when the difference
 * is non visible for majority of devices so to KISS I have stuck with one.
 */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#111111",
        greyLight: "#E5E5E5",
        greyMedium: "#929292",
        greyDark: "#757272",
        greyBorder: "#7D7D7D",
        greyBackground: "#F0F0F0",
        greyHover: "#C8C8C8",
        transparent: "transparent",
        transparentBlack50: "rgba(17, 17, 17, 0.5)",
        transparentBlack20: "rgba(17, 17, 17, 0.2)",
        transparentWhite20: "rgba(255, 255, 255, 0.2)",
        transparentWhite30: "rgba(255, 255, 255, 0.3)",
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
