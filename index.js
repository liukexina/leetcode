var maxValue = function(grid) {
  const sum = [[]];
  sum[0][0] = grid[0][0]
  const n = grid[0].length;
  const m = grid.length;
  for(let i = 1 ; i < n ; i++) {
    sum[0][i] = sum[0][i-1] + grid[0][i];
  }
  for (let i = 1 ; i < m ; i++) {
    sum[i][0] = sum[i-1][0] + grid[i][0];
  }
  for(let i = 1 ; i < m ; i++) {
    for(let j = 1; j < n ; j++) {
      sum[i][j] += Math.max(sum[i-1][j], sum[i][j-1]) + grid[i][j]
    }
  }
  return sum[m-1][n-1]
};