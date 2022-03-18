export function getRandomIntInclusive(min, max) {
  min = Math.ceil(+min);
  max = Math.floor(+max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function numberToDigit(number) {
  const reminder9 = number % 9;
  // return reminder9 === 0 ? 9 : reminder9;
  return reminder9;
}
