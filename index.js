var isValid = function (s) {
  const map = {
    ")": "(",
    "}": "{",
    "]": "["
  };

  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      if (arr[0] !== map[s[i]]) return false;
      arr.shift();
    } else {
      arr.unshift(s[i]);
    }
  }

  return !arr.length;
};
