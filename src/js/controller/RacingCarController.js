import { RacingCarModel, Car } from '../model/index.js';
import { RacingCarView } from '../view/index.js';
import { $, isValidCarNames } from '../utils/index.js';
import { SELECTOR } from '../constants/index.js';

export default class RacingCarController {
  constructor() {
    this.model = new RacingCarModel();
    this.view = new RacingCarView();
    this.setEventListener();
  }

  setEventListener() {
    $(SELECTOR.CAR_NAME.BUTTON).addEventListener('click', () => {
      this.handleCarNameButtonClick();
    });
  }

  handleCarNameButtonClick() {
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
}
