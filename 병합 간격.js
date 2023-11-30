/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  return intervals.reduce((merged, current) => {
    if (!merged.length || merged[merged.length - 1][1] < current[0]) {
      merged.push(current);
    } else {
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        current[1]
      );
    }

    return merged;
  }, []);
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
