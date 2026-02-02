/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"] ,
  theme: {
    extend: {
      colors: {
        ink: "#10121A",
        mist: "#EEF1F6",
        tide: "#DCE7F7",
        surf: "#E8F2FF",
        flare: "#FFB347",
        ocean: "#2F6FEB",
        pine: "#0B7A75"
      },
      fontFamily: {
        display: ["Bebas Neue", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 45px -25px rgba(16, 18, 26, 0.6)",
        card: "0 16px 34px -24px rgba(16, 18, 26, 0.7)"
      }
    }
  },
  plugins: []
};
