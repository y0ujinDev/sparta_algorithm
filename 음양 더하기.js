const solution = (a, s) =>
  a.reduce((c, v, i) => (s[i] ? c + v : c - v), 0);
