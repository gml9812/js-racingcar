import { $ } from '../utils/index.js';
import { SELECTOR } from '../constants/index.js';

export default class RacingCarView {
  constructor() {
    this.reset();
  }

  renderCarNameInput() {
    $(SELECTOR.CAR_NAME.CONTAINER).innerHTML = `
      <h1 class="title-container text-center">🏎️ 자동차 경주 게임</h1>
      <p class="car-name-container__description">
        5자 이하의 자동차 이름을 콤마로 구분하여 입력해주세요. <br />
        예시) EAST, WEST, SOUTH, NORTH
      </p>
      <div class="d-flex">
        <input type="text" class="car-name-container__input w-100 mr-2" placeholder="자동차 이름" />
        <button type="button" class="car-name-container__button btn btn-cyan">확인</button>
      </div>
    `;
  }

  renderGameCountInput() {
    // this.disable(SELECTOR.CAR_NAME.INPUT);
    // this.disable(SELECTOR.CAR_NAME.BUTTON);

    $(SELECTOR.GAME_COUNT.CONTAINER).innerHTML = `
      <p class="game-count-container__description">시도할 횟수를 입력해주세요.</p>
      <div class="d-flex">
        <input
          type="number"
          class="game-count-container__input w-100 mr-2"
          placeholder="시도 횟수"
        />
        <button type="button" class="game-count-container__button btn btn-cyan">확인</button>
      </div>
    `;
  }

  enable(target) {
    $(target).disabled = false;
  }

  disable(target) {
    $(target).disabled = true;
  }

  reset() {
    this.renderCarNameInput();
    $(SELECTOR.GAME_COUNT.CONTAINER).innerHTML = '';
  }
}
