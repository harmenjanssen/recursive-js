/*
Pascal's Triangle:

     1
    1 1
   1 2 1
  1 3 3 1
 1 4 6 4 1

*/

const unit = (x, y) =>
  x === 0
  ? 1
  : x === y
  ? 1
  : unit(x - 1, y - 1) + unit(x, y - 1);

const row = (y, acc = []) =>
  acc.length === y + 1
    ? acc
    : row(y, acc.concat([unit(acc.length, y)]));

const triangle = (depth, acc = []) =>
  acc.length === depth
    ? acc
    : triangle(depth, acc.concat([row(acc.length)]));

const render = (depth, acc = '') =>
  triangle(depth).map(
    (x, i) => `${' '.repeat(depth - i)}${x.join(' ')}`
  ).join("\n");

module.exports = {
  triangle,
  render
};
