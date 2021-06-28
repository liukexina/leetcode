var getSmallestString = function (n, k) {
	// const arr = new Array(n)
	// let ans = arr.fill('a')
	// while (n > 0) {
	//   if (k - 26 >= n - 1) {
	//     ans[n - 1] = obj[26]
	//     k -= 26
	//   } else if (k > n) {
	//     ans[n - 1] = obj[1 + k - n];
	//     k -= k - n + 1
	//   } else {
	//     break
	//   }
	//   n--
	// }
	// return ans.join('')

	// k - n 每一位都是a的时候还差多少;i是下一个要进行填充的位
	let res = Array(n).fill('a'),
		remain = k - n,
		i = n - 1;
	while (remain) {
		if (remain > 25) {
			// 当前位无法填充完
			remain -= 25;
			res[i] = 'z';
			i--;
		} else {
			// 当前位可以填充完剩余的值
			res[i] = String.fromCharCode(97 + remain);
			remain = 0;
		}
	}
	return res.join('');
};
