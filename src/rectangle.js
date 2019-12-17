const Line = require("../src/line");
const Point = require("../src/point");

const getLength = function(endA, endC) {
  const endB = new Point(endC.x, endA.y);
  return endB.findDistanceTo(endA);
};

const getWidth = function(endA, endC) {
  const endD = new Point(endA.x, endC.y);
  return endD.findDistanceTo(endA);
};

class Rectangle {
  constructor(endA, endC) {
    this.diagonal = new Line(endA, endC);
    Object.defineProperties(this, {
      diagonal: { writable: false }
    });
  }

  toString() {
    const endA = `(${this.diagonal.endA.x},${this.diagonal.endA.y})`;
    const endB = `(${this.diagonal.endB.x},${this.diagonal.endB.y})`;
    return `[Rectangle ${endA} to ${endB}]`;
  }

  get area() {
    const length = getLength(this.diagonal.endA, this.diagonal.endB);
    const width = getWidth(this.diagonal.endA, this.diagonal.endB);
    return length * width;
  }

  get perimeter() {
    const length = getLength(this.diagonal.endA, this.diagonal.endB);
    const width = getWidth(this.diagonal.endA, this.diagonal.endB);
    return 2 * (length + width);
  }
}

module.exports = Rectangle;
