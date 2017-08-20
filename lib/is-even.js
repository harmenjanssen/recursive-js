const isEven = n => n === 0 ? true : !isEven(n - 1);

module.exports = isEven;
