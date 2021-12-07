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
