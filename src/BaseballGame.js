const ComputerUser = require('./ComputerUser');
const InputView = require('./View/InputView');
const OutputView = require('./View/OutputView');

class BaseballGame {
  #computerNumbers;
  #userNumbers;

  constructor() {
    this.#computerNumbers = [];
    this.#userNumbers = [];
  }

  start() {
    this.#computerNumbers = ComputerUser.setComputerNumber();
  }

  setUserNumber(numbers) {
    this.#userNumbers = numbers;
  }
}

module.exports = BaseballGame;
