const Computer = require('../Model/Computer');
const computerModel = new Computer();

const Player = require('../Model/Player');
const playerModel = new Player();

const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');

const Validation = require('../Service/Validation');
const Compare = require('../Service/Compare');

const { Console } = require('../Constant');

class BaseballGame {
  start() {
    OutputView.printStart();
    computerModel.setComputerNumbers();
    this.readPlayerNumbers();
  }

  readPlayerNumbers() {
    playerModel.setPlayerNumbers(InputView.getPlayerNumbers());
    Validation.userNumbersIsValid(playerModel.playerNumbers);
    this.compare();
  }

  compare() {
    const score =
      playerModel.playerNumbers &&
      Compare.compareNumbers(computerModel.computerNumbers, playerModel.playerNumbers);
    playerModel.setScore(score);

    OutputView.printScore(playerModel.score);

    if (playerModel.score.strike !== 3) {
      this.fail();
    } else {
      this.success();
    }
  }

  success() {
    OutputView.printEnd();
    playerModel.resetPlayer();
    const result = InputView.getRestartOrEndStatus();
    if (Number(result) === 1) {
      this.retry();
    }
    if (Number(result) === 2) {
      this.end();
    }
  }

  fail() {
    this.readPlayerNumbers();
  }

  retry() {
    computerModel.resetComputerNumbers();
    playerModel.resetPlayer();
    this.start();
  }

  end() {
    Console.close();
  }
}

module.exports = BaseballGame;
