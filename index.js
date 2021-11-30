function reversePairs(nums) {
  let tmp = new Array(nums.length);
  return mergeSort(0, nums.length - 1);

  function mergeSort(l, r) {
    // 终止条件
    if (l >= r) return 0;
    // 递归划分
    let m = Math.floor((l + r) / 2);
    let res = mergeSort(l, m) + mergeSort(m + 1, r);
    // 合并阶段
    let i = l,
      j = m + 1;
    for (let k = l; k <= r; k++) tmp[k] = nums[k];
    for (let k = l; k <= r; k++) {
      if (i == m + 1) nums[k] = tmp[j++];
      else if (j == r + 1 || tmp[i] <= tmp[j]) nums[k] = tmp[i++];
      else {
        nums[k] = tmp[j++];
        res += m - i + 1; // 统计逆序对
      }
    }
    return res;
  }
}
