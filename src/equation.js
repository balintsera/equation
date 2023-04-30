export const Equation = class
{
  constructor() {
    this.x = 0;
    this.result = 0;
    this.firstNumber = 0;
    this.secondNumber = 0;
    this.operators = ["+", "-"];
    this.operator;
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
    // get a random x
    // calculate the differece from this.result
    
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
    return this.firstNumber.toString() + "x " + this.operator + " " + this.secondNumber.toString(); 
  }
}
