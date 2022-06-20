// Create a program that finds a way from maze.
/*
Algorithm:
1. Get all available turns.
2. Check walls: 1) left, 2) up, 3) right, 4) down, regarding the subject's look.
3. Make the move.

Squares:
0 - free not visited;
1 - wall (blocked);
2 - free visited;
9 - finish.
*/

'use strict';

// Create labyrinth
let maze = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 1, 1], // Start's here
  [1, 1, 1, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 0, 1], // End's here
  [1, 1, 1, 1, 1, 1, 1, 1]
];

function findWay(start, side, end) {
  let currentPos = start;
  let lookedSide = side;

  console.log(currentPos);

  let turnsCount = 0;
  while (!(currentPos.x == end.x && currentPos.y == end.y)) {
    currentPos = makeMove(currentPos, side);
    turnsCount++;
    console.log(currentPos);
    console.log(lookedSide);
  }
  alert('The way was found! Turns: ' + turnsCount);
  return 'Done!';

  function makeMove(position, side) {
    const { x, y } = position;
    const directions = {
      left: { x: x - 1, y: y },
      up: { x: x, y: y - 1 },
      right: { x: x + 1, y: y },
      down: { x: x, y: y + 1 }
    };
    let checkTurns = {
      right: function () {
        if (maze[directions.right.y][directions.right.x] === 0) {
          lookedSide = 'right';
          return directions.right;
        }
      },
      down: function () {
        if (maze[directions.down.y][directions.down.x] === 0) {
          lookedSide = 'down';
          return directions.down;
        }
      },
      left: function () {
        if (maze[directions.left.y][directions.left.x] === 0) {
          lookedSide = 'left';
          return directions.left;
        }
      },
      up: function () {
        if (maze[directions.up.y][directions.up.x] === 0) {
          lookedSide = 'up';
          return directions.up;
        }
      }
    };

    // [left, up, right, down, left, up, right];
    // If 'down'  should be: right, down, left, up
    // If 'left'  should be: down, left, up, right
    // If 'up'    should be: left, up, right, down
    // If 'right' should be: up, right, down, left

    if (lookedSide == 'down') {
      return checkTurns.right() || checkTurns.down() || checkTurns.left() || checkTurns.up();
    }
    if (lookedSide == 'left') {
      return checkTurns.down() || checkTurns.left() || checkTurns.up() || checkTurns.right();
    }
    if (lookedSide == 'up') {
      return checkTurns.left() || checkTurns.up() || checkTurns.right() || checkTurns.down();
    }
    if (lookedSide == 'right') {
      return checkTurns.up() || checkTurns.right() || checkTurns.down() || checkTurns.left();
    }
  }
}

findWay({ x: 4, y: 1 }, 'down', { x: 6, y: 6 });
console.log(maze);