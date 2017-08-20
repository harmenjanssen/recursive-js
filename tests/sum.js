const sum = require("../lib/sum");
const assert = require("assert");

describe("sum", () => {
  it("sums numbers", () => assert.equal(sum([10, 100, 90]), 200));

  it("sums negative numbers", () => assert.equal(sum([-10, -10]), -20));
});
