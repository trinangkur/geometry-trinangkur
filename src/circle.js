const Point = require("../src/point");

class Circle {
  constructor(centre, radious) {
    this.centre = new Point(centre.x, centre.y);
    this.radious = radious;
  }
  toString() {
    const centre = `(${this.centre.x},${this.centre.y})`;
    return `[Circle @${centre} radius ${this.radious}]`;
  }
  isEqualTo(other) {
    return (
      other instanceof Circle &&
      this.centre.isEqualTo(other.centre) &&
      this.radious === other.radious
    );
  }
}

module.exports = Circle;
