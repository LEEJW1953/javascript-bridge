/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

const MissionUtils = require("@woowacourse/mission-utils");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeMaker = require("./BridgeMaker");

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.\n', (size) => {
      this.checkBridgeSize(size);
      let bridge = BridgeMaker.makeBridge(+size, BridgeRandomNumberGenerator.generate);
      MissionUtils.Console.close();
    });
  },

  /**
   * 다리 길이의 입력값이 유효한지 판단한다.
   */
  checkBridgeSize(size) {
    const RANGE = []
    for (let i=3; i<21; i++) {
      RANGE.push(String(i));
    }
    if (!RANGE.includes(size)) {
      throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() { },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() { },
};

module.exports = InputView;
