const toObj = (keys, values, index = keys.length - 1) =>
  typeof keys[index] === "undefined"
    ? {}
    : Object.assign(toObj(keys, values, index - 1), {
        [keys[index]]: values[index]
      });

module.exports = toObj;
