export const SELECTOR = {
  TITLE: {
    CONTAINER: '.title-container',
  },

  CAR_NAME: {
    CONTAINER: '.car-name-container',
    DESCRIPTION: '.car-name-container__description',
    INPUT: '.car-name-container__input',
    BUTTON: '.car-name-container__button',
  },

  GAME_COUNT: {
    CONTAINER: '.game-count-container',
    DESCRIPTION: '.game-count-container__description',
    INPUT: '.game-count-container__input',
    BUTTON: '.game-count-container__button',
  },
};

export const WARNING = {
  CAR_NAME: {
    MIN_NUMBER: '두 개 이상의 자동차 이름을 입력하세요',
    MAX_LENGTH: '자동차 이름은 최대 5글자까지 가능합니다',
    DUPLICATION: '중복되는 자동차 이름이 있어요',
  },

  GAME_COUNT: {
    NATURAL_NUMBER: '자연수만 입력 가능합니다',
  },
};

export const NUMBER = {
  CAR_NAME: {
    MIN_NUMBER: 2,
    MAX_LENGTH: 5,
  },

  GAME_COUNT: {},
};
