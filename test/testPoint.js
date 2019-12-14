const { Point } = require("../src/point");
const assert = require("chai").assert;

describe("funcName", function() {
  describe("toString", function() {
    it("should get string of given positive points", function() {
      const point = new Point(2, 3);
      const actual = point.toString();
      assert.strictEqual(actual, "[Point @(2,3)]");
    });
    it("should get string of given negative points", function() {
      const point = new Point(-2, 3);
      const actual = point.toString();
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
  describe("isEqual", function() {
    it("should validate if two poitns are equal", function() {
      const point1 = new Point(2, 3);
      const point2 = new Point(2, 3);
      assert.isOk(point1.isEqual(point2));
    });
    it("should not validate if two points are not equal", function() {
      const point1 = new Point(2, 3);
      const point2 = new Point(3, 2);
      assert.isNotOk(point1.isEqual(point2));
    });
    it("should not validate when given instance are diff", function() {
      const point1 = new Point(2, 3);
      assert.isNotOk(point1.isEqual({ x: 2, y: 3 }));
    });
  });
  describe("clone", function() {
    it("should return object having same values and same instance", function() {
      const point1 = new Point(2, 3);
      const point2 = point1.clone();
      assert.isOk(point1.isEqual(point2));
    });
    it("should not have same reference in clone", function() {
      const point1 = new Point(2, 3);
      const point2 = point1.clone();
      assert.notStrictEqual(point1, point2);
    });
  });
});
