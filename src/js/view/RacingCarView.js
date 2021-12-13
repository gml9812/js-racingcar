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
    this.disable(SELECTOR.CAR_NAME.INPUT);
    this.disable(SELECTOR.CAR_NAME.BUTTON);

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

  renderGameProgress(cars) {
    this.disable(SELECTOR.GAME_COUNT.INPUT);
    this.disable(SELECTOR.GAME_COUNT.BUTTON);

    $(SELECTOR.GAME_PROGRESS.CONTAINER).innerHTML = `
      <section class="mt-4">
        <div class="d-flex">
          ${cars.map((car) => this.progressTemplate(car))}
        </div>
      </section>
    `;
  }

  progressTemplate(car) {
    return `
      <div>
        <div class="car-player mr-2">${car.name}</div>
        ${
          car.isLoading
            ? this.arrowTemplate().repeat(car.position - 1) + this.spinnerTemplate()
            : this.arrowTemplate().repeat(car.position)
        }
      </div>
    `;
  }

  arrowTemplate() {
    return '<div class="forward-icon mt-2">⬇️️</div>';
  }

  spinnerTemplate() {
    return `
      <div class="d-flex justify-center mt-4">
        <div class="relative spinner-container">
          <span class="material spinner"></span>
        </div>
      </div>
    `;
  }

  renderResult(winner) {
    $(SELECTOR.GAME_RESULT.CONTAINER).innerHTML = `
      <section>
        <h2>🏆 최종 우승자: ${winner.map(({ name }) => name).join(', ')} 🏆</h2>
        <div class="d-flex justify-center">
          <button type="button" class="reset-btn btn btn-cyan">
           다시 시작하기
          </button>
        </div>
      </section>
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
