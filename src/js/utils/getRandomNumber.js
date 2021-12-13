import { NUMBER } from '../constants/index.js';

export const getRandomNumber = () => {
  return (
    Math.floor(
      Math.random() *
        (NUMBER.GAME_PROGRESS.MAX_RANDOM_NUMBER -
          NUMBER.GAME_PROGRESS.MIN_RANDOM_NUMBER +
          1)
    ) + NUMBER.GAME_PROGRESS.MIN_RANDOM_NUMBER
  );
};
