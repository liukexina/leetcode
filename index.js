var treeToDoublyList = function (root) {
  let index = 0;
  dfs(root);

  while (index < arr.length) {
    arr[index].left = index !== 0 ? arr[index - 1] : arr[arr.length - 1];
    arr[index].right = index !== arr.length - 1 ? arr[index + 1] : arr[0];
    index++;
  }
  return arr[0];
  function dfs(root) {
    if (root === null) return;
    dfs(root.left);
    arr.push(root);
    dfs(root.right);
  }
};
