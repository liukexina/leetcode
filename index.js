var lengthOfLongestSubstring = function(s) {
  let dic = new Map();
  let i = -1, res = 0;
  for(let j = 0; j < s.length; j++) {
      if(dic.get(s[j]) !== undefined) {
        i = Math.max(i, dic.get(s[j])); // 更新左指针 i
      }
      dic.set(s[j], j); // 哈希表记录
      res = Math.max(res, j - i); // 更新结果
  }
  return res;
}