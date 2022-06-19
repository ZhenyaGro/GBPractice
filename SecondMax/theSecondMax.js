// Find the second max number.

'use strict';

let array = [1, 8, 3, 2, 6];
let maxNumbers = {
  max: array[0],
  secondMax: array[0],
};
let current = array[0];

alert('Array = ' + array);

for (let i = 1; i < array.length; i++) {
  current = array[i];

  if (current > maxNumbers.max) {
    maxNumbers.secondMax = maxNumbers.max;
    maxNumbers.max = current;
  }

  if (current < maxNumbers.max) {
    if (maxNumbers.max == maxNumbers.secondMax) maxNumbers.secondMax = current;

    if (current > maxNumbers.secondMax) maxNumbers.secondMax = current;
  }
}

alert(`Max number = ${maxNumbers.max}, the second max number = ${maxNumbers.secondMax}`);