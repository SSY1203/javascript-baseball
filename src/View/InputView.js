const { Console, PLZ_NUMBER_INPUT, GAME_RESTART } = require('../Constant');

const InputView = {
  getUserNumbers() {
    let userNumbers;
    Console.readLine(PLZ_NUMBER_INPUT, numbers => {
      userNumbers = numbers.split('');
    });
    return userNumbers;
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
