const Rectangle = require("../src/rectangle");
const assert = require("assert");

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
    describe("perimeter", function() {
      it("should give perimeter for inclined diagonal", function() {
        const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
        assert.strictEqual(rectangle.perimeter, 6);
      });
    });
  });
});
