var merge = function (intervals) {
  if (intervals.length === 1) return intervals;
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  let ans = [];
  for (let i = 0; i < intervals.length; ) {
    let t = intervals[i][1];
    let j = i + 1;
    while (j < intervals.length && intervals[j][0] <= t) {
      t = Math.max(t, intervals[j][1]);
      j++;
    }
    ans.push([intervals[i][0], t]);
    i = j;
  }
  return ans;
};
