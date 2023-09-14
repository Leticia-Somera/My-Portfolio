/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        // blue: "#5E10D9",
        // red: "#F30795",
        // yellow: "#FDCC49",
        grey: "#ededed",
        "deep-blue": "#010026",
        "soft-blue": "#8853DF",        
        "grad-blue": "rgba(1, 0, 38,0.5)",
        "dark-grey": "#757575", 
        "opaque-black": "rgba(0,0,0,0.35)",        
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow": 
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.54%, #FFBA00 78.07%, #FDCC49 85%)",
        "gradient-rainblue": 
          "linear-gradient(90deg, #24CBFF 14.531%, #FC59FF 69.36%, #FFBD0C 117.73%)"
          // "linear-gradient(90deg, #0518C1 12%, #5E10D9 30%, #F30795 89.9%, #FDCC49 99.9%)"

      }),
      fontFamily: {
        playfair: ["Pontano Sans", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"]
      },
      content: {
       brush: "url('./assets/brush.png')", 
       person1: "url('./assets/rad2.png')",
       person2: "url('./assets/person2.png')",
       person3: "url('./assets/person3.png')",
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}

