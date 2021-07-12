function isPrime(num) {
	if (num <= 3) {
		return num > 1;
	}
	// 不在6的倍数两侧的一定不是质数
	if (num % 6 != 1 && num % 6 != 5) {
		return false;
	}
	let sqrt = Math.sqrt(num);
	for (let i = 5; i <= sqrt; i += 6) {
		if (num % i == 0 || num % (i + 2) == 0) {
			return false;
		}
	}
	return true;
}
