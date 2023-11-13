'use strict';

const numerot = [];

let arvo = prompt("Anna luku, 0 lopettaa:");

while (arvo !== 0) {
  numerot.push(arvo);
  arvo = +prompt("Anna luku, 0 lopettaa:");
}

numerot.sort((a,b) => a-b);
numerot.reverse();

console.log(numerot);
