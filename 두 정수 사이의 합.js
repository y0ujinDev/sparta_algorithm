function solution(a, b) {
  let answer = 0;
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  for (let i = min; i <= max; i++) {
    answer += i;
  }

  return answer;
}

console.log(3, 5);
console.log(3, 3);
console.log(5, 3);
