const ComputerUser = require('./ComputerUser');

class BaseballGame {
  #computerNumber;

  constructor() {
    this.#computerNumber = [];
  }

  start() {
    this.#computerNumber = ComputerUser.setComputerNumber();
    console.log(this.#computerNumber);
  }
}

module.exports = BaseballGame;
