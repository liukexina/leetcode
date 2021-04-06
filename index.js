var isStraight = function (nums) {
	// const repeat = [];
	// let max = 0, min = 14;
	// for (let num of nums) {
	//     if (num == 0) continue;
	//     max = Math.max(max, num);
	//     min = Math.min(min, num);
	//     if (repeat.indexOf(num) !== -1) return false; // 若有重复，提前返回 false
	//     repeat.push(num);
	// }
	// return max - min < 5;

	let joker = 0;
	nums.sort(function (a, b) {
		return a - b;
	});
	for (let i = 0; i < 4; i++) {
		if (nums[i] == 0) joker++;
		else if (nums[i] == nums[i + 1]) return false;
	}
	return nums[4] - nums[joker] < 5; // 最大牌 - 最小牌 < 5 则可构成顺子
};
