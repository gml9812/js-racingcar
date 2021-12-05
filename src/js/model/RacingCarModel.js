export default class RacingCarModel {
  constructor() {
    this.reset();
  }

  reset() {
    this.cars = [];
  }

  setCars(cars) {
    this.cars = cars;
  }
}
