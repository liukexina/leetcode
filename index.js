function levelOrder(root) {
	const link = [];
	const queue = [];
	if(root != null) queue.push(root);
	while(queue.length !== 0) {
			const arr = []
			for(let i = queue.length ; i > 0 ; i--) {
					const node = queue.shift();
					arr.push(node.val)
					if(node.left) queue.push(node.left)
					if(node.right) queue.push(node.right);
			}
			link.push(arr);
	}
	return link;
}