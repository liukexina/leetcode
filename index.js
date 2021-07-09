var reverseString = function (s) {
	let t;
	let i = 0;
	let length = s.length;
	while (i < length / 2) {
		t = s[i];
		s[i] = s[length - i - 1];
		s[length - i - 1] = t;
		i++;
	}
	return s;
};
