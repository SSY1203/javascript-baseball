const { Console, PLZ_NUMBER_INPUT, GAME_RESTART } = require('../Constant');
const Player = require('../Model/Player');
const playerModel = new Player();

const InputView = {
  getPlayerNumbers() {
    let input;
    Console.readLine(PLZ_NUMBER_INPUT, numbers => {
      input = numbers.split('');
    });
    return input;
  },

  getRestartOrEndStatus() {
    let result;
    Console.readLine(GAME_RESTART, answer => {
      result = answer;
    });
    return result;
  },
};

module.exports = InputView;
