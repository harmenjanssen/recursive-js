const arrayFind = require("../lib/array-find");
const isEven = require("../lib/is-even");
const assert = require("assert");

describe("arrayFind", () => {

  const numbers = [1, 2, 3, 4, 5, 6];

  it("Finds the first match", () => assert.equal(arrayFind(isEven, numbers), 2));
  it("Might not find a match at all", () => assert.equal(arrayFind(isEven, [3, 5, 7, 9]), undefined));
  it("Especially won't find anything when the array is empty", () => assert.equal(arrayFind(isEven, []), undefined));

});
