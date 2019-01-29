module.exports = f =>
  (...args) => {
    const recur = (...args) => () => g(...args);
    const g = f(recur);
    let result = g(...args);
    while (result && result instanceof Function) {
      result = result();
    }
    return result;
  };
