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

const getVertexBandD = function(vertexA, vertexC) {
  return {
    vertexB: new Point(vertexA.x, vertexC.y),
    vertexD: new Point(vertexC.x, vertexA.y)
  };
};

class Rectangle {
  constructor(endA, endC) {
    this.vertexA = new Point(endA.x, endA.y);
    this.vertexC = new Point(endC.x, endC.y);
    Object.defineProperties(this, {
      vertexA: { writable: false },
      vertexC: { writable: false }
    });
  }

  toString() {
    const endA = `(${this.vertexA.x},${this.vertexA.y})`;
    const endB = `(${this.vertexC.x},${this.vertexC.y})`;
    return `[Rectangle ${endA} to ${endB}]`;
  }

  get area() {
    const length = getLength(this.vertexA, this.vertexC);
    const width = getWidth(this.vertexA, this.vertexC);
    return length * width;
  }

  get perimeter() {
    const length = getLength(this.vertexA, this.vertexC);
    const width = getWidth(this.vertexA, this.vertexC);
    return 2 * (length + width);
  }

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;
    const { vertexB, vertexD } = getVertexBandD(this.vertexA, this.vertexC);
    const diagonal1 = new Line(this.vertexA, this.vertexC);
    const diagonal2 = new Line(vertexB, vertexD);
    const otherDiagonal = new Line(other.vertexA, other.vertexC);
    return (
      diagonal1.isEqualTo(otherDiagonal) || diagonal2.isEqualTo(otherDiagonal)
    );
  }
}

module.exports = Rectangle;
