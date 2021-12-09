export default class RacingCarModel {
  constructor() {
    this.reset();
  }

  reset() {
    this.cars = [];
    this.gameCount = 0;
  }

  setCars(cars) {
    this.cars = cars;
  }

  setGameCount(gameCount) {
    this.gameCount = gameCount;
  }
}
