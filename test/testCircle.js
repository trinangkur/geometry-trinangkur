const Circle = require("../src/circle");
const assert = require("chai").assert;

describe("Circle", function() {
  describe("toString", function() {
    it("should give string representation of given circle ", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      assert.strictEqual(circle.toString(), "[Circle @(1,2) radius 5]");
    });
  });
  describe("isEqualTo", function() {
    it("should validate for a given circle", function() {
      const circle1 = new Circle({ x: 1, y: 2 }, 5);
      const circle2 = new Circle({ x: 1, y: 2 }, 5);
      assert.isOk(circle1.isEqualTo(circle2));
    });
    it("should not validate if Circle object is not given", function() {
      const circle1 = new Circle({ x: 1, y: 2 }, 5);
      const circle2 = { centre: { x: 1, y: 2 }, radius: 5 };
      assert.isNotOk(circle1.isEqualTo(circle2));
    });
    it("should not validate if Circle object has different centre", function() {
      const circle1 = new Circle({ x: 1, y: 2 }, 5);
      const circle2 = new Circle({ x: 2, y: 2 }, 5);
      assert.isNotOk(circle1.isEqualTo(circle2));
    });
  });
});
