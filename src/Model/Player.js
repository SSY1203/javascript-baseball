class Player {
  playerNumbers;
  score;

  constructor() {
    this.playerNumbers = [];
    this.score = { ball: 0, strike: 0 };
  }

  setScore(score) {
    this.score = score;
  }

  resetPlayer() {
    this.playerNumbers = [];
    this.score = { ball: 0, strike: 0 };
  }
}

module.exports = Player;
