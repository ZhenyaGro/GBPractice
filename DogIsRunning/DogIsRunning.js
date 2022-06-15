/*
Description:
We have 2 humans (friend 1, friend 2). They are moving toward each other with different speeds.
There is a dog. It's running between the friends. From the friend 1 to the friend 2.
When the dog reaches one of friends it immediately returns to the second one.
The dog also has some speed.
Question: Before friends meet, how many times will the dog run between friends?
-----------------------------------------

To do (my list):
1. Add task's text.     || 
2. Add description.     || Done! 
3. Complete the task.   || Done!
4. Create form.         || 
5. Add animations.      || 
*/

'use strict';

class Animal {
  constructor(speed) {
    this.speed = speed;
  }

  checkSpeed() {
    alert(`${this.name} is moving with speed = ${this.speed}.`);
  }
}

class Human extends Animal {
  constructor(speed, name) {
    super(speed);
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(speed) {
    super(speed);
    this.name = 'Dog';
    this.runningTimes = [];
  }

  runToHuman(towardHuman, distance) {
    this.runningTimes.push(Math.round(distance / (this.speed + towardHuman.speed)));
  }
}

function start() {
  let firstFriend = new Human(+prompt("Left human's (friend 1) speed?", 2), 'First friend');
  let secondFriend = new Human(+prompt("Right human's (friend 2) speed?", 3), 'Second friend');
  let currentDistance = +prompt('How long is distance?', 100);
  let dog = new Dog(+prompt("Dog's speed?", 5));

  firstFriend.checkSpeed();
  secondFriend.checkSpeed();
  dog.checkSpeed();

  let rightSide = true;
  while (currentDistance > 0) {
    dog.distanceTillHuman = currentDistance;
    dog.runToHuman(rightSide ? firstFriend : secondFriend, currentDistance);
    currentDistance = currentDistance - ((firstFriend.speed + secondFriend.speed) * dog.runningTimes[dog.runningTimes.length - 1]);
    rightSide = !rightSide;
    currentDistance < 0 ? currentDistance = 0 : currentDistance;
  }

  return dog.runningTimes.length;
}

let result = start();
alert(`The dog will run between friends ${result} times.`);

