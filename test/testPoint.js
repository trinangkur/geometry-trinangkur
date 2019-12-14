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
});
