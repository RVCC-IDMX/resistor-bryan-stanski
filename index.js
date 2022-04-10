import { getResistorOhms } from './resistor.js';

const defaultBands = {
  color1: 'red',
  color2: 'green',
  multiplier: 'violet',
  tolerance: 'gold',
};

const resistorBands1 = document.querySelector('#b0');
const resistorBands2 = document.querySelector('#b1');
const resistorBands3 = document.querySelector('#b2');
const resistorBands4 = document.querySelector('#b3');

const band1 = document.querySelector('#color0');
const band2 = document.querySelector('#color1');
const multiplier = document.querySelector('#color2');
const tolerance = document.querySelector('#color3');

const answerElement = document.querySelector('.answer');

let color;

band1.addEventListener('click', (e) => {
  color = e.target.className.replace('box ', '');
  resistorBands1.className = `band ${color}`;
  defaultBands.color1 = color;
  answerElement.innerText = getResistorOhms(defaultBands);
});

//color 1

band2.addEventListener('click', (e) => {
  color = e.target.className.replace('box ', '');
  resistorBands2.className = `band ${color}`;
  defaultBands.color2 = color;
  answerElement.innerText = getResistorOhms(defaultBands);
});
//color2
multiplier.addEventListener('click', (e) => {
  color = e.target.className.replace('box ', '');
  resistorBands3.className = `band ${color}`;
  defaultBands.multiplier = color;
  answerElement.innerText = getResistorOhms(defaultBands);
});
//color 3
tolerance.addEventListener('click', (e) => {
  color = e.target.className.replace('box ', '');
  resistorBands4.className = `band ${color}`;
  defaultBands.tolerance = color;
  answerElement.innerText = getResistorOhms(defaultBands);
});
