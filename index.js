var maxProfit = function (prices) {
  if (prices.length === 0) return 0;
  const dp = [0];
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i - 1]);
    dp[i] = Math.max(dp[i - 1], prices[i] - min);
  }
  return dp[prices.length - 1];
};
