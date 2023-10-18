const Player = require('../Model/Player');
const playerModel = new Player();

const Compare = {
  compareNumbers(computer, player) {
    playerModel.setScore({ ball: 0, strike: 0 });
    player.map((item, index) => {
      if (computer[index] === Number(item)) {
        playerModel.increaseStrike();
      } else if (computer.includes(Number(item))) {
        playerModel.increaseBall();
      }
    });
    return playerModel.score;
  },
};

module.exports = Compare;
