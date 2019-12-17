const arePointsEqual = function(point1, point2) {
  return point1.x == point2.x && point1.y == point2.y;
};

class Point {
  constructor(x, y) {
    Object.defineProperties(this, {
      x: { value: x, enumerable: true, writable: false },
      y: { value: y, enumerable: true, writable: false }
    });
    // [this.x, this.y] = [x, y];
  }
  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }
  visit(givenAction) {
    return givenAction(this.x, this.y);
  }
  isEqualTo(other) {
    return other instanceof Point && arePointsEqual(this, other);
  }
  clone() {
    return new Point(this.x, this.y);
  }
  findDistanceTo(other) {
    if (!(other instanceof Point)) return NaN;
    const abscissasDistance = this.x - other.x;
    const ordinatesDistance = this.y - other.y;
    return Math.sqrt(abscissasDistance ** 2 + ordinatesDistance ** 2);
  }
  isOn(shape) {
    return shape.hasPoint(this);
  }
}

module.exports = Point;
