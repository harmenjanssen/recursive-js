const reverse = require("../lib/reverse");
const assert = require("assert");

describe("reverse", () => {
  it("can handle empty arrays", () => assert.deepEqual(reverse([]), []));

  it("can handle single-item arrays", () =>
    assert.deepEqual(reverse(["hello"]), ["hello"]));

  it("reverses two-item arrays", () =>
    assert.deepEqual(reverse(["a", "b"]), ["b", "a"]));

  it("reverses longer arrays", () =>
    assert.deepEqual(reverse(["a", "b", "c", "d", "e"]), [
      "e",
      "d",
      "c",
      "b",
      "a"
    ]));
});
