/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "24px",
    },
    extend: {
      colors: {
        "charcoal-gray": "hsl(235, 18%, 26%)",
        "dark-grey-slate": "hsl(234, 29%, 20%)",
        "my-grey": "hsl(231, 7%, 80%)",
        tomato: "hsl(4, 100%, 67%)",
      },
      content: {
        bullet: 'url("/images/icon-success.svg")',
      },
      fontFamily: {
        roboto: ["--font-roboto"],
      },
    },
  },
  plugins: [],
}
