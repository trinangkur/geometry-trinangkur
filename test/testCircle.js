const Circle = require("../src/circle");
const Point = require("../src/point");
const assert = require("chai").assert;

describe("Circle", function() {
  describe("toString", function() {
    it("should give string representation of given circle ", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      assert.strictEqual(circle.toString(), "[Circle @(1,2) radius 5]");
    });
    it("should not change properties externaly", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      circle.centre.x = 5;
      circle.radius = 10;
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
    it("should not validate if Circle object has different radius", function() {
      const circle1 = new Circle({ x: 1, y: 2 }, 5);
      const circle2 = new Circle({ x: 1, y: 2 }, 4);
      assert.isNotOk(circle1.isEqualTo(circle2));
    });
  });
  describe("area", function() {
    it("should get area for radius given more than zero", function() {
      const circle = new Circle({ x: 0, y: 0 }, 7);
      assert.strictEqual(circle.area, 154);
    });
    it("should get area for radius given zero", function() {
      const circle = new Circle({ x: 0, y: 0 }, 0);
      assert.strictEqual(circle.area, 0);
    });
  });
  describe("perimeter", function() {
    it("should get perimeter for given radius zero", function() {
      const circle = new Circle({ x: 0, y: 0 }, 0);
      assert.strictEqual(circle.perimeter, 0);
    });
    it("should get perimeter for given radius more than zero", function() {
      const circle = new Circle({ x: 0, y: 0 }, 7);
      assert.strictEqual(circle.perimeter, 44);
    });
  });
  describe("hasPoint", function() {
    it("should validate if given point is on perimeter of circle", function() {
      const circle = new Circle({ x: 0, y: 3 }, 5);
      const point = new Point(4, 0);
      assert.isOk(circle.hasPoint(point));
    });
    it("should validate for circle having area zero and centre is given", function() {
      const circle = new Circle({ x: 0, y: 0 }, 0);
      const point = new Point(0, 0);
      assert.isOk(circle.hasPoint(point));
    });
    it("should not validate if point is inside perimeter", function() {
      const circle = new Circle({ x: 0, y: 3 }, 5);
      const point = new Point(0, 4);
      assert.isNotOk(circle.hasPoint(point));
    });
    it("should not validate if point is outsid perimeter", function() {
      const circle = new Circle({ x: 0, y: 3 }, 5);
      const point = new Point(0, 6);
      assert.isNotOk(circle.hasPoint(point));
    });
    it("should not validate if given objects instance is not point", function() {
      const circle = new Circle({ x: 0, y: 3 }, 5);
      const point = { x: 0, y: 4 };
      assert.isNotOk(circle.hasPoint(point));
    });
  });
  describe("moveTo", function() {
    it("should creat a new circle object of given centre", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const circle1 = circle.moveTo({ x: 1, y: 1 });
      const circle2 = new Circle({ x: 1, y: 1 }, 5);
      assert.deepStrictEqual(circle1, circle2);
    });
    it("should creat a new circle object of given  same centre as well", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const circle1 = circle.moveTo({ x: 0, y: 0 });
      assert.deepStrictEqual(circle1, circle);
      assert.notStrictEqual(circle1, circle);
    });
  });
  describe("covers", function() {
    it("should not validate if given point is on perimeter of circle", function() {
      const circle = new Circle({ x: 0, y: 3 }, 5);
      const point = new Point(4, 0);
      assert.isNotOk(circle.covers(point));
    });
    it("should validate if given point is inside perimeter of circle", function() {
      const circle = new Circle({ x: 0, y: 3 }, 5);
      const point = new Point(3, 0);
      assert.isOk(circle.covers(point));
    });
    it("should not validate if given point is outside perimeter of circle", function() {
      const circle = new Circle({ x: 0, y: 3 }, 5);
      const point = new Point(6, 0);
      assert.isNotOk(circle.covers(point));
    });
    it("should not validate if given objects instance is not point", function() {
      const circle = new Circle({ x: 0, y: 3 }, 5);
      const point = { x: 0, y: 4 };
      assert.isNotOk(circle.covers(point));
    });
  });
});
