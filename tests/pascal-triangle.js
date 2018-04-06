const { triangle, render } = require("../lib/pascal-triangle");
const assert = require("assert");

describe("triangle", () => {
  it("can generate Pascal's triangle", () => {
    assert.deepEqual(
      triangle(5),
      [
        [1],
        [1, 1],
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1]
      ]
    );
  });
});

describe("render", () => {
  it("can render Pascal's triangle", () => {
    assert.equal(
      render(5),
`     1
    1 1
   1 2 1
  1 3 3 1
 1 4 6 4 1`
    );
  });
});
