const Rectangle = require("../src/rectangle");
const Point = require("../src/point");
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
    it("should not vladate if given rectangle has different point...", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const rectangle2 = new Rectangle({ x: 0, y: 1 }, { x: 2, y: 3 });
      assert.isNotOk(rectangle1.isEqualTo(rectangle2));
    });
    it("should vladate if given rectangle has altered diagonal..", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const rectangle2 = new Rectangle({ x: 2, y: 3 }, { x: 1, y: 1 });
      assert.isOk(rectangle1.isEqualTo(rectangle2));
    });
    it("should vladate if given rectangle has other diagonal of same rectangle...", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const rectangle2 = new Rectangle({ x: 2, y: 1 }, { x: 1, y: 3 });
      assert.isOk(rectangle1.isEqualTo(rectangle2));
    });
  });
  describe("hasPoint", function() {
    it("should validate if given point is on vertex of rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const point = new Point(1, 1);
      assert.isOk(rectangle.hasPoint(point));
    });
    it("should validate if the given point is on the upper edge", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 5 });
      const point = new Point(2, 5);
      assert.ok(rectangle.hasPoint(point));
    });
    it("should validate if the given point is on the lower edge", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 5 });
      const point = new Point(2, 0);
      assert.ok(rectangle.hasPoint(point));
    });
    it("should validate if the given point is on the left edge", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 5 });
      const point = new Point(0, 2);
      assert.ok(rectangle.hasPoint(point));
    });
    it("should validate if the given point is on the right edge", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 5 });
      const point = new Point(3, 3);
      assert.ok(rectangle.hasPoint(point));
    });
    it("should invalidate if the given point is outside the rectangle", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 5 });
      const point = new Point(11, 33);
      assert.isNotOk(rectangle.hasPoint(point));
    });
    it("should invalidate if the given point is inside the rectangle", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 5 });
      const point = new Point(1, 1);
      assert.isNotOk(rectangle.hasPoint(point));
    });
    it("should invalidate if the given object is not a point", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 5 });
      const point = { x: 2, y: 3 };
      assert.isNotOk(rectangle.hasPoint(point));
    });
  });
  describe("covers", function() {
    it("should validate if given point is inside rectangle", function() {
      const rectangle = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 5 });
      const point = new Point(1, 1);
      assert.isOk(rectangle.covers(point));
    });
  });
});
