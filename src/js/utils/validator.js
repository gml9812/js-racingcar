import { WARNING, NUMBER } from '../constants/index.js';

const isUnderMinCarNum = (carNames) => {
  return carNames.length < NUMBER.CAR_NAME.MIN_NUMBER;
};

const isOverMaxNameLength = (carNames) => {
  return carNames.some((name) => name.length > NUMBER.CAR_NAME.MAX_LENGTH);
};

const isDuplicateCarName = (carNames) => {
  return carNames.some((name, i) => i !== carNames.lastIndexOf(name));
};

export const isValidCarNames = (carNames) => {
  if (isUnderMinCarNum(carNames)) {
    alert(WARNING.CAR_NAME.MIN_NUMBER);
    return false;
  }
  if (isOverMaxNameLength(carNames)) {
    alert(WARNING.CAR_NAME.MAX_LENGTH);
    return false;
  }
  if (isDuplicateCarName(carNames)) {
    alert(WARNING.CAR_NAME.DUPLICATION);
    return false;
  }

  return true;
};

const isNotNatural = (gameCount) => {
  const pattern = /^(0|([1-9]\d*))$/;
  return pattern.test(gameCount);
};

const isOverMaxCount = (gameCount) => {
  return Number(gameCount) > NUMBER.GAME_COUNT.MAX_COUNT;
};

const isUnderMinCount = (gameCount) => {
  return Number(gameCount) < NUMBER.GAME_COUNT.MIN_COUNT;
};

export const isValidGameCount = (gameCount) => {
  if (isNotNatural(gameCount)) {
    alert(WARNING.GAME_COUNT.NATURAL_NUMBER);
    return false;
  }
  if (isOverMaxCount(gameCount)) {
    alert(WARNING.GAME_COUNT.COUNT_LIMIT);
    return false;
  }
  if (isUnderMinCount(gameCount)) {
    alert(WARNING.GAME_COUNT.COUNT_LIMIT);
    return false;
  }
  return true;
};
