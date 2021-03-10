var reverseList = function (head) {
	if (head === null || head.next === null) {
		return head;
	}

	const ret = reverseList(head.next);
	head.next.next = head;
	head.next = null;

	return ret;
};
