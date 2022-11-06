const MissionUtils = require('@woowacourse/mission-utils');
const Console = MissionUtils.Console;

class App {
  user_number;
  computer_number;

  getRandomNumber() {
    let computer_arr = [];
    while (computer_arr.length < 3) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
      if (!computer_arr.includes(randomNumber)) {
        computer_arr.push(randomNumber);
      }
    }

    this.computer_number = computer_arr.join('');
  }

  getUserNumber() {
    Console.readLine('숫자를 입력해주세요 : ', input => {
      const repeatInput = [...new Set(input)];
      if (
        input > 0 &&
        !input.includes(0) &&
        !isNaN(input) &&
        String(input).length === 3 &&
        repeatInput.length === 3
      ) {
        this.user_number = input;
        // TODO compare numbers function
      } else {
        throw new Error('잘못된 입력입니다.');
      }
    });
  }
  play() {}
}

module.exports = App;
