const { Console, PLZ_NUMBER_INPUT, GAME_START_TEXT, MISSION_COMPLETE } = require('../Constant');

const OutputView = {
  printStart() {
    Console.print(GAME_START_TEXT);
  },

  printScore(score) {
    const scoreTxt = '';
    if (score.ball !== 0) {
      scoreTxt += `${score.ball}볼 `;
    }
    if (score.strike !== 0) {
      scoreTxt += `${score.strike}스트라이크`;
    }
    Console.print(scoreTxt);
  },

  printEnd() {
    Console.print(MISSION_COMPLETE);
  },
};

module.exports = OutputView;
