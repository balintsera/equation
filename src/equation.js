export const Equation = class
{
  constructor() {
    this.x = 0;
    this.result = 0;
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.operators = ["+", "-"];
    this.operator;
    this.rightSideOperator = "+";
  }
  

  generate() {
  
    // structure left: [num1] * x [+/-] [num2]
    this._generateLeftSide(); 
    this._generateRightSide();
  }

  _generateLeftSide() {
    this.firstNumber = this._randomIntFromInterval(-20, 20);
    this.operator = this._randOperator;
    this.secondNumber =  this._randomIntFromInterval(-100, 100);
    this.x = this._randomIntFromInterval(2, 15);
    this.result = this._eval();
  }

  _generateRightSide() {
    // num3 * x [+/-] num4
  
    this.thirdNumber = this._randomIntFromInterval(-20, 20);
    this.fourthNumber = this.result - (this.thirdNumber * this.x);
    
    if (this.fourthNumber > 0) {
      this.rightSideOperator = "-";
    } 
    
    console.log("right side: " + this.thirdNumber.toString() + "x " + this.rightSideOperator + " " + this.fourthNumber.toString());
    console.log("x", this.x);
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
    const product = this.firstNumber * this.x;
    const equation = product.toString() + " " + this.operator + " " + this.secondNumber.toString();
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
