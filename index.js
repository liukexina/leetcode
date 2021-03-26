var search = function (nums, target) {
	let i = 0;
	let j = nums.length - 1;
	while (i <= j) {
		let m = Math.ceil((i + j) / 2);
		if (nums[m] <= target) i = m + 1;
		else j = m - 1;
	}
	let right = i;
	i = 0;
	j = nums.length - 1;
	while (i <= j) {
		let m = Math.ceil((i + j) / 2);
		if (nums[m] < target) i = m + 1;
		else j = m - 1;
	}
	let left = j;
	return right - left - 1;
};
