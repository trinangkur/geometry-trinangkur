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
    for (let key in other) {
      if (other[key] != this[key]) {
        return false;
      }
      return true;
    }
  }
}

module.exports = { Line };
