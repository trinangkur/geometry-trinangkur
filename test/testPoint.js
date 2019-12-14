const { Point } = require("../src/point");
const assert = require("chai").assert;

describe("funcName", function() {
  describe("toString", function() {
    it("should get string of given positive points", function() {
      const point = new Point(2, 3);
      const actual = point.toString;
      assert.strictEqual(actual, "[Point @(2,3)]");
    });
    it("should get string of given negative points", function() {
      const point = new Point(-2, 3);
      const actual = point.toString;
      assert.strictEqual(actual, "[Point @(-2,3)]");
    });
  });
  describe("visit", function() {
    it("should get value acording to given funciton like add", function() {
      const point = new Point(2, 3);
      const actual = point.visit((x, y) => x + y);
      assert.strictEqual(actual, 5);
    });
    it("should get value for funciton given multiplication", function() {
      const point = new Point(2, 3);
      const actual = point.visit((x, y) => x * y);
      assert.strictEqual(actual, 6);
    });
    it("should get value for funciton given pow", function() {
      const point = new Point(2, 3);
      const actual = point.visit((x, y) => x ** y);
      assert.strictEqual(actual, 8);
    });
  });
});
