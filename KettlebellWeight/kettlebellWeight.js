/*
Given: 5 kettlebells with different weights in random order.
To find: the weight of the heaviest kettlebell.
Available actions:
1. Take one or two kettlebells.
2. Compare weights.
3. Swap two kettlebells.
4. Remember the weight of one kettlebell.
-----------------------------------------

To do (my list):
1. Add task's text.     || Done!
2. Add description.     || Done!
3. Complete the task.   || Done!
4. Create form.         || 
5. Add animations.      || 
*/

'use strict';

let actions = {
  takeKettlebell(ketNumber) {
    alert(`The kettlebell №${ketNumber} has been taken.
    It's weight is ${kettlebells[ketNumber - 1]}.`);
    return kettlebells[ketNumber - 1];
  },

  takeKettlebells(ketNumber1, ketNumber2) {
    alert(`The kettlebells №${ketNumber1} and №${ketNumber2} have been taken.
    These weight are ${kettlebells[ketNumber1 - 1]} and ${kettlebells[ketNumber2 - 1]}.`);
    return [kettlebells[ketNumber1 - 1], kettlebells[ketNumber2 - 1]];
  },

  compareKettlebells([ketWeight1, ketWeight2]) {
    if (ketWeight1 > ketWeight2) {
      alert('The first kettlebell is heavier.');
      return ketWeight1;
    }
    if (ketWeight1 < ketWeight2) {
      alert('The second kettlebell is heavier.');
      return ketWeight2;
    }
    alert('The kettlebells have the same weight.');
    return ketWeight1;
  },

  swapKettlebells(ketNumber1, ketNumber2) {
    let currentKet = kettlebells[ketNumber1 - 1];
    kettlebells[ketNumber1 - 1] = kettlebells[ketNumber2 - 1];
    kettlebells[ketNumber2 - 1] = currentKet;
    alert('Swapped.');
  },

  rememberedWeight: undefined,
  rememberWeight(ketWeight) {
    actions.rememberedWeight = ketWeight;
  }
}

let kettlebells = []; // [1, 3, 5, 2, 4];
for (let i = 0; i < 5; i++) {
  kettlebells.push(Math.floor(Math.random() * 10) + 1);
}
alert(`The kettlebells: ${kettlebells}.`); // Just show for testing.

// Looking for the heaviest kettlebell:
actions.rememberWeight(actions.takeKettlebell(1));

for (let i = 2; i <= kettlebells.length; i++) {
  actions.rememberWeight(actions.compareKettlebells([actions.rememberedWeight, actions.takeKettlebell(i)]));
}
alert(`The heaviest kettlebell has weight = ${actions.rememberedWeight}`);
