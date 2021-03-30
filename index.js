var isBalanced = function (root) {
	return recur(root) != -1;
};

function rect(root) {
	if (root === null) return 0;
	let left = rect(root.left);
	if (left === -1) return -1;
	let right = rect(root.right);
	if (right === -1) return -1;
	return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;
}
