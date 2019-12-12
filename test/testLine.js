const assert = require("assert");
const { Line } = require("../src/line");
describe("line", function() {
  describe("toString", function() {
    it("should creat line object having the co-ordinates of two points", function() {
      let actual = new Line(0, 0, 2, 0);
      actual = actual.toString();
      let expected = "Line (0, 0)(2, 0)";
      assert.deepStrictEqual(actual, expected);
      actual = new Line(0, 3, 4, 0);
      actual = actual.toString();
      expected = "Line (0, 3)(4, 0)";
      assert.deepStrictEqual(actual, expected);
    });
  });
  describe("isEqual", function() {
    it("should validate if properties of given line object is equal to its self", function() {
      let actual = new Line(0, 0, 1, 3);
      actual = actual.isEqual({ x1: 0, y1: 0, x2: 1, y2: 3 });
      assert.strictEqual(actual, true);
    });
    it("should not validate if properties of given line object is not equal to its self", function() {
      let actual = new Line(1, 0, 1, 3);
      actual = actual.isEqual({ x1: 0, y1: 0, x2: 1, y2: 3 });
      assert.strictEqual(actual, false);
    });
  });
});
