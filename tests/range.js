const range = require("../lib/range");
const assert = require("assert");

describe("range", () => {
  it("it creates an containing the range", () =>
    assert.deepEqual(range(5), [0, 1, 2, 3, 4]));

  it("it accepts a different starting point", () =>
    assert.deepEqual(range(5, 3), [3, 4]));
});
