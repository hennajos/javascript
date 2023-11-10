'use strict';

function heita() {
  const arvottu = Math.floor(Math.random() * 6) +1;
  return arvottu;
}
const arvotutluvut = [];

let luku = 0;

while (luku != 6) {
  luku = heita();
  arvotutluvut.push(luku)
}

const tulostus = document.querySelector('#kohde')

let htmlkoodi = `<ul>`;
for (let alkio of arvotutluvut) {
  htmlkoodi += `<li> ${alkio} </li>`;
}
htmlkoodi += `</ul>`;

tulostus.innerHTML += htmlkoodi;
