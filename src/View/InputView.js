const { Console, PLZ_NUMBER_INPUT, GAME_RESTART } = require('../Constant');

const InputView = {
  getUserNumbers() {
    Console.readLine(PLZ_NUMBER_INPUT, numbers => {
      console.log(numbers.split(''));
      return numbers.split('');
    });
  },

  getRestartOrEndStatus() {
    Console.readLine(GAME_RESTART, answer => {
      return answer;
    });
  },
};

module.exports = InputView;
