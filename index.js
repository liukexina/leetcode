var getKthFromEnd = function (head, k) {
	// let size = 0;
	// let i = 0
	// let current = head;
	// while(current !== null) {
	//     current = current.next;
	//     size++
	// }
	// current = head
	// while(i !== size - k && current !== null) {
	//     current = current.next;
	//     i++
	// }
	// if(current === null) return null;
	// return current;

	let low = head;
	let fast = head;
	let i = 0;

	while (fast !== null) {
		if (i >= k) {
			low = low.next;
		}
		fast = fast.next;
		i++;
	}

	return low;
};
