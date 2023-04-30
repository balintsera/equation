import { Side } from './side.js';

export const LeftSide = class extends Side {
  
  operators = ["+", "-"];

  generate() {
    this.firstNumber = this._randomIntFromInterval(-20, 20);
    this.operator = this._randOperator;
    this.secondNumber =  this._randomIntFromInterval(-100, 100);
    this.x = this._randomIntFromInterval(2, 15);
    this.result = this._eval();
  }

  _eval() {
    const product = this.firstNumber * this.x;
    const equation = product.toString() + " " + this.operator + " " + this.secondNumber.toString();
    try {
      return eval(equation);
    } catch(error) {
      console.error("error", error, this);
    }
  }

  get _randOperator() {
    return this.operators[Math.round(Math.random() % 2, 1)];
  }
}