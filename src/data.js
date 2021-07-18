const { v4: uuidv4 } = require("uuid");
const data = {
  games: [
    {
      _id: uuidv4(),
      name: "Lights-out",
      image: "/images/light.jpg",
      instruction: [
        "The board has 25 lights, some are on, and some are off.",
        "Clicking a light will toggle it (on to off, and off to on).",
        "It will also toggle the 4 lights around it(left, right, above and below).",
        "To solve the puzzle, you have to turn off the lights on the board.",
      ],
    },

    {
      _id: uuidv4(),
      name: "Hangman",
      image: "/images/hangman.png",
      instruction: [
        "You will see a number of short lines together that represent the number of letters in the word you have to guess. (e.g. _ _ _ _ _ _ _ ).",
        "In a box about these lines you will see some letters. Click on the letter that you think is included in the word.",
        "If you guess the correct letter, that letter will appear in the appropriate position in the word. It will replace one of the little lines (e.g. _ _ A _ _ _ _ ).",
        "If the letter you guessed is not in the word, a part of the body will appear in the diagram on the left. If the body becomes completed, you are 'hanged' which means you have lost.",
        "If you guess all the letters in the word before you are 'hanged', you win.",
      ],
    },

    {
      _id: uuidv4(),
      name: "Yahtzee",
      image: "/images/yahtzee.png",
      instruction: [
        "A game is played over 13 rounds.",
        "Each round, the player rolls five 6-sided dice.",
        "The player may click on any number of dice to “freeze” or “unfreeze” them",
        "The player may re-roll the unfrozen dice up to 2 times.",
        "Each round, the player must assign their dice to any unclaimed scoring category. Each category scores differently.",
        "After 13 rounds, the game is over, and the player’s score is the total of each scoring category.",
      ],
    },
  ],
};
export default data;
