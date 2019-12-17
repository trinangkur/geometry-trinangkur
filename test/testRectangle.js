const Rectangle = require("../src/rectangle");
const assert = require("assert");

describe("rectange", function() {
  describe("toString", function() {
    it("should get string representation of given rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      assert.strictEqual(rectangle.toString(), "[Rectangle (1,1) to (2,3)]");
    });
  });
});
