var firstUniqChar = function (s) {
	let map = new Map();
	for (const c of s) {
		map.set(c, map.has(c) ? false : true);
	}
	for (const item of map.keys()) {
		if (map.get(item)) return item;
	}
	return ' ';
};
