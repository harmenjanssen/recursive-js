const reverse = ([first, second, ...rest]) =>
  !first
    ? []
    : !second
        ? [first]
        : !rest.length
            ? [second, first]
            : reverse([second, ...rest]).concat([first]);

module.exports = reverse;
