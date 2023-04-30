export const Side = class {
  x = 0;
  result = 0;
  firstNumber = 0;
  secondNumber = 0;
  operator;
  operators = ["+", "-"];

  get asString() {
    return this.firstNumber.toString() + "x " + this.operator + " " + this.secondNumber.toString();
  }

  
}