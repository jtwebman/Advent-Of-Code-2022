'use strict';

const path = require('path');
const ReadLines = require('n-readlines');
const readLines = new ReadLines(path.join(__dirname, 'input.txt'));
let elves = [];
let elfCount = 0;
let currentCalories = 0;
let line;
while ((line = readLines.next())) {
  const value = line.toString('ascii').trim();
  if (value) {
    currentCalories += parseInt(value, 10);
  } else {
    elves.push({
      number: elfCount++,
      calories: currentCalories
    });
    currentCalories = 0;
  }
}
const top3Elves = elves.sort((a, b) => b.calories - a.calories).slice(0, 3);
console.log(`top3Elves: ${JSON.stringify(top3Elves, null, 2)}`);
console.log(`sum of calories: ${JSON.stringify(top3Elves.reduce((acc, elf) => acc+ elf.calories, 0), null, 2)}`);
