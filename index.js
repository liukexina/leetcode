var shortestToChar = function (s, c) {
	// const sArr = s.split('')
	// const result = []
	// const indexArr = [...sArr.entries()]
	//   .filter(([, x]) => x === c)
	//   .map(([idx]) => idx)
	// for (const [index, iterator] of sArr.entries()) {
	//   const l = indexArr
	//     .map((item) => Math.abs(index - item))
	//     .sort((a, b) => a - b)
	//   result.push(l[0])
	// }
	// return result
	let N = s.length;
	let ans = new Array(N);
	let prev = -10400;

	for (let i = 0; i < N; ++i) {
		if (s[i] == c) prev = i;
		ans[i] = i - prev;
	}

	prev = 10400;
	for (let i = N - 1; i >= 0; --i) {
		if (s[i] == c) prev = i;
		ans[i] = Math.min(ans[i], prev - i);
	}

	return ans;
};
