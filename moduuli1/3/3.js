'use strict';

const num1= prompt("Anna ensimmäinen numero");
const num2= prompt("Anna toinen numero");
const num3= prompt("Anna kolmas numero");

const sum= num1.toString() + num2.toString() + num3.toString();
const product= num1.toString() * num2.toString() * num3.toString();
const average= sum / 3;

const elementti = document.querySelector("#kohde");

elementti.innerHTML = `Summa on ${sum}, tulo on ${product}, keskiarvo on ${average}`;