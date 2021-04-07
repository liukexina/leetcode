var lowestCommonAncestor = function (root, p, q) {
	// while (root != null) {
	//     if (root.val < p.val && root.val < q.val) // p,q 都在 root 的右子树中
	//         root = root.right; // 遍历至右子节点
	//     else if (root.val > p.val && root.val > q.val) // p,q 都在 root 的左子树中
	//         root = root.left; // 遍历至左子节点
	//     else break;
	// }
	// return root;
	// if (p.val > q.val) { // 保证 p.val < q.val
	//     let tmp = p;
	//     p = q;
	//     q = tmp;
	// }
	// while (root != null) {
	//     if (root.val < p.val) // p,q 都在 root 的右子树中
	//         root = root.right; // 遍历至右子节点
	//     else if (root.val > q.val) // p,q 都在 root 的左子树中
	//         root = root.left; // 遍历至左子节点
	//     else break;
	// }
	// return root;
	if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q);
	if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q);
	return root;
};
