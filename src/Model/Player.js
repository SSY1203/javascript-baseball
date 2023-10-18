class Player {
  playerNumbers;
  score;

  constructor() {
    this.playerNumbers = [];
    this.score = { ball: 0, strike: 0 };
  }

  increaseBall() {
    this.score.ball += 1;
  }

  increaseStrike() {
    this.score.strike += 1;
  }

  resetPlayer() {
    this.playerNumbers = [];
    this.score = { ball: 0, strike: 0 };
  }

  setPlayerNumbers(numbers) {
    this.playerNumbers = numbers;
  }

  setScore(score) {
    this.score = score;
  }
}

module.exports = Player;
