import { LeftSide } from './left-side.js';
import { RightSide } from './right-side.js';

export const Equation = class
{
  leftSide;
  rightSide;

  createSides() {
    this.leftSide = new LeftSide();
    this.leftSide.generate();

    this.rightSide = new RightSide(this.leftSide);
    this.rightSide.generate()
    console.log("x = " + this.leftSide.x);
  }

  get asString() {
    return this.leftSide.asString + " = " + this.rightSide.asString; 
  }
}
