define(["actualSum"], function ({ actualSum }) {
  function sum(a, b) {
    return actualSum(a, b);
  }

  return { sum };
});
