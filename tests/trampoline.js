const trampoline = require("../lib/trampoline");
const assert = require("assert");

function trampoline_alternative(f) {
    while (f && f instanceof Function) {
        f = f.apply(f.context, f.args);
    }
    return f;
}

describe("trampoline", () => {

  const count = trampoline(
    recur => (to, from = 0) =>
        to === from
          ? from
          : recur(to, from + 1)
  );

  const count_trampoline = to => {
    const go = (to, acc) =>
      to === acc
        ? acc
        : go.bind(null, to, acc + 1);
    return trampoline_alternative(go.bind(null, to, 0));
  };

  it("Won't blow up the stack [beautiful 😍]", () => assert.equal(count(1e6), 1e6));
  it("Won't blow up the stack [alternative]", () => assert.equal(count_trampoline(1e6), 1e6));
});
