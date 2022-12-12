'use strict';

const path = require('path');
const ReadLines = require('n-readlines');
const readLines = new ReadLines(path.join(__dirname, 'input.txt'));
const outcome = {
  X: 0,
  Y: 3,
  Z: 6
}
const opponentLookup = {
  A: 1,
  B: 2,
  C: 3
}
let score = 0;
let line;
while ((line = readLines.next())) {
  const value = line.toString('ascii').trim();
  if (value) {
    const [opponent, my] = value.split(' ');
    const outcomeScore = outcome[my];
    const opponentScore = opponentLookup[opponent];


    if (outcomeScore === 3) { //draw
      score = score + outcomeScore + opponentScore; 
    } else if(outcomeScore === 0) { // lose
      let playerScore = opponentLookup[opponent] -1;
      if (playerScore < 1) {
        playerScore = 3;
      }
      score = score + outcomeScore + playerScore;
    } else { //win
      let playerScore = opponentLookup[opponent] + 1;
      if (playerScore > 3) {
        playerScore = 1;
      }
      score = score + outcomeScore + playerScore;
    }
  }
}

console.log(`score: ${score}`);
