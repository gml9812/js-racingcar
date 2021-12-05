import { RacingCarModel, Car } from '../model';
import { RacingCarView } from '../view';
import { $, isValidCarNames } from '../utils';
import { SELECTOR } from '../constants';

export default class RacingCarController {
  constructor() {
    console.log('avv');
    this.model = new RacingCarModel();
    this.view = new RacingCarView();
    this.view.renderGameCountInput();
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
