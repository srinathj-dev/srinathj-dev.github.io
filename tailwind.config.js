const { transform } = require('sucrase');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        mona: "'Mona Sans', sans-serif;",
        robo: "'Roboto', sans-serif;"
      },
    
      colors: {
      'myYellow':'#FFD43B',
      'myblue':'#050E3C',
      },
      keyframes: {
        wiggle : {
          "0%, 100%": { transform: "rotate(0deg)"},
          "25%": {transform: "rotate(-9deg)"},
          "75%": {transform: "rotate(9deg)"},
        },
        beat :{
          "0%, 100%": { transform: "scale(1)"},
          "50%" : { transform: "scale(1.2)"},
        },
      },
      animation:{
        wiggle: "wiggle 1s linear infinite",
      
        beat: "beat 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

