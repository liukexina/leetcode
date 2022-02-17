var permute = function (nums) {
  const result = [];
  function dfs(curArr, arr) {
    if (curArr.length === 0) {
      result.push(arr);
      return;
    }
    for (let i = 0; i < curArr.length; i++) {
      const item = [...curArr];
      item.splice(i, 1);
      dfs(item, [...arr, curArr[i]]);
    }
  }

  dfs(nums, []);
  return result;
};
