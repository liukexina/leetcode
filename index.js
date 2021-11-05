var twoSum = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;
  while(i < j) {
    let cha = target - nums[i];
    if(nums[j] > cha) {
      j--
    } else if(nums[j] < cha) {
      i++;
    } else {
      break;
    }
  }
  return [nums[i],nums[j]]
}