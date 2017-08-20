const range = (max, n = 0) => n >= max ? [] : [n].concat(range(max, n + 1));

module.exports = range;
