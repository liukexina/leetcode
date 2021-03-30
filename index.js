let res, k;

var kthLargest = function (root, k) {
	function dfs(root) {
		if (root == null) return;
		dfs(root.right);
		if (k == 0) return;
		if (--k == 0) res = root.val;
		dfs(root.left);
	}

	this.k = k;
	dfs(root);
	return res;
};
