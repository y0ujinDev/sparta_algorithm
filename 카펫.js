function solution(brown, yellow) {
	const total = brown + yellow;
	for (let height = 3; height <= total / height; height++) {
		const width = total / height;
		if (total % height === 0 && (width - 2) * (height - 2) === yellow) {
			return [width, height];
		}
	}
}

console.log(solution(10, 2)); // [4, 3]
