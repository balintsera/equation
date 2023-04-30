export const Side = class {
  x = 0;
  result = 0;
  firstNumber = 0;
  secondNumber = 0;
  operator;

  get asString() {
    return this.firstNumber.toString() + "x " + this.operator + " " + this.secondNumber.toString();
  }

  generate() {
    throw new Error("Unimplemented")
  }

  _randomIntFromInterval(min, max) {
    let result = 0;
    while (result === 0) {
      result = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return result;
  }
}