const assert = require("chai").assert;
const { Line } = require("../src/line");
describe("line", function() {
  describe("toString", function() {
    it("should creat line object having the co-ordinates of two points", function() {
      let endA = { x: 0, y: 0 };
      let endB = { x: 2, y: 0 };
      let actual = new Line(endA, endB);
      actual = actual.toString();
      let expected = "Line (0, 0)(2, 0)";
      assert.deepStrictEqual(actual, expected);
      endA = { x: 0, y: 3 };
      endB = { x: 4, y: 0 };
      actual = new Line(endA, endB);
      actual = actual.toString();
      expected = "Line (0, 3)(4, 0)";
      assert.deepStrictEqual(actual, expected);
    });
  });
  describe("isEqualToTo", function() {
    it("should validate if properties of given line object is equal to its self", function() {
      let endA = { x: 0, y: 0 };
      let endB = { x: 2, y: 0 };
      const line1 = new Line(endA, endB);
      const line2 = new Line(endA, endB);
      actual = line1.isEqualTo(line2);
      assert.strictEqual(actual, true);
    });
    it("should not validate if properties of given line object is not equal to its self", function() {
      const line1 = new Line({ x: 0, y: 0 }, { x: 1, y: 3 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 1, y: 3 });
      actual = line1.isEqualTo(line2);
      assert.strictEqual(actual, false);
    });
    it("should not validate if not of same class", function() {
      const endA = { x: 0, y: 0 };
      const endB = { x: 2, y: 0 };
      const line1 = new Line(endA, endB);
      const line2 = { endA: { x: 0, y: 0 }, endB: { x: 2, y: 0 } };
      actual = line1.isEqualTo(line2);
      assert.strictEqual(actual, false);
    });
  });
  describe("length", function() {
    it("should give length of line parallel to x-axis", function() {
      const line = new Line({ x: 0, y: 0 }, { x: 2, y: 0 });
      const actual = line.length;
      assert.strictEqual(actual, 2);
    });
    it("should give length of line parallel to y-axis", function() {
      const line = new Line({ x: 0, y: 3 }, { x: 0, y: 7 });
      const actual = line.length;
      assert.strictEqual(actual, 4);
    });
    it("should give length of inclined line as well", function() {
      const line = new Line({ x: 0, y: 3 }, { x: 4, y: 0 });
      const actual = line.length;
      assert.strictEqual(actual, 5);
    });
    it("should give length having float value", function() {
      const line = new Line({ x: 0, y: 3 }, { x: 5, y: 0 });
      const actual = line.length;
      assert.approximately(actual, 5.83, 0.1);
    });
    it("should give length 0 if both points are same", function() {
      const line = new Line({ x: 0, y: 3 }, { x: 0, y: 3 });
      const actual = line.length;
      assert.strictEqual(actual, 0);
    });
  });
  describe("slope", function() {
    it("should get slope parallel to x-axis", function() {
      const line = new Line({ x: 5, y: 1 }, { x: 6, y: 1 });
      const actual = line.slope;
      assert.strictEqual(actual, 0);
    });
    it("should get slope parallel to y-axis", function() {
      const line = new Line({ x: 0, y: 4 }, { x: 0, y: 8 });
      const actual = line.slope;
      assert.equal(actual, Infinity);
    });
    it("should get slope of inclined lines", function() {
      const line = new Line({ x: 0, y: 6 }, { x: 1, y: 7 });
      const actual = line.slope;
      assert.strictEqual(actual, 1);
    });
    it("should get slope having float values as well", function() {
      const line = new Line({ x: 0, y: 6 }, { x: 2, y: 7 });
      const actual = line.slope;
      assert.approximately(actual, 0.5, 0.01);
    });
    it("should get NaN if one point is given", function() {
      const line = new Line({ x: 0, y: 6 }, { x: 0, y: 6 });
      const actual = line.slope;
      assert.isNaN(actual);
    });
  });
  describe("isParallelTo", function() {
    it("should validate if two lines are same", function() {
      const line1 = new Line({ x: 0, y: 6 }, { x: 2, y: 7 });
      const line2 = new Line({ x: 0, y: 6 }, { x: 2, y: 7 });
      assert.isOk(line1.isParallelTo(line2));
    });
    it("should validate if two lines are differen and parallel", function() {
      const line1 = new Line({ x: 0, y: 6 }, { x: 3, y: 8 });
      const line2 = new Line({ x: -1, y: 5 }, { x: 2, y: 7 });
      assert.isOk(line1.isParallelTo(line2));
    });
    it("should not validate if two lines not parallel", function() {
      const line1 = new Line({ x: 0, y: 6 }, { x: 3, y: 8 });
      const line2 = new Line({ x: 0, y: 5 }, { x: 2, y: 7 });
      assert.isNotOk(line1.isParallelTo(line2));
    });
    it("should not validate if point is given", function() {
      const line1 = new Line({ x: 0, y: 6 }, { x: 3, y: 8 });
      const line2 = new Line({ x: 0, y: 5 }, { x: 0, y: 5 });
      assert.isNotOk(line1.isParallelTo(line2));
    });
  });
});
