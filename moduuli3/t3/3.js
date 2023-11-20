'use strict';
const names = ['John', 'Paul', 'Jones'];

for (let name of names) {
  const html = `<li>${name}<li/>`;
  document.querySelector('#target').innerHTML += html;
}
