function cuttingRope(n) {
  let maxnum = 1;
	// start 开始段
	// temp 乘积
	// n 剩余段
  function dfs(start, temp, n) {
    if (n == 1 || n == 0) {
      maxnum = Math.max(maxnum, temp);
    }

    for (let i = 0; i < n - 1; i++) {
      dfs(start + i, temp * (start + i), n - start - i);
    }
  }
  dfs(1, 1, n);
  return maxnum;
}
