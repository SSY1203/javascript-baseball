const { ERROR_TEXT, THREE } = require('../Constant');

const Validation = {
  userNumbersIsValid(numbers) {
    const repeatInput = [...new Set(numbers)];
    console.log(numbers);
    if (
      numbers &&
      (numbers < 0 ||
        numbers.includes(0) ||
        isNaN(numbers) ||
        String(numbers).length !== THREE ||
        repeatInput.length !== THREE)
    ) {
      throw ERROR_TEXT;
    }
    return numbers;
  },
};

module.exports = Validation;
