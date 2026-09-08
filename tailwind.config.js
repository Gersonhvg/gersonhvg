/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
            fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        code: ["var(--font-code)"],
      },
    },
  },
  plugins: [

  ],
}