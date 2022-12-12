'use strict';

const path = require('path');
const ReadLines = require('n-readlines');
const readLines = new ReadLines(path.join(__dirname, 'input.txt'));

const priority = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52
}

let firstScore = 0;
let secondScore = 0;
let line;
let group = [];
while ((line = readLines.next())) {
  const value = line.toString('ascii').trim();
  if (value) {
    const half = value.length / 2;
    const first = new Set(value.slice(0, half).split(''));
    const second = new Set(value.slice(half).split(''));
    const inBoth = new Set(
      [...first].filter(c => second.has(c))
    );
    inBoth.forEach(c => {
      firstScore += priority[c];
    });
    group.push(new Set(value.split('')));
    if (group.length === 3) {
      const inAll = new Set(
        [...group[0]].filter(c => group[1].has(c) && group[2].has(c))
      );
      const [badge] = inAll;
      secondScore += priority[badge];
      group = [];
    }
  }
}

console.log(`firstScore: ${firstScore}`);
console.log(`secondScore: ${secondScore}`);