import { v4 as uuidv4 } from 'uuid';
import { getRandomIntInclusive, numberToDigit } from './helper';

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
    // console.log(this.examplesArray);
    const exampleIndex = getRandomIntInclusive(0, this.examplesArray.length);
    this.numberLeft = +this.examplesArray[exampleIndex].tempResult;
    this.numberRight = +this.examplesArray[exampleIndex].tempRight;
    this.resultDivision = +this.examplesArray[exampleIndex].tempLeft;
  }
}

export class generateExample__ForCheckMultiplication {
  id;
  numberLeft;
  numberRight;
  resultRight;

  checkNumberLeft;
  checkNumberRight;

  checkResultLeft;
  checkResultRight;

  constructor(min, max) {
    this.id = uuidv4();
    this.numberLeft = getRandomIntInclusive(+min, +max);
    this.numberRight = getRandomIntInclusive(+min, +max);
    this.resultRight = +this.numberLeft * +this.numberRight;

    this.checkNumberLeft = numberToDigit(+this.numberLeft);
    this.checkNumberRight = numberToDigit(+this.numberRight);
    this.checkResultLeft = numberToDigit(
      +this.checkNumberLeft * +this.checkNumberRight
    );
    this.checkResultRight = numberToDigit(+this.resultRight);
  }
}

export class genExample_Mult__WithDifferentRangers {
  id;
  numberLeft;
  numberRight;
  resultRight;

  checkNumberLeft;
  checkNumberRight;

  checkResultLeft;
  checkResultRight;

  constructor(minLeft, maxLeft, minRight, maxRight) {
    this.id = uuidv4();
    this.numberLeft = getRandomIntInclusive(+minLeft, +maxLeft);
    this.numberRight = getRandomIntInclusive(+minRight, +maxRight);
    this.resultRight = +this.numberLeft * +this.numberRight;

    this.checkNumberLeft = numberToDigit(+this.numberLeft);
    this.checkNumberRight = numberToDigit(+this.numberRight);
    this.checkResultLeft = numberToDigit(
      +this.checkNumberLeft * +this.checkNumberRight
    );
    this.checkResultRight = numberToDigit(+this.resultRight);
  }
}

export class genExample__Add_3numbers_WithCheck {
  id;
  number_1;
  number_2;
  number_3;
  resultRight;

  checkNumber_1;
  checkNumber_2;
  checkNumber_3;

  checkResultLeft;
  checkResultRight;
  constructor(min, max) {
    this.id = uuidv4();
    this.number_1 = getRandomIntInclusive(+min, +max);
    this.number_2 = getRandomIntInclusive(+min, +max);
    this.number_3 = getRandomIntInclusive(+min, +max);
    this.resultRight = +this.number_1 + +this.number_2 + +this.number_3;

    this.checkNumber_1 = numberToDigit(+this.number_1);
    this.checkNumber_2 = numberToDigit(+this.number_2);
    this.checkNumber_3 = numberToDigit(+this.number_3);

    this.checkResultLeft = numberToDigit(
      +this.checkNumber_1 + +this.checkNumber_2 + +this.checkNumber_3
    );
    this.checkResultRight = numberToDigit(+this.resultRight);
  }
}
