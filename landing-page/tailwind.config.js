/** @type {import('tailwindcss').Config} */
import tailwindcssFilters from "tailwindcss-filters";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        bounce: "bounce 2s infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
      spacing: {
        50: "12.5rem",
      },
    },
  },
  plugins: [tailwindcssFilters],
};

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       // Add custom animations
//       animation: {
//         blob: "blob 7s infinite",
//         bounce: "bounce 2s infinite",
//       },
//       keyframes: {
//         blob: {
//           "0%": { transform: "translate(0px, 0px) scale(1)" },
//           "33%": { transform: "translate(30px, -50px) scale(1.1)" },
//           "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
//           "100%": { transform: "translate(0px, 0px) scale(1)" },
//         },
//       },
//       // Add custom spacing for the floating elements
//       spacing: {
//         50: "12.5rem", // For w-50 h-50 classes
//       },
//     },
//   },
//   plugins: [
//     // Add plugins for additional utilities
//     require("tailwindcss-filters"), // For filter and backdrop-filter utilities
//   ],
// };
