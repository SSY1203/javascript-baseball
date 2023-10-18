const { ERROR_TEXT, THREE } = require('../Constant');
const Player = require('../Model/Player');
const playerModel = new Player();

const Validation = {
  userNumbersIsValid(numbers) {
    const number = Number(numbers.join(''));
    const repeatInput = [...new Set(numbers)];
    if (
      numbers &&
      (number < 0 ||
        numbers.includes(0) ||
        isNaN(number) ||
        String(number).length !== THREE ||
        repeatInput.length !== THREE)
    ) {
      throw ERROR_TEXT;
    }
  },
};

module.exports = Validation;
