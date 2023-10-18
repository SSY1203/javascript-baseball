const BaseballGame = require('./Controller/BaseballGame');
const game = new BaseballGame();
const Computer = require('./Model/Computer');
const computerNumbers = new Computer();
const InputView = require('./View/InputView');
const OutputView = require('./View/OutputView');

class App {
  play() {
    game.start();
    // console.log(computerNumbers.resetComputerNumbers());
  }
}

module.exports = App;
