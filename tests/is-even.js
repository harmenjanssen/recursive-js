const isEven = require("../lib/is-even");
const assert = require("assert");

describe("isEven", () => {
  it("determines odd and even, starting from 0", () => assert.ok(isEven(0)));

  it("recognizes even numbers", () => assert.ok(isEven(2) && isEven(490)));

  it("recognizes odd numbers", () =>
    assert.ok(!isEven(1) && !isEven(3) && !isEven(99)));
});
