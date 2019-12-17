const Line = require("../src/line");
const Point = require("../src/point");

class Rectangle {
  constructor(endA, endC) {
    this.vertexA = new Point(endA.x, endA.y);
    this.vertexB = new Point(endC.x, endA.y);
    this.vertexC = new Point(endC.x, endC.y);
    this.vertexD = new Point(endA.x, endC.y);
    this.diagonal = new Line(endA, endC);

    Object.defineProperties(this, {
      diagonal: { writable: false },
      vertexA: { enumerable: true, writable: false },
      vertexB: { enumerable: true, writable: false },
      vertexC: { enumerable: true, writable: false },
      vertexD: { enumerable: true, writable: false }
    });
  }

  get lenght() {
    return this.vertexA.findDistanceTo(this.vertexB);
  }

  get width() {
    return this.vertexA.findDistanceTo(this.vertexD);
  }

  toString() {
    const endA = `(${this.diagonal.endA.x},${this.diagonal.endA.y})`;
    const endB = `(${this.diagonal.endB.x},${this.diagonal.endB.y})`;
    return `[Rectangle ${endA} to ${endB}]`;
  }

  get area() {
    return this.lenght * this.width;
  }

  get perimeter() {
    return 2 * (this.lenght + this.width);
  }
}

module.exports = Rectangle;
