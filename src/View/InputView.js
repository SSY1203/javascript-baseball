const { Console, PLZ_NUMBER_INPUT } = require('../Constant');
const BaseballGame = require('../BaseballGame');
const game = new BaseballGame();

const InputView = {
  getUserNumbers() {
    Console.readLine(PLZ_NUMBER_INPUT, numbers => {
      const userNumbers = numbers.split('');
      game.setUserNumber(userNumbers);
    });
  },
};

module.exports = InputView;
