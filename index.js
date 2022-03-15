var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  let set = new Set(nums);

  let maxLength = 1;
  for (const iterator of set) {
    if (set.has(iterator - 1)) continue;
    let currentNum = iterator;
    let currentLength = 1;

    while (set.has(currentNum + 1)) {
      currentNum += 1;
      currentLength += 1;
    }

    maxLength = Math.max(maxLength, currentLength);
  }
  return maxLength;
};
