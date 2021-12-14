import { RacingCarModel, Car } from '../model/index.js';
import { RacingCarView } from '../view/index.js';
import { $, isValidCarNames, isValidGameCount } from '../utils/index.js';
import { SELECTOR } from '../constants/index.js';

export default class RacingCarController {
  constructor() {
    this.model = new RacingCarModel();
    this.view = new RacingCarView();
    this.setEventListener();
  }

  setEventListener() {
    $(SELECTOR.CAR_NAME.CONTAINER).addEventListener('click', (e) => {
      this.handleCarNameButtonClick(e.target);
    });
    $(SELECTOR.GAME_COUNT.CONTAINER).addEventListener('click', (e) => {
      this.handleGameCountButtonClick(e.target);
    });
    $(SELECTOR.GAME_RESULT.CONTAINER).addEventListener('click', (e) => {
      this.handleGameResetButtonClick(e.target);
    });
  }

  handleCarNameButtonClick(target) {
    if (target !== $(SELECTOR.CAR_NAME.BUTTON)) {
      return;
    }

    const carNames = $(SELECTOR.CAR_NAME.INPUT)
      .value.split(',')
      .map((carName) => carName.trim())
      .filter((carName) => carName !== '');

    if (!isValidCarNames(carNames)) {
      $(SELECTOR.CAR_NAME.INPUT).value = '';
      return;
    }

    this.model.setCars(carNames.map((carName) => new Car(carName)));
    this.view.renderGameCountInput();
  }

  handleGameCountButtonClick(target) {
    if (target !== $(SELECTOR.GAME_COUNT.BUTTON)) {
      return;
    }

    const gameCount = $(SELECTOR.GAME_COUNT.INPUT).value;
    if (!isValidGameCount(gameCount)) {
      $(SELECTOR.GAME_COUNT.INPUT).value = '';
      return;
    }

    this.model.setGameCount(gameCount);
    this.startGames(gameCount);
  }

  startGames(gameCount) {
    for (let i = 0; i < gameCount; i += 1) {
      this.runOneGame();
    }
    this.finishGames();
  }

  runOneGame() {
    this.model.runOneGame();
    this.view.renderGameProgress(this.model.getCars());
  }

  finishGames() {
    setTimeout(() => {
      this.model.finishGame();
      this.view.renderGameProgress(this.model.getCars());
      this.view.renderResult(this.model.getWinner());
    }, 1000);
  }

  handleGameResetButtonClick(target) {
    if (target !== $(SELECTOR.GAME_RESULT.BUTTON)) {
      return;
    }

    this.model.reset();
    this.view.reset();
  }
}
