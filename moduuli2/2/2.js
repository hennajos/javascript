'use strict';

const lukumaara = parseInt(prompt("Kuinka monta osallistujaa?"));

let nimet = [];

for (let i = 0; i < lukumaara; i++) {
  let nimi = prompt(`Anna ${i + 1} nimi: `);
  nimet.push(`<li>${nimi}</li>`);
}

nimet.sort();

const nimetHTML='<ol>' + nimet.join('') + '</ol>';
document.querySelector('#kohde').innerHTML = nimetHTML;