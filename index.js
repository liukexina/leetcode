var mirrorTree = function (root) {
	if (root === null) {
		return null;
	}
	if (root.left !== null || root.right !== null) {
		const r = root.left;
		root.left = root.right;
		root.right = r;
		mirrorTree(root.left);
		mirrorTree(root.right);
	}
	return root;
};
