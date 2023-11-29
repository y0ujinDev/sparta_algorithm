const solution = (n) =>
  [...Array(n + 1).keys()].reduce((a, b) => (n % b ? a : a + b), 0);
