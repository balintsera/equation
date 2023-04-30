import { Side } from './side.js';

export const RightSide = class extends Side {
  leftSide;

  constructor(leftSide) {
    super();
    this.leftSide = leftSide;
    this.x = leftSide.x;
    this.operator = "+";
  }
  
  generate() {
    this.firstNumber = this._randomIntFromInterval(-20, 20);
    this.secondNumber = this.leftSide.result - (this.firstNumber * this.leftSide.x);
    
    if (this.secondNumber < 0) {
      this.operator = "-";
    } 
  }
}