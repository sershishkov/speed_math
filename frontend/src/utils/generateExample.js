import { v4 as uuidv4 } from 'uuid';
import { getRandomIntInclusive } from './randoms';

export class generateExample__AddMultSub {
  id;
  numberLeft;
  numberRight;
  result;
  constructor(min, max) {
    this.id = uuidv4();
    this.numberLeft = getRandomIntInclusive(+min, +max);
    this.numberRight = getRandomIntInclusive(+min, +max);
    this.result = +this.numberLeft + +this.numberRight;
  }
}
