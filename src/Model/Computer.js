const { Random } = require('../Constant');

class Computer {
  computerNumbers;

  constructor() {
    this.computerNumbers = [];
  }

  setComputerNumbers() {
    while (this.computerNumbers.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!this.computerNumbers.includes(number)) {
        this.computerNumbers.push(number);
      }
    }
    return this.computerNumbers;
  }

  resetComputerNumbers() {
    this.computerNumbers = [];
  }
}

module.exports = Computer;
