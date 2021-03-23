var maxSubArray = function (nums) {
	const arr = [nums[0]];
	let max = nums[0];
	for (let i = 1; i < nums.length; i++) {
		if (arr[i - 1] <= 0) {
			arr[i] = nums[i] + 0;
		} else {
			arr[i] = arr[i - 1] + nums[i];
		}
		max = Math.max(arr[i], max);
	}
	console.log(arr);
	return max;
};
