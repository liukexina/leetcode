var validateStackSequences = function(pushed, popped) {
  const arr = [];
  let i = 0;
  for (const iterator of pushed) {
    arr.push(iterator);
    while(arr.length && arr[arr.length-1] === popped[i]) {
      arr.pop();
      i++;
    }
  }
  return !arr.length
};
