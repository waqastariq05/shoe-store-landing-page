/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: "#dce6ff",
        white: "#fff",
        deeppink: "#e60369",
        black: "#000",
        gainsboro: "rgba(217, 217, 217, 0)",
        darkslategray: "#444",
        darkgray: "#acacac",
        rosybrown: "rgba(201, 142, 142, 0)",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        montserrat: "Montserrat",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      "29xl": "48px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

