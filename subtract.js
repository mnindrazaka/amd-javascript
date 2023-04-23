define(["actualSubtract"], function ({ actualSubtract }) {
  function subtract(a, b) {
    return actualSubtract(a, b);
  }

  return { subtract };
});
