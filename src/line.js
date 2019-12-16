const Point = require("../src/point");

const isInRange = function(range, value) {
  const [start, end] = range.sort((a, b) => a - b);
  return value >= start && value <= end;
};

const getMidPoint = function(point1, point2) {
  return { x: (point1.x + point2.x) / 2, y: (point1.y + point2.y) / 2 };
};

const arePointsColinear = function(point1, point2, point3) {
  [x1, y1] = [point1.x, point1.y];
  [x2, y2] = [point2.x, point2.y];
  [x3, y3] = [point3.x, point3.y];
  return x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) == 0;
};

class Line {
  constructor(endA, endB) {
    this.endA = new Point(endA.x, endA.y);
    this.endB = new Point(endB.x, endB.y);
  }

  toString() {
    const endA = `(${this.endA.x},${this.endA.y})`;
    const endB = `(${this.endB.x},${this.endB.y})`;
    return `[Line ${endA} to ${endB}]`;
  }

  isEqualTo(other) {
    return (
      other instanceof Line &&
      ((this.endA.isEqualTo(other.endA) && this.endB.isEqualTo(other.endB)) ||
        (this.endB.isEqualTo(other.endA) && this.endA.isEqualTo(other.endB)))
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
    const slope = ordinatesDistance / abscissasDistance;
    return slope == -Infinity ? Infinity : slope;
  }
  isParallelTo(otherLine) {
    return (
      otherLine instanceof Line &&
      this.slope === otherLine.slope &&
      !arePointsColinear(this.endA, this.endB, otherLine.endA)
    );
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
  findPointFromStart(distance) {
    const ratio = distance / this.length;
    if (0 > ratio || ratio > 1) return null;
    const abscissa = (1 - ratio) * this.endA.x + ratio * this.endB.x;
    const ordinate = (1 - ratio) * this.endA.y + ratio * this.endB.y;
    return new Point(abscissa, ordinate);
  }
  findPointFromEnd(distance) {
    return new Line(this.endB, this.endA).findPointFromStart(distance);
  }
}

module.exports = Line;
