'use strict';

let numerot = [];

for (let i = 0; i < 5; i++) {
  let numero = prompt("Anna numero: ");
  numerot.push(numero);
}

for (let i = numerot.length - 1; i >= 0; i--) {
  console.log(numerot[i]);
}
