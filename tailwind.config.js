/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", "Helvetica", "Arial"],
    },
    extend: {
      colors: {
        gray: colors.slate,
        primary: colors.blue
      },
      width: {
        4.5: "1.125rem",
      },
      minWidth: {
        4.5: "1.125rem",
        9: "2.25rem",
        16: "4rem",
        24: "6rem",
        32: "8rem",
      },
      minHeight: {
        4.5: "1.125rem",
        9: "2.25rem",
      },
      maxWidth: {
        4.5: "1.125rem",
      },
      maxHeight: {
        4.5: "1.125rem",
        32: "8rem",
        48: "12rem",
        72: "18rem",
      },
      screens: {
        "2lg": "1152px",
        "3xl": "1440px",
        "4xl": "1600px",
        "5xl": "1800px",
        "6xl": "1920px",
        "7xl": "2048px",
      },
      zIndex: {
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
        110: 110,
        overlay: 200,
        modal: 300,
      },
      borderWidth: {
        3: "3px",
      },
      strokeWidth: {
        2: "2px",
        3: "3px",
        4: "4px",
      },
      flex: {
        2: "2 2 0%",
        4: "4 4 0%",
        8: "8 8 0%",
        16: "16 16 0%",
      },
      flexGrow: {
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
      gridColumn: {
        "span-16": "span 16 / span 16",
        "span-14": "span 14 / span 14",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",
        20: "repeat(20, minmax(0, 1fr))",
        32: "repeat(32, minmax(0, 1fr))",
      },
      transitionDuration: {
        400: "400ms",
      },
      keyframes: {
        "tooltip-show-bottom": {
          "0%": { transform: "translate(-50%, -2px)", opacity: 0 },
          "100%": { transform: "translate(-50%, 0)", opacity: 1 },
        },
        "tooltip-hide-bottom": {
          "0%": { transform: "translate(-50%, 0)", opacity: 1 },
          "100%": { transform: "translate(-50%, -2px)", opacity: 0 },
        },
        "tooltip-show-left": {
          "0%": { transform: "translate(calc(-100% + 2px), -50%)", opacity: 0 },
          "100%": { transform: "translate(-100%, -50%)", opacity: 1 },
        },

        "tooltip-hide-left": {
          "0%": { transform: "translate(-100%, -50%)", opacity: 1 },
          "100%": {
            transform: "translate(calc(-100% + 2px), -50%)",
            opacity: 0,
          },
        },

        "menu-button-line1-show": {
          "0%": {
            "transform-origin": "8px 8px",
            transform: "translate(0, 0) rotate(45deg)",
          },
          "50%": {
            "transform-origin": "8px 8px",
            transform: "translate(0, 0) rotate(0)",
          },
          "100%": {
            "transform-origin": "8px 8px",
            transform: "translate(0, -3px) ",
          },
        },

        "menu-button-line1-hide": {
          "100%": {
            "transform-origin": "8px 8px",
            transform: "translate(0, 0) rotate(45deg)",
          },
          "50%": {
            "transform-origin": "8px 8px",
            transform: "translate(0, 0) rotate(0)",
          },
          "0%": {
            "transform-origin": "8px 8px",
            transform: "translate(0, -3px) ",
          },
        },

        "menu-button-line2-show": {
          "0%": {
            "transform-origin": "8px 8px",
            transform: "translate(0, 0) rotate(-45deg)",
          },
          "50%": {
            "transform-origin": "8px 8px",
            transform: "translate(0, 0) rotate(0)",
          },
          "100%": {
            "transform-origin": "8px 8px",
            transform: "translate(0, 3px) ",
          },
        },

        "menu-button-line2-hide": {
          "100%": {
            "transform-origin": "8px 8px",
            transform: "translate(0, 0) rotate(-45deg)",
          },
          "50%": {
            "transform-origin": "8px 8px",
            transform: "translate(0, 0) rotate(0)",
          },
          "0%": {
            "transform-origin": "8px 8px",
            transform: "translate(0, 3px) ",
          },
        },

        "fade-in": {
          "0%": { opacity: 0 },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        "tooltip-show-bottom": "tooltip-show-bottom 300ms ease-in-out",
        "tooltip-hide-bottom": "tooltip-hide-bottom 300ms ease-in-out",
        "tooltip-show-left": "tooltip-show-left 300ms ease-in-out",
        "tooltip-hide-left": "tooltip-hide-left 300ms ease-in-out",
        "menu-button-line1-show": "menu-button-line1-show 500ms ease-in-out",
        "menu-button-line2-show": "menu-button-line2-show 500ms ease-in-out",
        "menu-button-line1-hide": "menu-button-line1-hide 500ms ease-in-out",
        "menu-button-line2-hide": "menu-button-line2-hide 500ms ease-in-out",
        "fade-in": "fade-in 500ms ease-in-out",
      },
      ringWidth: {
        3:'3px'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
