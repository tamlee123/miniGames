const { v4: uuidv4 } = require("uuid");
const data = {
  games: [
    {
      _id: uuidv4(),
      name: "LightsOut",
      image: "/images/light.jpg",
      description:
        "Lights Out! is a casual puzzle game with a simple goal: Turn off all the lights in a grid.",
    },

    {
      _id: uuidv4(),
      name: "Hangman",
      image: "/images/hangman.png",
      description:
        "A guessing game where the player attempts to build a missing word by guessing one letter at a time.",
    },

    {
      _id: uuidv4(),
      name: "Yahtzee",
      image: "/images/yahtzee.png",
      description:
        "On each turn, roll the dice up to 3 times to get the highest scoring combination for one of 13 categories.",
    },
  ],
};
export default data;
