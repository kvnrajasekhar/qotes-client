/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          bg: { primary: "#F5EFE6", secondary: "#E8DFCA" },
          accent: { primary: "#6D94C5", secondary: "#CBDCEB" },
          text: { primary: "#1A1815", secondary: "#707070" },
        },
        dark: {
          bg: { primary: "#1A1815", secondary: "#2A2620" },
          accent: { primary: "#3D5A7A", secondary: "#1B3A52" },
          text: { primary: "#F0F0F0", secondary: "#B0B0B0" },
        },
      },
    },
  },
  plugins: [],
}