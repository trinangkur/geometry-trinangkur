const assert = require("assert");
const { Line } = require("../src/line");
describe("line", function() {
  describe("toString", function() {
    it("should creat line object having the co-ordinates of two points", function() {
      let actual = new Line(0, 0, 2, 0);
      actual = actual.toString();
      let expected = "Line {x1: 0, y1: 0, x2: 2, y2: 0}";
      assert.deepStrictEqual(actual, expected);
    });
  });
});
