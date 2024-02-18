/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
        Montserrat: "Montserrat",
      },
      backgroundImage: {
        bgQuranRegister: "url('./assets/bgRegister.jpg')",
      },
    },
  },
  plugins: [],
};
