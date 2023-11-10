'use strict';

const luku = prompt('Syötä kokonaisluku');

let alkuluku = 'on';

for (let i = 2; i < luku; i++) {
  const jakojaannos = luku % i;
  if(jakojaannos === 0){
    alkuluku = 'ei ole';
    break;
  }
}

document.querySelector('#kohde').innerHTML = `${luku} ${alkuluku} ole alkuluku`