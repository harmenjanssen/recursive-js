const reverse = ([head, ...rest]) =>
  !head ? [] : reverse([...rest]).concat([head]);

module.exports = reverse;
