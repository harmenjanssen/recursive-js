const sum = (collection, runningTotal = 0) =>
  !collection.length
    ? runningTotal
    : sum(collection.slice(1), collection[0] + runningTotal);

module.exports = sum;
