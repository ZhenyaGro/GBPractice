/*
Given: 5 kettlebells with different weights in random order.
To find: the weight of the heaviest kettlebell.
*/

'use strict';

let kettlebells = []; // [1, 3, 5, 2, 4];
for (let i = 0; i < 5; i++) {
  kettlebells.push(Math.floor(Math.random() * 10) + 1);
}
alert(`The kettlebells: ${kettlebells}.`); // Just show for testing.

alert(`The heaviest kettlebell has weight = ${Math.max(...kettlebells)}`);