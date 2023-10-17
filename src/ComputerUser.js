const { Random } = require('./Constant');

const ComputerUser = {
  setComputerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  },
};

module.exports = ComputerUser;
