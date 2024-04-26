// const {nextui} = require('@nextui-org/theme');
// /** @type {import('tailwindcss').Config} */
// export default {
//
  content: [
    "//     ./index.html",
    "//     ./src/**/*.{js,ts,jsx,tsx}",
    "//",
    "./node_modules/@nextui-org/theme/dist/components/(autocomplete|button|ripple|spinner|input|listbox|divider|popover|scroll-shadow).js"
  ],
//   theme: {
//     extend: {},
//   },
//   darkMode: "class",
//  plugins: [nextui()],
// }

// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
};
