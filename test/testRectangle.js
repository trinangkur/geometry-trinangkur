const Rectangle = require("../src/rectangle");
const assert = require("chai").assert;

describe("rectange", function() {
  describe("toString", function() {
    it("should get string representation of given rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      assert.strictEqual(rectangle.toString(), "[Rectangle (1,1) to (2,3)]");
    });
  });
  describe("area", function() {
    it("should get area of a given rectangle of inclined diagonal", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      assert.strictEqual(rectangle.area, 2);
    });
    it("should get area of given diagonal paralle to x-axis", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 1 });
      assert.strictEqual(rectangle.area, 0);
    });
    it("should get area of given diagonal paralle to y-axis", function() {
      const rectangle = new Rectangle({ x: 1, y: 8 }, { x: 1, y: 1 });
      assert.strictEqual(rectangle.area, 0);
    });
  });
  describe("perimeter", function() {
    it("should give perimeter for inclined diagonal", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      assert.strictEqual(rectangle.perimeter, 6);
    });
    it("should get perimeter of given diagonal paralle to x-axis", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 1 });
      assert.strictEqual(rectangle.perimeter, 8);
    });
    it("should get perimeter of given diagonal paralle to y-axis", function() {
      const rectangle = new Rectangle({ x: 1, y: 8 }, { x: 1, y: 1 });
      assert.strictEqual(rectangle.perimeter, 14);
    });
  });
  describe("isEqual", function() {
    it("should validate for given same rectangle...", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const rectangle2 = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      assert.ok(rectangle1.isEqualTo(rectangle2));
    });
    it("should not vladate if given object is not a rectangle...", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const rectangle2 = { vertexA: { x: 1, y: 1 }, vertexC: { x: 2, y: 3 } };
      assert.isNotOk(rectangle1.isEqualTo(rectangle2));
    });
  });
});
