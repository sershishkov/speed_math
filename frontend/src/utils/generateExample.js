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
    const tempLeft = getRandomIntInclusive(+min, +max);
    const tempRight = getRandomIntInclusive(+min, +max);
    this.id = uuidv4();
    if (tempLeft <= tempRight) {
      this.numberLeft = tempRight;
      this.numberRight = tempLeft;
    } else {
      this.numberLeft = tempLeft;
      this.numberRight = tempRight;
    }

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
    for (let i = 1; i <= Number(max); i++) {
      for (let j = 1; j <= Number(max); j++) {
        if (i * j <= Number(max)) {
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

export class genExample__Substr_WithCheck {
  id;
  number_1;
  number_2;
  resultRight;

  checkNumber_1;
  checkNumber_2;

  checkResultLeft;
  checkResultRight;
  constructor(min, max) {
    this.id = uuidv4();
    this.number_1 = getRandomIntInclusive(+min, +max);
    this.number_2 = getRandomIntInclusive(+min, +this.number_1);

    this.resultRight = +this.number_1 - +this.number_2;

    this.checkNumber_1 = numberToDigit(+this.number_1);
    this.checkNumber_2 = numberToDigit(+this.number_2);

    this.checkResultRight = numberToDigit(+this.resultRight);

    this.checkResultLeft = numberToDigit(
      +this.checkResultRight + +this.checkNumber_2
    );
  }
}

export class genExample__SquaringEnding_5 {
  id;
  number_1;
  resultRight;
  examplesArray = [];
  constructor(max) {
    this.id = uuidv4();

    for (let i = 15; i < Number(max); i += 10) {
      this.examplesArray.push(i);
    }

    const exampleIndex = getRandomIntInclusive(0, this.examplesArray.length);
    this.number_1 = isNaN(+this.examplesArray[exampleIndex])
      ? 15
      : +this.examplesArray[exampleIndex];

    this.resultRight = Math.pow(+this.number_1, 2);
  }
}

export class genExample__SquaringCloseTo_ {
  id;
  number_1;
  resultRight;

  constructor(min, max) {
    this.id = uuidv4();

    this.number_1 = getRandomIntInclusive(+min, +max);

    this.resultRight = Math.pow(+this.number_1, 2);
  }
}

export class genExample__SquaringEnding_1 {
  id;
  number_1;
  resultRight;
  examplesArray = [];
  constructor(max) {
    this.id = uuidv4();

    for (let i = 11; i <= Number(max); i += 10) {
      this.examplesArray.push(Number(i));
    }

    const exampleIndex = getRandomIntInclusive(0, this.examplesArray.length);
    this.number_1 = isNaN(+this.examplesArray[+exampleIndex])
      ? 11
      : this.examplesArray[+exampleIndex];

    // console.log(this.number_1);
    // console.log(this.examplesArray);

    this.resultRight = Math.pow(+this.number_1, 2);
  }
}

export class genExample__SquaringEnding_9 {
  id;
  number_1;
  resultRight;
  examplesArray = [];
  constructor(max) {
    this.id = uuidv4();

    for (let i = 19; i <= Number(max); i += 10) {
      this.examplesArray.push(Number(i));
    }

    const exampleIndex = getRandomIntInclusive(0, this.examplesArray.length);
    this.number_1 = isNaN(+this.examplesArray[exampleIndex])
      ? 19
      : +this.examplesArray[exampleIndex];

    this.resultRight = Math.pow(+this.number_1, 2);
  }
}

export class genExample__DivBySimpleNumber {
  id;

  divident;
  divider;
  resultRight;
  reminderOfDivision;
  constructor(max) {
    this.id = uuidv4();

    this.divident = getRandomIntInclusive(1000000, +max);
    this.divider_Total = getRandomIntInclusive(2, 9);
    this.resultRight = Math.floor(this.divident / this.divider_Total);
    this.reminderOfDivision = this.divident % this.divider_Total;
  }
}
export class genExample__DivByMultipliers {
  id;

  divident;
  divider_1;
  divider_2;
  divider_Total;
  resultRight;
  reminderOfDivision;

  constructor(max) {
    this.id = uuidv4();
    const tempDivider_1 = getRandomIntInclusive(2, 9);
    const tempDivider_2 = getRandomIntInclusive(2, 9);
    if (tempDivider_1 >= tempDivider_2) {
      this.divider_1 = tempDivider_2;
      this.divider_2 = tempDivider_1;
    } else {
      this.divider_1 = tempDivider_1;
      this.divider_2 = tempDivider_2;
    }

    this.divider_Total = +this.divider_1 * +this.divider_2;
    this.divident = getRandomIntInclusive(1000000, +max);

    this.resultRight = Math.floor(this.divident / this.divider_Total);
    this.reminderOfDivision = this.divident % this.divider_Total;
  }
}

export class generateExample__MultBy {
  id;
  numberLeft;
  numberRight;
  resultMult;
  constructor(min, max, numberRight) {
    this.id = uuidv4();

    this.numberLeft = getRandomIntInclusive(+min, +max);
    this.numberRight = +numberRight;

    this.resultMult = +this.numberLeft * +this.numberRight;
  }
}
