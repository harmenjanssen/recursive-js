const reverse = require("../lib/reverse");
const assert = require("assert");

describe("reverse", () => {
  it("should reverse an array", () =>
    assert.deepEqual(reverse(["a", "b", "c", "d", "e"]), [
      "e",
      "d",
      "c",
      "b",
      "a"
    ]));

  it("can handle empty arrays", () => assert.deepEqual(reverse([]), []));

  it("can handle single-item arrays", () =>
    assert.deepEqual(reverse(["hello"]), ["hello"]));

  it("can handle two-item arrays", () =>
    assert.deepEqual(reverse(["a", "b"]), ["b", "a"]));
});
