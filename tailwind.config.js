/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Alata: "'Alata', sans-serif;",
        Josefin: "'Josefin Sans', sans-serif",
      },
      backgroundImage: {
        heroMobile: "url('./images/mobile/image-hero.jpg')",
        heroDesktop: "url('./images/desktop/image-hero.jpg')",
        interactiveMobile: "url('./images/mobile/image-interactive.jpg')",
        interactiveDesktop: "url('./images/desktop/image-interactive.jpg')",
        gridMobile: "url('./images/mobile/image-grid.jpg')",
        gridDesktop: "url('./images/desktop/image-grid.jpg')",
        deepMobile:
          "linear-gradient( to right,rgba(0,0,0,0.66) 20%,rgba(0,0,0,0)),url('./images/mobile/image-deep-earth.jpg')",
        deepDesktop:
          "linear-gradient( to right,rgba(0,0,0,0.66) 20%,rgba(0,0,0,0)),url('./images/desktop/image-deep-earth.jpg')",
        nightMobile:
          "linear-gradient( to right,rgba(0,0,0,0.66) 20%,rgba(0,0,0,0)),url('./images/mobile/image-night-arcade.jpg')",
        nightDesktop:
          "linear-gradient( to right,rgba(0,0,0,0.66) 20%,rgba(0,0,0,0)),url('./images/desktop/image-night-arcade.jpg')",
        soccerMobile:
          "linear-gradient( to right,rgba(0,0,0,0.66) 20%,rgba(0,0,0,0)),url('./images/mobile/image-soccer-team.jpg')",
        soccerDesktop:
          "linear-gradient( to right,rgba(0,0,0,0.66) 20%,rgba(0,0,0,0)),url('./images/desktop/image-soccer-team.jpg')",
        curiosityMobile:
          "linear-gradient( to right,rgba(0,0,0,0.66) 20%,rgba(0,0,0,0)),url('./images/mobile/image-curiosity.jpg')",
        curiosityDesktop:
          "linear-gradient( to right,rgba(0,0,0,0.66) 20%,rgba(0,0,0,0)),url('./images/desktop/image-curiosity.jpg')",
        fishMobile:
          "linear-gradient( to right,rgba(0,0,0,0.66) 20%,rgba(0,0,0,0)),url('./images/mobile/image-fisheye.jpg')",
        fishDesktop:
          "linear-gradient( to right,rgba(0,0,0,0.66) 20%,rgba(0,0,0,0)),url('./images/desktop/image-fisheye.jpg')",
        pocketMobile:
          "linear-gradient( to right,rgba(0,0,0,0.66) 20%,rgba(0,0,0,0)),url('./images/mobile/image-pocket-borealis.jpg')",
        pocketDesktop:
          "linear-gradient( to right,rgba(0,0,0,0.66) 20%,rgba(0,0,0,0)),url('./images/mobile/image-pocket-borealis.jpg')",
        fromUpMobile:
          "linear-gradient( to right,rgba(0,0,0,0.66) 20%,rgba(0,0,0,0)),url('./images/mobile/image-from-above.jpg')",
        fromUpDesktop:
          "linear-gradient( to right,rgba(0,0,0,0.66) 20%,rgba(0,0,0,0)),url('./images/desktop/image-from-above.jpg')",
      },
    },
  },
  plugins: [],
};
