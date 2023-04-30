import { Equation } from './equation.js';

const $ = {
  button: document.querySelector('.generator'),
  display: document.querySelector('.result'),
}

var equation = new Equation();


$.button.addEventListener('click', e => {
  equation.generate();
  console.log(equation.asString);
  $.display.innerHTML = equation.asString;
});


