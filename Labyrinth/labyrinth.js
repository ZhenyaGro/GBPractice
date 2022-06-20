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

let maze = [
  [1, 1, 1, 1, 1, 1, 1, 1]
  [1, 1, 1, 1, 0, 0, 1, 1], // Start's here
  [1, 1, 1, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 9, 1], // End's here
  [1, 1, 1, 1, 1, 1, 1, 1]
];

function findWay(start, lookedSide, end) {
  getTurns({ x: 4, y: 1 }, lookedSide)

}

function getTurns(currentPos, lookedSide) {
  const { x, y } = currentPos;
  const staticDirections = {
    left: { x: x - 1, y: y },
    up: { x: x, y: y + 1 },
    right: { x: x + 1, y: y },
    down: { x: x, y: y - 1 }
  };
  // let changedX, changedY;

  // If 'down'  should be: right, down, left, up
  // If 'left'  should be: down, left, up, right
  // If 'up'    should be: left, up, right, down
  // If 'right' should be: up, right, down, left
  if (lookedSide == 'down') {

    // changedX = staticDirections.down.x;
    // changedY = staticDirections.down.y;

    if (maze[changedY][changedX] === 0) return { x: changedX, y: changedY };
  }


  cords.push({ x: x, y: y - 1, val: maze[y - 1][x] });
  cords.push({ x: x, y: y + 1, val: maze[y + 1][x] });
  cords.push({ x: x - 1, y: y, val: maze[y][x - 1] });
  cords.push({ x: x + 1, y: y, val: maze[y][x + 1] });

}

// console.log(checkPath({ x: 4, y: 1 }, { x: 6, y: 6 }));
findWay({ x: 4, y: 1 }, 'down', { x: 6, y: 6 });
console.log(maze);