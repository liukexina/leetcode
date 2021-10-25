var search = function (nums, target) {
  function getRight(target) {
    let i = 0;
    let j = nums.length - 1;
    // 右
    while(i <= j) {
      let r = Math.floor((i+j)/2);
      if(nums[r] <= target) {
        i = r + 1;
      } else {
        j = r - 1;
      }
    }
    return i;
  }
  return getRight(target) - getRight(target-1)
};