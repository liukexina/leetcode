var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let arr = [];
  for (let k = 0; k < nums.length - 2; k++) {
    if (nums[k] > 0) break;
    if (k > 0 && nums[k - 1] === nums[k]) continue;
    let i = k + 1;
    let j = nums.length - 1;
    let target = 0 - nums[k];
    while (i < j) {
      sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        arr.push([nums[k], nums[i], nums[j]]);
        while (i < j && nums[i] == nums[i + 1]) i++;
        while (i < j && nums[j] == nums[j - 1]) j--;
        i++;
        j--;
      } else if (sum < 0) {
        i++;
      } else {
        j--;
      }
    }
  }

  return arr;
};
