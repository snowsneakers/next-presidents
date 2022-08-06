/** @type {import('tailwindcss').Config} */
module.exports = {
     content: [
          "./pages/**/*.{js,ts,jsx,tsx}",
          "./components/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
          extend: {
               gridTemplateColumns: {
                    fluid: "repeat(auto-fit, minmax(200px, 1fr))",
               },
               screens: {
                    md: "880px",
               },
          },
     },
     plugins: [],
};
