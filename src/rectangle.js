const Line = require("../src/line");
const Point = require("../src/point");

class Rectangle {
  constructor(endA, endC) {
    this.edgeA = new Point(endA.x, endA.y);
    this.edgeB = new Point(endC.x, endA.y);
    this.edgeC = new Point(endC.x, endC.y);
    this.edgeD = new Point(endA.x, endC.y);

    this.diagonal = new Line(endA, endC);
    Object.defineProperties(this, {
      diagonal: { writable: false },
      edgeA: { enumerable: true, writable: false },
      edgeB: { enumerable: true, writable: false },
      edgeC: { enumerable: true, writable: false },
      edgeD: { enumerable: true, writable: false }
    });
  }

  toString() {
    const endA = `(${this.diagonal.endA.x},${this.diagonal.endA.y})`;
    const endB = `(${this.diagonal.endB.x},${this.diagonal.endB.y})`;
    return `[Rectangle ${endA} to ${endB}]`;
  }
}

module.exports = Rectangle;
