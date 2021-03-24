var firstUniqChar = function (s) {
	let arr = [];
	for (let i = 0; i < s.length; i++) {
		const str = s.substring(i + 1);
		if (arr.indexOf(s[i]) === -1) {
			if (str === '' || !str.includes(s[i])) {
				return s[i];
			} else {
				arr.push(s[i]);
			}
		}
	}
	return ' ';
};
