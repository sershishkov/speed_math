import { v4 as uuidv4 } from 'uuid';
import { getRandomIntInclusive } from './randoms';

export class generateExample__AddMultSub {
  id;
  numberLeft;
  numberRight;
  resultAdd;
  resultMult;
  resultSub;
  constructor(min, max) {
    this.id = uuidv4();
    this.numberLeft = getRandomIntInclusive(+min, +max);
    this.numberRight = getRandomIntInclusive(+min, +max);
    this.resultAdd = +this.numberLeft + +this.numberRight;
    this.resultMult = +this.numberLeft * +this.numberRight;
    this.resultSub = +this.numberLeft - +this.numberRight;
  }
}

export class generateExample__SimpleDivision {
  id;
  numberLeft;
  numberRight;
  resultDivision;
  examplesArray = [];
  constructor(max) {
    this.id = uuidv4();
    for (let i = 1; i <= max; i++) {
      for (let j = 1; j <= max; j++) {
        if (i * j <= max) {
          const newObj = {
            tempLeft: i,
            tempRight: j,
            tempResult: i * j,
          };
          this.examplesArray.push(newObj);
        }
      }
    }
    console.log(this.examplesArray);
    const exampleIndex = getRandomIntInclusive(0, this.examplesArray.length);
    this.numberLeft = +this.examplesArray[exampleIndex].tempResult;
    this.numberRight = +this.examplesArray[exampleIndex].tempRight;
    this.resultDivision = +this.examplesArray[exampleIndex].tempLeft;
  }
}
