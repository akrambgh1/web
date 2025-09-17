export const darkMode = "class";
export const content = [
  "./src/**/*.{js,ts,jsx,tsx}",
  "./public/index.html",
];
export const theme = {
  extend: {
    keyframes: {
      scroll: {
        "0%": { transform: "translateY(0)" },
        "100%": { transform: "translateY(-50%)" }, // move up one copy
      },
    },
    animation: {
      scroll: "scroll 10s linear infinite",
    },
  },
};
export const plugins = [];