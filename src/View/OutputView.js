const { Console, PLZ_NUMBER_INPUT, GAME_START_TEXT } = require('../Constant');

const OutputView = {
  printStart() {
    Console.print(GAME_START_TEXT);
  },
};

module.exports = OutputView;
