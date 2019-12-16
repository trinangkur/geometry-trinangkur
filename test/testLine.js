const assert = require("chai").assert;
const Line = require("../src/line");
const Point = require("../src/point");

describe("Line", function() {
  describe("toString", function() {
    it("should creat line object having the co-ordinates of two points", function() {
      let endA = { x: 0, y: 0 };
      let endB = { x: 2, y: 0 };
      let actual = new Line(endA, endB);
      actual = actual.toString();
      let expected = "[Line (0,0) to (2,0)]";
      assert.deepStrictEqual(actual, expected);
      endA = { x: 0, y: 3 };
      endB = { x: 4, y: 0 };
      actual = new Line(endA, endB);
      actual = actual.toString();
      expected = "[Line (0,3) to (4,0)]";
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
    it("should not validate if not of same class", function() {
      const endA = { x: 0, y: 0 };
      const endB = { x: 2, y: 0 };
      const line1 = new Line(endA, endB);
      const line2 = new Line(endB, endA);
      assert.isOk(line1.isEqualTo(line2));
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
    it("should get infinity for any line parallel to y-axis", function() {
      const line = new Line({ x: 0, y: 8 }, { x: 0, y: 4 });
      const actual = line.slope;
      assert.equal(actual, Infinity);
    });
  });
  describe("isParallelTo", function() {
    it("should not validate if two lines are same", function() {
      const line1 = new Line({ x: 0, y: 6 }, { x: 2, y: 7 });
      const line2 = new Line({ x: 0, y: 6 }, { x: 2, y: 7 });
      assert.isNotOk(line1.isParallelTo(line2));
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
    it("should not validate id given object is not istnace of line", function() {
      const line1 = new Line({ x: 0, y: 6 }, { x: 3, y: 8 });
      const line2 = { endA: { x: 0, y: 5 }, endB: { x: 0, y: 5 } };
      assert.isNotOk(line1.isParallelTo(line2));
    });
  });
  describe("findX", function() {
    it("should give X for given y when line is inclined and edge point is given", function() {
      const line = new Line({ x: 0, y: 6 }, { x: 3, y: 8 });
      const actual = line.findX(6);
      assert.strictEqual(actual, 0);
    });
    it("should give X in between line segement of inclined lien", function() {
      const line = new Line({ x: 0, y: 6 }, { x: 3, y: 8 });
      const actual = line.findX(7);
      assert.approximately(actual, 1.5, 0.01);
    });
    it("should give X when line is parallel to y-axis", function() {
      const line = new Line({ x: 2, y: 6 }, { x: 2, y: 8 });
      const actual = line.findX(7);
      assert.strictEqual(actual, 2);
    });
    it("should give X given line parallel to x-axis", function() {
      const line = new Line({ x: 8, y: 1 }, { x: 2, y: 1 });
      const actual = line.findX(1);
      assert.strictEqual(actual, 8);
    });
    it("should give X as NaN when out of range", function() {
      const line = new Line({ x: 1, y: 6 }, { x: 1, y: 8 });
      const actual = line.findX(9);
      assert.isNaN(actual);
    });
    it("testing isInRange using callBack", function() {
      const line = new Line({ x: 2, y: 6 }, { x: 4, y: 10 });
      assert.strictEqual(line.findX(8), 3);
    });
  });
  describe("findY", function() {
    it("should give Y for given x when line is inclined and edge point is given", function() {
      const line = new Line({ x: 0, y: 6 }, { x: 3, y: 8 });
      const actual = line.findY(3);
      assert.strictEqual(actual, 8);
    });
    it("should give Y in between line segement of inclined lien", function() {
      const line = new Line({ x: 0, y: 6 }, { x: 3, y: 8 });
      const actual = line.findY(2);
      assert.approximately(actual, 7.3, 0.1);
    });
    it("should give Y when line is parallel to x-axis", function() {
      const line = new Line({ x: 6, y: 2 }, { x: 1, y: 2 });
      const actual = line.findY(5);
      assert.strictEqual(actual, 2);
    });
    it("should give Y given line parallel to y-axis", function() {
      const line = new Line({ x: 2, y: 8 }, { x: 2, y: 1 });
      const actual = line.findY(2);
      assert.strictEqual(actual, 8);
    });
    it("should give Y as NaN when out of range", function() {
      const line = new Line({ x: 1, y: 6 }, { x: 1, y: 8 });
      const actual = line.findY(9);
      assert.isNaN(actual);
    });
  });
  describe("split", function() {
    it("should get an array of two line object splited by mid point of even length", function() {
      const line = new Line({ x: 1, y: 6 }, { x: 1, y: 8 });
      const firstHalf = new Line({ x: 1, y: 6 }, { x: 1, y: 7 });
      const secondHalf = new Line({ x: 1, y: 7 }, { x: 1, y: 8 });
      const lines = line.split();
      assert.deepStrictEqual(lines, [firstHalf, secondHalf]);
    });
    it("line having odd length", function() {
      const line = new Line({ x: 1, y: 6 }, { x: 1, y: 9 });
      const firstHalf = new Line({ x: 1, y: 6 }, { x: 1, y: 7.5 });
      const secondHalf = new Line({ x: 1, y: 7.5 }, { x: 1, y: 9 });
      const lines = line.split();
      assert.deepStrictEqual(lines, [firstHalf, secondHalf]);
    });
  });
  describe("hasPoint", function() {
    it("should validate if point is present at edge of line", function() {
      const line = new Line({ x: 1, y: 6 }, { x: 3, y: 8 });
      const point = new Point(1, 6);
      assert.isOk(line.hasPoint(point));
    });
    it("should not validat if given object is not instance of Point", function() {
      const line = new Line({ x: 1, y: 6 }, { x: 3, y: 8 });
      const point = { x: 1, y: 6 };
      assert.isNotOk(line.hasPoint(point));
    });
    it("should validate if point is present in between of line", function() {
      const line = new Line({ x: 1, y: 6 }, { x: 3, y: 8 });
      const point = new Point(2, 7);
      assert.isOk(line.hasPoint(point));
    });
    it("should validate for line parallel to x-axis", function() {
      const line = new Line({ x: 8, y: 1 }, { x: 2, y: 1 });
      const point = new Point(6, 1);
      assert.isOk(line.hasPoint(point));
    });

    it("should not validate if given point is in range but not in line", function() {
      const line = new Line({ x: 8, y: 2 }, { x: 2, y: 1 });
      const point = new Point(5, 1);
      assert.isNotOk(line.hasPoint(point));
    });
    it("should not validate if given point is not in range", function() {
      const line = new Line({ x: 8, y: 2 }, { x: 2, y: 1 });
      const point = new Point(9, 3);
      assert.isNotOk(line.hasPoint(point));
    });
  });
  describe("findPointFromStart", function() {
    it("should", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 9, y: 2 });
      assert.deepStrictEqual(line.findPointFromStart(2), { x: 3, y: 2 });
    });
  });
});
