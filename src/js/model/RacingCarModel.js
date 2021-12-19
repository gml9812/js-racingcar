import { getRandomNumber } from '../utils/index.js';
import { NUMBER } from '../constants/index.js';

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

  getCars() {
    return this.cars;
  }

  setGameCount(gameCount) {
    this.gameCount = gameCount;
  }

  getGameCount() {
    return this.gameCount;
  }

  runOneGame() {
    this.cars.forEach((car) => {
      if (this.canMoveCarThisGame()) {
        car.moveForWard();
        car.loading();
      }
    });
    this.setGameCount(this.getGameCount() - 1);
  }

  canMoveCarThisGame() {
    return getRandomNumber() > NUMBER.GAME_PROGRESS.THRESHOLD;
  }

  finishGame() {
    this.cars.forEach((car) => car.finishLoading());
  }

  getWinner() {
    const maxDist = this.getMaxDistance();
    return this.cars.filter(({ position }) => {
      return position === maxDist;
    });
  }

  getMaxDistance() {
    return Math.max(...this.cars.map(({ position }) => position));
  }
}
