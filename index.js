var sortColors = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let index = 0;

  while (index <= r) {
    if (nums[index] === 0) {
      bian(l, index);
      l++;
      index++;
    } else if (nums[index] === 2) {
      bian(r, index);
      r--;
    } else {
      index++;
    }
  }

  function bian(i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  return nums;
};
