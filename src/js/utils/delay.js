export const delay = (time = 0) => {
  if (typeof time !== 'number') {
    throw new Error('시간은 숫자여야 합니다');
  }

  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
