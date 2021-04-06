var lastRemaining = function (n, m) {
	// let arr = [];
	// let i;
	// for (i = 0; i < n; i++) {
	//     arr.push(i)
	// }
	// i = 0;
	// while (arr.length !== 1) {
	//     i = (i + m - 1) % arr.length;
	//     arr.splice(i, 1)
	// }
	// return arr[0]

	let ans = 0;
	// 最后一轮剩下2个人，所以从2开始反推
	for (let i = 2; i <= n; i++) {
		ans = (ans + m) % i;
	}
	return ans;
};
