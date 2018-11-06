/**
 * Polyfill for Array.prototype.find
 */
const arrayFind = (predicate, [x, ...xs]) => !x
  ? undefined
  : predicate(x)
    ? x
    : arrayFind(predicate, xs);

module.exports = arrayFind;
