const BaseballGame = require('./BaseballGame');
const game = new BaseballGame();
class App {
  play() {
    game.start();
  }
}

module.exports = App;
