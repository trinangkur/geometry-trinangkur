class Line {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  toString() {
    return `Line {x1: ${this.x1}, y1: ${this.y1}, x2: ${this.x2}, y2: ${this.y2}}`;
  }
  isEqual(other) {
    return (
      this.x1 == other.x1 &&
      this.y1 == other.y1 &&
      this.x2 == other.x2 &&
      this.y2 == other.y2
    );
  }
}

module.exports = { Line };
