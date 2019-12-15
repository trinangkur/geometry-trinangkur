const Point = require("../src/point");

const arePointsEqual = function(point1, point2) {
  return point1.x == point2.x && point1.y == point2.y;
};

const isInRange = function(range, value) {
  const [start, end] = range.sort();
  return value >= start && value <= end;
};

const getMidPoint = function(point1, point2) {
  return { x: (point1.x + point2.x) / 2, y: (point1.y + point2.y) / 2 };
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }

  toString() {
    const endA = `(${this.endA.x},${this.endA.y})`;
    const endB = `(${this.endB.x},${this.endB.y})`;
    return `[Line ${endA} to ${endB}]`;
  }

  isEqualTo(other) {
    return (
      other instanceof Line &&
      arePointsEqual(this.endA, other.endA) &&
      arePointsEqual(this.endB, other.endB)
    );
  }
  get length() {
    const abscissasDistance = this.endB.x - this.endA.x;
    const ordinatesDistance = this.endB.y - this.endA.y;
    return Math.sqrt(abscissasDistance ** 2 + ordinatesDistance ** 2);
  }
  get slope() {
    const abscissasDistance = this.endB.x - this.endA.x;
    const ordinatesDistance = this.endB.y - this.endA.y;
    return ordinatesDistance / abscissasDistance;
  }
  isParallelTo(otherLine) {
    return otherLine instanceof Line && this.slope === otherLine.slope;
  }
  findX(y) {
    if (!isInRange([this.endA.y, this.endB.y], y)) return NaN;

    if (this.slope == 0) return this.endA.x;

    return (y - this.endA.y) / this.slope + this.endA.x;
  }
  findY(x) {
    if (!isInRange([this.endA.x, this.endB.x], x)) return NaN;
    const infinity = [Infinity, -Infinity];
    if (infinity.includes(this.slope)) return this.endA.y;

    return (x - this.endA.x) * this.slope + this.endA.y;
  }
  split() {
    const midPoint = getMidPoint(this.endA, this.endB);
    const line1 = new Line(this.endA, midPoint);
    const line2 = new Line(midPoint, this.endB);
    return [line1, line2];
  }
  hasPoint(point) {
    return (
      point instanceof Point &&
      (this.findX(point.y) == point.x || this.findY(point.x) == point.y)
    );
  }
}

module.exports = Line;
