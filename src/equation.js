import { Side } from './side.js';

export const Equation = class
{
  leftSide;
  rightSide;

  generate() {
  
    // structure left: [num1] * x [+/-] [num2]
    this._generateLeftSide(); 
    this._generateRightSide();
  }

  _generateLeftSide() {
    this.leftSide = new Side();
    
    this.leftSide.firstNumber = this._randomIntFromInterval(-20, 20);
    this.leftSide.operator = this._randOperator;
    this.leftSide.secondNumber =  this._randomIntFromInterval(-100, 100);
    this.leftSide.x = this._randomIntFromInterval(2, 15);
    this.leftSide.result = this._eval();
  }

  _generateRightSide() {
    this.rightSide = new Side();

    this.rightSide.firstNumber = this._randomIntFromInterval(-20, 20);
    this.rightSide.secondNumber = this.leftSide.result - (this.rightSide.firstNumber * this.leftSide.x);
    
    if (this.rightSide.secondNumber> 0) {
      this.rightSide.operator = "-";
    } 
    
    console.log("right side: " + this.rightSide.asString);
    console.log("x", this.leftSide.x);
  }


  _randomIntFromInterval(min, max) {
    let result = 0;
    while (result === 0) {
      result = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return result;
  }

  get _randOperator() {
    return this.operators[Math.round(Math.random() % 2, 1)];
  }

  _eval() {
    const product = this.leftSide.firstNumber * this.leftSide.x;
    const equation = product.toString() + " " + this.leftSide.operator + " " + this.leftSide.secondNumber.toString();
    try {
      return eval(equation);
    } catch(error) {
      console.error("error", error, this);
    }
  }

  get asString() {
    return this.firstNumber.toString() + "x " + this.operator + " " + this.secondNumber.toString() + " = " + this.thirdNumber.toString() + "x " + this.rightSideOperator + " " + this.fourthNumber; 
  }
}
