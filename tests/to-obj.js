const toObj = require("../lib/to-obj");
const assert = require("assert");

describe("toObj", () => {
  it("creates an object when given an array of keys and values", () =>
    assert.deepEqual(toObj(["foo", "data", "baz"], ["bar", [1, 2, 3], true]), {
      foo: "bar",
      data: [1, 2, 3],
      baz: true
    }));

  it("ignores superfluous values", () =>
    assert.deepEqual(toObj(["foo", "data"], ["bar", [1, 2, 3], true]), {
      foo: "bar",
      data: [1, 2, 3]
    }));
});
