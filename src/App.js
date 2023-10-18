const InputView = require('./View/InputView');
const OutputView = require('./View/OutputView');
class App {
  play() {
    this.gameStart();
  }

  gameStart() {
    OutputView.printStart();
    InputView.getUserNumbers();
  }
}

module.exports = App;
