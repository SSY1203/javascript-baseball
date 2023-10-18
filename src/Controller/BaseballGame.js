const Computer = require('../Model/Computer');
const computer = new Computer();
const Player = require('../Model/Player');
const player = new Player();
const InputView = require('../View/InputView');
const OutputView = require('../View/OutputView');
const Validation = require('../Service/Validation');

class BaseballGame {
  computerNumbers;
  playerNumbers;

  constructor() {
    this.computerNumbers = [];
    this.playerNumbers = [];
  }

  start() {
    OutputView.printStart();
    this.computerNumbers = computer.setComputerNumbers();
    this.playerNumbers = Validation.userNumbersIsValid(InputView.getUserNumbers());
    console.log(this.playerNumbers);
    this.getPlayer(this.playerNumbers);
  }
}

module.exports = BaseballGame;
