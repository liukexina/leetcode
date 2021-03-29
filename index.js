var kthLargest = function (root, k) {
	let arr = [root];
	function getval(head) {
		if (head === null) return;
		if (head.right !== null) arr.push(head.right);
		if (head.left !== null) arr.push(head.left);
		getval(head.left);
		getval(head.right);
	}
	getval(root);
	arr.sort(function (a, b) {
		return b.val - a.val;
	});
	return arr[k - 1].val;
};
