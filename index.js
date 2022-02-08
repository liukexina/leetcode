var longestPalindrome = function (s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let str = s.substring(i, j);
      if (
        str === str.split("").reverse().join("") &&
        str.length > result.length
      ) {
        result = str;
      }
    }
  }
  return result;
};
